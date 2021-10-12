import store, { GraphData, RowGroup } from "@/store";
import { DataGroups, Settings } from "@/graph/types";
import {
  axisMinMaxStep,
  box,
  dataFromIndexes,
  dataToPixel,
  floatp,
  getColumnData,
  getColumnDataNumeric,
  getPointColor,
  invScale,
  line,
  numericMax,
  numericMin,
  scale,
  scrollToRow,
  sortFirstNumber,
  splitData,
  text
} from "@/graph";
import { lowerQuartile, maxNoOutliers, mean, median, minNoOutliers, random, standardDeviation, upperQuartile } from "@/tools/math";

let settings: Settings;

export function createDotPlot(ctx: CanvasRenderingContext2D): void {

  const width: number = ctx.canvas.width;
  const height: number = ctx.canvas.height;

  const graphData: GraphData = store.state.graph;
  settings = graphData.settings;

  const xColumn: number = graphData.xAxis;
  const yColumn: number = graphData.yAxis;
  const zColumn: number = graphData.zAxis;

  const columnNames: string[] = store.state.data.cols;

  const [xPoints, xSkipped]: [number[], RowGroup] = getColumnDataNumeric(xColumn);
  const [yPoints, ySkipped]: [RowGroup, RowGroup] = getColumnData(yColumn);
  const [zPoints, zSkipped]: [RowGroup, RowGroup] = getColumnData(zColumn);

  const skipped: RowGroup = [...xSkipped, ...ySkipped, ...zSkipped];

  const left = scale(90);
  const right = width - scale(60);

  if (xPoints.length == 0) { // No Numeric Data Provided
    text(ctx, "No Numeric Data Selected", 20, width / 2, (height / 2) - scale(45), "center", "#FF0000");
    text(ctx, "the 𝑥 axis requires numeric data", 15, width / 2, (height / 2) - scale(15), "center", "#666666");
    text(ctx, "to render a graph", 15, width / 2, (height / 2) + scale(15), "center", "#666666");
    return; // Dont continue rendering;
  }

  if (skipped.length != 0 && settings.bool('show-removed')) { // Some data was not numeric
    text(ctx, "Some non numeric data was present", 10, scale(10), scale(30), "left", "#FF0000");
    text(ctx, "at the following rows:", 10, scale(10), scale(45), "left", "#FF0000");

    let y: number = scale(60);
    for (const index of skipped) {
      // Print out the row indexes
      text(ctx, `${index}`, 10, scale(10), y, "left", "#666666");
      y += scale(15);
    }
  }

  const baseline: number = height - scale(60); /* The baseline point on the graph */
  const maxHeight: number = height - scale(120); /* The highest allowed point */

  const minX = Math.min(...xPoints);
  const maxX = Math.max(...xPoints);

  const minY = numericMin(yPoints);
  const maxY = numericMax(yPoints);

  const minZ = numericMin(zPoints);
  const maxZ = numericMax(zPoints);

  // Calculates min, max and step for the graph;
  const [graphMin, graphMax, graphStep]: [number, number, number] = axisMinMaxStep(minX, maxX);

  // Render Graph Title
  text(ctx, graphData.title, 20, width / 2, scale(30), "center");

  // Render X-Axis Title
  text(ctx, columnNames[xColumn], 15, width / 2, height - scale(10), "center");

  const yGroups: DataGroups = splitData(yPoints, 10, minY, maxY);
  const zGroups: DataGroups = splitData(zPoints, 10, minZ, maxZ);

  if (yColumn != -1) { // Render Y-Axis Title
    const x: number = scale(20);
    const y: number = height / 2;
    ctx.save();
    ctx.translate(x, y);
    // Rotate -90deg 
    ctx.rotate(-Math.PI / 2);
    text(ctx, columnNames[yColumn], 15, 0, 0, "center");
    ctx.restore();
  }

  if (zColumn != -1) {
    const groups: string[] = Object.keys(zGroups);
    let x: number = scale(60);
    // Width of each block
    const blockWidth: number = (width - scale(40)) / groups.length;
    for (const group of groups) {
      const indexes: number[] = zGroups[group];
      const width: number = x + blockWidth;
      if (indexes.length > 0) {
        const data: number[] = dataFromIndexes(indexes, xPoints)
        renderGraph(ctx, data, yPoints, yGroups, left + scale(30), right - scale(50), baseline, graphMin, graphMax, graphStep, maxHeight)
      }
      text(ctx, group, 15, (x + (width - scale(50))) / 2, baseline - maxHeight, "center");
      x += blockWidth;
    }
  } else {
    renderGraph(ctx, xPoints, yPoints, yGroups, left, right, baseline, graphMin, graphMax, graphStep, maxHeight);
  }

}

