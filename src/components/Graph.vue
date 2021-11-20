<template>
    <div ref="rootElement" class="root">
        <canvas ref="canvasElement" width="500" height="500"/>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { GraphState } from "@/store/modules/graph";
import { DataState } from "@/store/modules/data";
import { AxisData, GraphDefinition } from "@/graph/types";
import types from "@/graph/list";
import { useStore } from "vuex";
import { watermark } from "@/graph";
import events from "@/event";

export default defineComponent({
    setup() {
        const { state } = useStore();
        const rootElement = ref<HTMLDivElement | null>(null);
        const canvasElement = ref<HTMLCanvasElement | null>(null);
        const graph: GraphState = state.graph;
        const data: DataState = state.data;
        const graphDefRef = computed<GraphDefinition<any>>(() => types[graph.type]);
        const context = ref<CanvasRenderingContext2D | null>(null);

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

        watch(data, () => {
            const graphDef: GraphDefinition<any> = graphDefRef.value;
            calcData.value = graphDef.functions.calculate(graph.settings, axisData);
            render();
        });

        onMounted(() => {
            const canvas = canvasElement.value as HTMLCanvasElement;
            context.value = canvas.getContext('2d') as CanvasRenderingContext2D;
            render();
        });
        events.on('resizing', render);
        window.addEventListener('resize', render)

        function render() {
            const root = rootElement.value as HTMLDivElement;
            const canvas = canvasElement.value as HTMLCanvasElement;
            const ctx = context.value;
            if (ctx == null || calcData.value == null) return;
            const graphDef: GraphDefinition<any> = graphDefRef.value;

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

        return { canvasElement, rootElement }

    }
})
</script>

<style scoped lang="scss">
.root {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>