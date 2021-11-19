import { GraphDefinition } from "@/graph/types";
import dotPlot from "@/graph/graphs/dot-plot"

const types: { [key: string]: GraphDefinition<any> } = {
    'dot-plot': {
        label: 'Dot Plot (& Box & Whisker)',
        axis: [
            { id: 'numerical', label: 'Numerical', required: true },
            { id: 'category_1', label: 'Category 1', required: true },
            { id: 'category_2', label: 'Category 2', required: false },
        ],
        settings: [],
        functions: dotPlot
    }
};

export default types;