function renderGraph(
  ctx: CanvasRenderingContext2D,
  xPoints: number[],
  yPoints: RowGroup,
  yGroups: DataGroups,
  left: number,
  right: number,
  baseline: number,
  min: number,
  max: number,
  step: number,
  maxHeight: number,
): void {
  renderGrid(ctx, left, right, baseline + scale(10), min, max, step);
  if (yPoints.length > 0) {
    const groups: string[] = Object.keys(yGroups);
    groups.sort(sortFirstNumber).reverse();
    const groupMaxHeight: number = maxHeight / groups.length;
    let y: number = baseline;
    for (const group of groups) {
      const indexes: number[] = yGroups[group];
      if (indexes.length > 0) {
        const data: number[] = dataFromIndexes(indexes, xPoints)
        renderData(ctx, data, left, right, y, min, max, maxHeight);
      }
      text(ctx, group, 15, right + scale(10), y - (groupMaxHeight / 2), "right");
      y -= groupMaxHeight;
    }
  } else {
    renderData(ctx, xPoints, left, right, baseline, min, max, maxHeight);
  }
}

function renderGrid(
  ctx: CanvasRenderingContext2D,
  x1: number,
  x2: number,
  y: number,
  min: number,
  max: number,
  step: number
): void {
  const gridLineTop = 50;
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#000000";
  ctx.lineWidth = scale(1);
  line(ctx, x1 - scale(10), y, x2 + scale(10), y);
  let dataX: number = floatp(min, 8);
  const renderGridLines: boolean = settings.bool("grid-lines");
  while (dataX <= max) {
    const x: number = dataToPixel(dataX, min, max, x1, x2);
    line(ctx, x, y, x, y + scale(6));
    text(ctx, `${dataX}`, 15, x, y + scale(18), "center");
    if (renderGridLines) {
      ctx.strokeStyle = "#DDDDDD";
      line(ctx, x, y, x, gridLineTop);
      ctx.strokeStyle = "#000000"
    }
    dataX = floatp(dataX + step, 8);
  }
}

function renderData(
  ctx: CanvasRenderingContext2D,
  points: number[],
  left: number,
  right: number,
  baseline: number,
  min: number,
  max: number,
  maxHeight: number,
  sortIndex = 2,
  createMap = true
): void {
  const map: HTMLMapElement = document.getElementById(
    "canvasMap"
  ) as HTMLMapElement;

  ctx.lineWidth = scale(2);

  if (settings.bool('thick-liness')) {
    ctx.lineWidth = scale(5);
  }

  const stripGraph = settings.bool("strip-graph");
  const stackDots: boolean = settings.bool("stacked-dots");
  const pointSize: number = settings.num("point-size");
  const pointLabels: boolean = settings.bool("point-labels");

  const pointRadius = scale(pointSize / 2)

  const positions: [number, number, number, number][] = [];
  for (let index = 0; index < points.length; index++) {
    const data = points[index];
    const x: number = dataToPixel(data, min, max, left, right);
    let xRel: number;
    if (stackDots) {
      xRel = Math.floor(x / (pointRadius * 2)) * pointRadius * 2;
    } else {
      xRel = Math.floor(x / (pointRadius * 3)) * pointRadius * 3;
    }
    positions.push([x, xRel, data, index])
  }

  const counts: { [key: number]: number } = {}
  for (const [_, xRel] of positions) {
    _;
    if (counts[xRel] == undefined) counts[xRel] = 1;
    else counts[xRel]++;
  }
  const maxPoints: number = Math.max(...Object.values(points));

  let y: number = baseline;

  let lastX = 0;

  const yHeight: number = (maxHeight - scale(10) / maxPoints < pointRadius * 2) ?
    (maxHeight - scale(10) / maxPoints) :
    pointRadius * 2;

  positions.sort((a, b) => a[sortIndex] - b[sortIndex]);

  const pointColor = getPointColor(settings);
  for (const [x, xRel, data, index] of positions) {
    if (lastX == xRel) y -= yHeight;
    else y = baseline - scale(10);

    if (stripGraph) y = random(
      baseline - scale(10),
      baseline - maxHeight + scale(10) + (maxHeight / 2)
    );

    lastX = xRel;
    if (pointColor != null) {
      // Render Point
      ctx.beginPath();
      ctx.strokeStyle = pointColor;
      ctx.arc(x, y, pointRadius, 0, 2 * Math.PI);
      ctx.stroke();
    }

    if (createMap) {
      const area: HTMLAreaElement = document.createElement("area");
      area.shape = "circle";
      area.coords = `${invScale(x)},${invScale(y)},${invScale(pointRadius)}`
      area.alt = `${data}`;
      area.href = "#";
      area.title = `${index + 1}: ${data}`;
      area.onmouseenter = function() {
        scrollToRow(index);
      }
      map.appendChild(area);
    }

    if (pointLabels) {
      text(ctx, `${data}`, 10, (x + pointRadius) + scale(2), y + scale(4), "left", "#0000FF")
    }
  }

  drawAdditonal(ctx, points, left, right, baseline, min, max, maxHeight);

}

