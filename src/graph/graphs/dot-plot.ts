import { GraphSettings } from "@/store/modules/graph";
import { GraphFunctions } from "@/graph/types";

export interface Data {

}

function calculate(setting: GraphSettings): Data {
    return {}
}

function render(context: CanvasRenderingContext2D, setting: GraphSettings, data: Data) {

}

export default { calculate, render} as GraphFunctions<Data>