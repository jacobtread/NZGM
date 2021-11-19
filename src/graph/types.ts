import { GraphSettings } from "@/store/modules/graph";

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
    data: { [key: string]: Array<Array<string|number>>, }

    getDataForColumn(key: string): Array<string>;
    getNumericDataForColumn(key: string): Array<number>;
}

export type GraphCalculationFunction<D> = (settings: GraphSettings) => D;
export type GraphRenderingFunction<D> = (context: CanvasRenderingContext2D, settings: GraphSettings, axisData: AxisData, data: D) => void;

export interface GraphFunctions<D> {
    calculate: GraphCalculationFunction<D>;
    render: GraphRenderingFunction<D>;
}