function drawAdditonal(
  ctx: CanvasRenderingContext2D,
  points: number[],
  left: number,
  right: number,
  baseline: number,
  min: number,
  max: number,
  maxHeight: number,
) {

  const lq: number = lowerQuartile(points);
  const uq: number = upperQuartile(points);

  const med: number = median(points);
  const mea: number = mean(points);

  const minValue: number = floatp(Math.min(...points), 10);
  const maxValue: number = floatp(Math.max(...points), 10);

  const minNO: number = minNoOutliers(points, lq, uq);
  const maxNO: number = maxNoOutliers(points, lq, uq);

  const sd: number = standardDeviation(points);
  const minGraph: number = dataToPixel(minValue, min, max, left, right);
  const lqGraph: number = dataToPixel(lq, min, max, left, right);
  const medGraph: number = dataToPixel(med, min, max, left, right);
  const uqGraph: number = dataToPixel(uq, min, max, left, right);
  const maxGraph: number = dataToPixel(maxValue, min, max, left, right);
  const minNOGraph: number = dataToPixel(minNO, min, max, left, right);
  const maxNOGraph: number = dataToPixel(maxNO, min, max, left, right);
  const count: number = points.length;

  const h: number = maxHeight * 0.1;

  if (settings.bool("box-plot")) {
    drawBoxPlot(
      ctx,
      minGraph,
      maxGraph,
      lqGraph,
      uqGraph,
      medGraph,
      baseline - maxHeight * 0.1,
      h
    )
  }

  if (settings.bool("high-box-plot")) {
    drawBoxPlot(
      ctx,
      minGraph,
      maxGraph,
      lqGraph,
      uqGraph,
      medGraph,
      baseline - maxHeight * 0.8,
      h
    )
  }

  if (settings.bool("box-no-whisker")) {
    drawBoxPlot(
      ctx,
      minGraph,
      maxGraph,
      lqGraph,
      uqGraph,
      medGraph,
      baseline - maxHeight * 0.1,
      h,
      false
    );
  }
  if (settings.bool("box-no-outlier")) {
    drawBoxPlot(
      ctx,
      minNOGraph,
      maxNOGraph,
      lqGraph,
      uqGraph,
      medGraph,
      baseline - maxHeight * 0.1,
      h
    );
  }

  if (settings.bool('sum')) {
    const y = baseline - h;
    const textSize: number = settings.num('sum-text-size');
    text(ctx, `min: ${minValue}`, textSize, left - scale(60), y - scale(4 * textSize), "left", "#FF0000")
    text(ctx, `max: ${maxValue}`, textSize, left - scale(60), y - scale(3 * textSize), "left", "#FF0000")
    text(ctx, `mean: ${mea}`, textSize, left - scale(60), y - scale(2 * textSize), "left", "#FF0000")
    text(ctx, `med: ${med}`, textSize, left - scale(60), y - scale(textSize), "left", "#FF0000")
    text(ctx, `lq: ${lq}`, textSize, left - scale(60), y, "left", "#FF0000")
    text(ctx, `uq: ${uq}`, textSize, left - scale(60), y + scale(textSize), "left", "#FF0000")
    text(ctx, `sd: ${sd}`, textSize, left - scale(60), y + scale(2 * textSize), "left", "#FF0000")
    text(ctx, `num: ${count}`, textSize, left - scale(60), y + scale(3 * textSize), "left", "#FF0000")
  }

  const informalCI: boolean = settings.bool('informal-ci');
  const informalCILimits: boolean = settings.bool('ci-limits');

  if (informalCI || informalCILimits) {

    const halfWidth: number = 1.5 * (uq - lq) / Math.sqrt(count);
    const minIn: number = floatp(med - halfWidth, 5);
    const maxIn: number = floatp(med + halfWidth, 5);

    const minGraph: number = dataToPixel(minIn, min, max, left, right);
    const maxGraph: number = dataToPixel(maxIn, min, max, left, right);

    if (informalCI) {
      const y: number = baseline - h;
      ctx.lineWidth = scale(10);
      ctx.strokeStyle = "#0000FF";
      line(ctx, minGraph, y, maxGraph, y);
    }

    if (informalCILimits) {
      const y: number = (baseline - h) + (maxHeight * 0.1 + scale(8));
      text(ctx, `${minIn}`, 10, minGraph, y, "right", "#0000FF")
      text(ctx, `${maxIn}`, 10, maxGraph, y, "left", "#0000FF")
    }

  }

  if (settings.bool('mean-dot')) {
    const meanGraph: number = dataToPixel(mea, min, max, left, right);
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(meanGraph, baseline - scale(5), scale(7), 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }
}

function drawBoxPlot(
  ctx: CanvasRenderingContext2D,
  min: number,
  max: number,
  lq: number,
  uq: number,
  med: number,
  y: number,
  h: number,
  whisker = true,
): void {
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = scale(1);
  // Quartile
  box(ctx, lq, y - h, uq, y + h)
  // Median Line
  line(ctx, med, y - h, med, y + h);
  if (whisker) {
    // Left Whisker
    line(ctx, min, y, lq, y); // Line
    line(ctx, min, y - scale(5), min, y + scale(5)); // Cap

    // Right Whisker
    line(ctx, uq, y, max, y); // Line
    line(ctx, max, y - scale(5), max, y + scale(5)); // Cap
  }
}
