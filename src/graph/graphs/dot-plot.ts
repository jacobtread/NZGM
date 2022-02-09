import { max, min } from "mathjs";
import { floatp, getAxisMinMaxStep, getGroupedData, getNumericMax, getNumericMin, getPixelValue, line, sortFirst, text } from "../index";
import { AxisData, GraphFunctions, GroupedData } from "../types";
import { GraphSettings, GraphState } from "../../stores/settings";

export interface Data {
    x: { name: string, min: number, max: number, data: number[] };
    y?: { name: string, groups: GroupedData, min: number, max: number };
    z?: { name: string, groups: GroupedData, min: number, max: number };
    graph: { min: number, max: number, step: number };
}

function calculate(settings: GraphSettings, axisData: AxisData): Data | null {

    const out: Data = {
        x: { name: '', min: 0, max: 0, data: [] },
        graph: { min: 0, max: 0, step: 0 },
    }

    const xPoints: number[] = axisData.getNumericDataForColumn('numerical');
    if (xPoints.length < 1) return null;
    const minX = min(xPoints);
    const maxX = max(xPoints);
    out.x = { data: xPoints, name: axisData.getColumnName('numerical'), min: minX, max: maxX }
    const [ graphMin, graphMax, graphStep ] = getAxisMinMaxStep(minX, maxX);
    out.graph = { min: graphMin, max: graphMax, step: graphStep }

    if (axisData.hasAxis('category_1')) {
        const data = axisData.getDataForColumn('category_1');
        const min = getNumericMin(data);
        const max = getNumericMax(data);
        out.y = { name: axisData.getColumnName('category_1'), min, max, groups: getGroupedData(data, min, max, 10) }
    }

    if (axisData.hasAxis('category_2')) {
        const data = axisData.getDataForColumn('category_2');
        const min = getNumericMin(data);
        const max = getNumericMax(data);
        out.z = { name: axisData.getColumnName('category_2'), min, max, groups: getGroupedData(data, min, max, 10) }
    }

    if (settings.bool('sum')) {

    }

    return out;

}

function render(ctx: CanvasRenderingContext2D, state: GraphState, axisData: AxisData, data: Data) {
    const { width, height } = ctx.canvas;

    const left = 90;
    const right = width - 60;

    const baseline = height - 60; /* The baseline point on the graph */
    const maxHeight = height - 120; /* The highest allowed point */

    const graphData = data.graph;
    renderGrid(ctx, state.settings, { x1: left, x2: right, y: baseline + 10 }, graphData);

    if (data.y !== undefined) {
        const x = 20;
        const y = height / 2;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-Math.PI / 2);
        text(ctx, data.y.name, 15, 0, 0, 'center');
        ctx.restore();
        if (data.z !== undefined) {

        } else {
            const groups = data.y.groups;
            const groupKeys = Object.keys(groups);
            groupKeys.sort(sortFirst);
            const groupMaxHeight: number = maxHeight / groupKeys.length;
            let y: number = baseline;
            for (let i = groupKeys.length - 1; i >= 0; i--) {
                const key = groupKeys[i];
                const indexes = groups[key];

                if (indexes.length > 0) {
                    renderData(ctx, data.x.data, indexes, {
                        x1: left,
                        x2: right,
                        y
                    }, graphData, state.settings, maxHeight);
                    // TODO: Render data
                }

                y -= groupMaxHeight;
            }
        }
    } else {
        // TODO: RENDER X DATA
    }
}

type Position = { x1: number, x2: number, y: number };
type GraphData = { min: number, max: number, step: number };

function renderGrid(
    ctx: CanvasRenderingContext2D,
    settings: GraphSettings,
    pos: Position,
    graphData: GraphData
) {
    const gridLineTop = 50;
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#000000";
    ctx.lineWidth = 1;
    line(ctx, pos.x1 - 10, pos.y, pos.x2 + 10, pos.y);
    let x: number = floatp(graphData.min, 8);
    const renderGridLines: boolean = settings.bool("grid-lines");
    while (x <= graphData.max) {
        const pixelX: number = getPixelValue(x, graphData.min, graphData.max, pos.x1, pos.x2);
        line(ctx, pixelX, pos.y, pixelX, pos.y + 6);
        text(ctx, `${ x }`, 15, pixelX, pos.y + 18, "center");
        if (renderGridLines) {
            ctx.strokeStyle = "#DDDDDD";
            line(ctx, pixelX, pos.y, pixelX, gridLineTop);
            ctx.strokeStyle = "#000000"
        }
        x = floatp(x + graphData.step, 8);
    }
}

function renderData(
    ctx: CanvasRenderingContext2D,
    data: number[], indexes: number[],
    pos: Position,
    graphData: GraphData,
    settings: GraphSettings,
    maxHeight: number,
) {
    const stripGraph = settings.bool("strip-graph");
    const stackDots: boolean = settings.bool("stacked-dots");
    const pointSize: number = 7;//settings.num("point-size");
    const pointLabels: boolean = settings.bool("point-labels");
    const pointRadius = pointSize / 2;
    const positions: Array<[ number, number, number, number ]> = [];
    const heights: { [key: number]: number } = {};
    for (const index of indexes) {
        const value = data[index];
        const x = getPixelValue(value, graphData.min, graphData.max, pos.x1, pos.x2);
        if (value in heights) heights[value]++;
        else heights[value] = 1;
        const y = pos.y - 10 - (pointSize * heights[value]);
        ctx.beginPath();
        ctx.strokeStyle = '#000000';
        ctx.arc(x, y, pointRadius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

export default { calculate, render } as GraphFunctions<Data>