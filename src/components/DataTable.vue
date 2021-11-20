<template>
    <table class="table">
        <thead class="table__head">
        <tr>
            <th v-for="(col, index) in data.cols" :key="index">
                {{ col }}
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row, rowIndex) in data.rows" :key="rowIndex">
            <td v-for="(item, colIndex) in row" :key="colIndex">
                {{ item }}
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { DataState } from "@/store/modules/data";

export default defineComponent({
    setup() {
        const { state } = useStore();
        const data: DataState = state.data;
        return { data }
    }
})
</script>

<style scoped lang="scss">
.table {
    height: 100%;
    overflow: auto;

    &__head {
        position: sticky;
        top: 0;
    }
}
</style>