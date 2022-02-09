<script setup lang="ts">
import { AxisData, GraphDefinition } from "../graph/types";
import { onMounted, reactive, ref, watch } from "vue";
import { DataState, useDataStore } from "../stores/data";
import { GraphState, useSettingsStore } from "../stores/settings";
import types from "../graph/list";
import events from "../events";
import { watermark } from "../graph";
import { $computed, $ref } from "vue/macros";

const state = useSettingsStore();
const rootElement = ref<HTMLDivElement | null>(null);
const canvasElement = ref<HTMLCanvasElement | null>(null);
const graph = (useSettingsStore());
const data = (useDataStore());

data.$subscribe(init)
graph.$subscribe(init)

function init() {
    calculateGraph()
    render()
}

const graphDefRef = $computed<GraphDefinition<any>>(() => types[graph.type]);
let context = $ref<CanvasRenderingContext2D | null>(null);

const calcData = ref<any>(null);

const invalidRows = ref<any>([]);

const axisData: AxisData = {
    hasAxis(key: string): boolean {
        return key in graph.axis;
    },
    getColumnName(key: string): string {
        return graph.axis[key]!;
    },
    getDataForColumn(key: string): Array<string> {
        const colName = graph.axis[key]!;
        const index = data.cols.indexOf(colName);
        const rows: string[] = [];
        const dataRows = data.rows;
        for (let i = 0; i < dataRows.length; i++) {
            const row: (string | number)[] = dataRows[i];
            rows.push(row[index] as string);
        }
        return rows;
    },
    getNumericDataForColumn(key: string): Array<number> {
        const colName = graph.axis[key]!;
        const index = data.cols.indexOf(colName);
        const rows: number[] = [];
        const dataRows = data.rows;
        for (let i = 0; i < dataRows.length; i++) {
            const row: (string | number)[] = dataRows[i];
            const col = row[index];
            if (typeof col !== 'number') {
                invalidRows.value.push([ i, col ])
            } else {
                rows.push(row[index] as number);
            }
        }
        return rows;
    }
}


function calculateGraph() {
    const graphDef: GraphDefinition<any> = graphDefRef;
    calcData.value = graphDef.functions.calculate(graph.settings, axisData);
    render();
}

onMounted(() => {
    const canvas = canvasElement.value as HTMLCanvasElement;
    context = canvas.getContext('2d') as CanvasRenderingContext2D;
    calculateGraph();
    render()
});

events.on('resizing', render);
window.addEventListener('resize', render);

function render() {
    const root = rootElement.value;
    const canvas = canvasElement.value as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D | null = context;

    if (root === null || ctx == null || calcData.value == null) return;

    const graphDef: GraphDefinition<any> = graphDefRef;

    const width = root.offsetWidth;
    const height = root.offsetHeight;

    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.fillStyle = "#ffffff";
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();

    graphDef.functions.render(ctx, graph, axisData, calcData.value);

    watermark(ctx, width, height)
}

</script>
<template>
    <div ref="rootElement" class="root">
        <canvas ref="canvasElement" width="500" height="500"/>
    </div>
</template>
<style scoped lang="scss">
.root {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>