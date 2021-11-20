import { GraphSettings, GraphState } from "@/store/modules/graph";

export interface GraphDefinition<D> {
    label: string;
    settings: GraphSettingDefinition[];
    axis: GraphAxisDefinition[];
    functions: GraphFunctions<D>;
}

export type GraphSettingType = 'toggle' | 'slider';

export interface GraphAxisDefinition {
    id: string;
    label: string;
    required: boolean;
}

export interface GraphSettingDefinition {
    id: string;
    label: string;
    type: GraphSettingType;
    default: boolean | number;
    // Slider Properties
    min?: number;
    max?: number;
    step?: number;
}

export interface AxisData {
    hasAxis(key: string): boolean;

    getDataForColumn(key: string): Array<ColumnData>;

    getNumericDataForColumn(key: string): Array<number>;

    getColumnName(key: string): string;
}

export type GraphCalculationFunction<D> = (settings: GraphSettings, axisData: AxisData) => D;
export type GraphRenderingFunction<D> = (context: CanvasRenderingContext2D, state: GraphState, axisData: AxisData, data: D) => void;

export interface GraphFunctions<D> {
    calculate: GraphCalculationFunction<D>;
    render: GraphRenderingFunction<D>;
}

export interface GroupedData {
    [key: string]: number[]
}

export type ColumnData = string | number | boolean;