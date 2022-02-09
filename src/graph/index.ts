import { format, hasNumericValue, round } from "mathjs";
import { ColumnData, GroupedData } from "./types";

export function getAxisMinMaxStep(min: number, max: number): [ number, number, number ] {
    if (min == max) {
        min += 1;
        max += 1;
    }
    const range: number = max - min;
    const rangeRound: number = floatp(range, 1);
    let steps: number = getFirstSF(rangeRound);
    if (steps < 2) steps *= 10;
    if (steps < 3) steps *= 5;
    if (steps < 5) steps *= 2;
    let step: number = round(rangeRound / steps, 15);
    if (step == 0) step = 1;
    let minTick: number = round(min / step) * step;
    if (minTick > min) minTick -= step;
    let maxTick: number = round(max / step) * step;
    if (minTick < min) maxTick += step;
    if (maxTick == minTick) {
        maxTick++;
        minTick--;
    }
    return [ minTick, maxTick, step ];
}

function getFirstSF(value: number): number {
    if (value === 0) return 0;
    while (value < 0.1) value *= 10;
    while (value >= 1) value /= 10;
    value *= 10;
    return round(value);
}

export function floatp(value: number, precision: number = 2): number {
    return parseFloat(format(value, precision));
}

export function intf(value: number): number {
    return parseInt(value.toFixed(0));
}

export function getPixelValue(data: number, min: number, max: number, minPx: number, maxPx: number): number {
    return (data - min) / (max - min) * (maxPx - minPx) + minPx;
}

/**
 *  Groups data and provides the group with an array of index
 *  that fit into that group
 */
export function getGroupedData(data: ColumnData[], min: number, max: number, maxGroups: number): GroupedData {
    let uniqueValues: { [key: string]: number[] } = {};
    for (let i = 0; i < data.length; i++) {
        const value = data[i] as string;
        if (value in uniqueValues) uniqueValues[value].push(i);
        else uniqueValues[value] = [ i ];
    }
    const groups = Object.keys(uniqueValues);
    if (groups.length <= maxGroups) return uniqueValues;
    if (maxGroups < 4) {
        console.error('ERR SELECT CATEGORICAL OR NUMERICAL FOR VAR WITH MAX OR FEWER GROUPS');
        return {};
    }
    if (!hasNumericValue(groups[0])) {
        console.error('ERR SELECT CATEGORICAL VAR WITH MAX OR FEWER GROUPS OR NUMERICAL VAR');
        return {};
    }

    const groupSize = (max - min) / 4;
    const firstGroupSize = floatp(min + groupSize, 2);
    const secondGroupSize = floatp(min + groupSize * 2, 2);
    const thirdGroupSize = floatp(min + groupSize * 3, 2);
    uniqueValues = {};

    for (let i = 0; i < data.length; i++) {
        let group = 'invalid';
        if (hasNumericValue(data[i])) {
            const value = data[i] as number;
            if (value < firstGroupSize) group = `a: < ${ firstGroupSize }`
            else if (value < secondGroupSize) group = `b: ${ firstGroupSize } - ${ secondGroupSize }`
            else if (value < thirdGroupSize) group = `c: ${ secondGroupSize } - ${ thirdGroupSize }`
            else group = `d: > ${ thirdGroupSize }`;
        }
        if (group in uniqueValues) uniqueValues[group].push(i);
        else uniqueValues[group] = [ i ];
    }
    return uniqueValues;
}

export function sortFirst(as: string, bs: string): number {
    if (as == bs) return 0;
    const regex = /(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g;
    const aMatch = as.toLowerCase().match(regex);
    const bMatch = bs.toLowerCase().match(regex);
    let i = 0;
    if (aMatch == null) return -1;
    const length = aMatch.length;
    if (bMatch == null) return 1;
    while (i < length) {
        if (!bMatch[i]) return 1;
        const aValue: number = parseFloat(aMatch[i]);
        const bValue: number = parseFloat(bMatch[i]);
        if (aValue == bValue || isNaN(aValue) || isNaN(bValue)) {
            i++;
            continue;
        }
        const diff = aValue - bValue;
        if (!isNaN(diff)) return diff;
        return aValue > bValue ? 1 : -1;
    }
    return bMatch[i] ? -1 : 0;
}

export function getNumericMin(values: ColumnData[]): number {
    if (values.length == 0) return 0;
    let minValue = -1;
    for (const value of values) {
        if (typeof value == "number" && (minValue == -1 || value < minValue)) minValue = value;
        else if (typeof value == "string") {
            const number: number = parseFloat(value);
            if (minValue == -1 || number < minValue) minValue = number;
        }
    }
    return minValue;
}

export function getNumericMax(values: ColumnData[]): number {
    if (values.length == 0) return 0;
    let maxValue = 0;
    for (const value of values) {
        if (typeof value == "number" && value > maxValue) maxValue = value;
        else if (typeof value == "string") {
            const number: number = parseFloat(value);
            if (number > maxValue) maxValue = number;
        }
    }
    return maxValue;
}


export function text(
    ctx: CanvasRenderingContext2D,
    text: string,
    size: number,
    x: number,
    y: number,
    align: CanvasTextAlign = "left",
    fill = "#000000"
): void {
    ctx.fillStyle = fill;
    ctx.font = `bold ${ size }px Arial`;
    ctx.textAlign = align;
    ctx.fillText(text, x, y);
}

export function line(
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number
): void {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

export function box(
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number
): void {
    ctx.beginPath();
    ctx.rect(x1, y1, x2 - x1, y2 - y1);
    ctx.stroke();
}

export function watermark(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
): void {
    text(ctx, "Made with NZGM", 13, 10, height - 10, "left");
    text(ctx, "jacobtread.github.io/NZGM", 13, width - 10, height - 10, "right");
}
