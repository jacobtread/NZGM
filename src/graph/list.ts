import { GraphDefinition } from './types';
import dotPlot from './graphs/dot-plot'

const types: { [key: string]: GraphDefinition<any> } = {
    'dot-plot': {
        label: 'Dot Plot (& Box & Whisker)',
        axis: [
            { id: 'numerical', label: 'Numerical', required: true },
            { id: 'category_1', label: 'Category 1', required: false },
            { id: 'category_2', label: 'Category 2', required: false },
        ],
        settings: [
            { id: 'point-size', label: 'Point Size', type: 'slider', min: 3, max: 19, step: 1, default: 7 },
            { id: 'point-transparency', label: 'Point Transparency', type: 'slider', min: 0, max: 10, step: 0.1, default: 5 },
            { id: 'sum', label: 'Summaries', type: 'toggle', default: false },
            { id: 'sum-text-size', label: 'Summary Text Size', type: 'slider', min: 5, max: 25, step: 1, default: 13 },
            { id: 'box-plot', label: 'Box Plots', type: 'toggle', default: false },
            { id: 'strip-graph', label: 'Strip Graph', type: 'toggle', default: false },
            { id: 'high-box-plot', label: 'High Box Plot', type: 'toggle', default: false },
            { id: 'box-no-whisker', label: 'Box (No Whisker)', type: 'toggle', default: false },
            { id: 'box-no-outlier', label: 'Box (No Outlier)', type: 'toggle', default: false },
            { id: 'informal-ci', label: 'Informal C-I', type: 'toggle', default: false },
            { id: 'ci-limits', label: 'C-I Limits', type: 'toggle', default: false },
            { id: 'point-labels', label: 'Point Labels', type: 'toggle', default: false },
            { id: 'mean-dot', label: 'Mean Dot', type: 'toggle', default: false },
            { id: 'stack-dots', label: 'Stack Dots', type: 'toggle', default: true },
            { id: 'grid-lines', label: 'Grid Lines', type: 'toggle', default: true },
            { id: 'invert-colours', label: 'Invert Colours', type: 'toggle', default: false },
            { id: 'thick-lines', label: 'Thick Lines', type: 'toggle', default: false },
            { id: 'show-removed', label: 'Show row of removed points', type: 'toggle', default: true },
        ],
        functions: dotPlot
    }
};

export default types;