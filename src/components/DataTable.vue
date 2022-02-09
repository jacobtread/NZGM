<script setup lang="ts">
import { useDataStore } from "../stores/data";
import { storeToRefs } from "pinia";
import { $ref } from "vue/macros";
import events from "../events";
import { computed, nextTick, onMounted } from "vue";

const store = useDataStore()
const { rows, cols } = storeToRefs(store)

let selectedCol = $ref(0)
let selectedRow = $ref(0)
let editing = $ref(false)
let limitView = $ref(false)


const visibleRows = computed(() => limitView ? rows.value.slice(0, Math.min(rows.value.length, 20)) : rows.value)

function select(row: number, col: number) {
    if (selectedRow != row || selectedCol != col) {
        selectedRow = row
        selectedCol = col
        editing = false
    }
}

function onKeyPress() {

}

function isEditing(row: number, col: number) {
    return editing && selectedCol == col && selectedRow == row
}


events.on('resizing', () => {
    limitView = true
})
events.on('resized', () => limitView = false)
const table = $ref<HTMLElement>()


onMounted(() => {
    table.addEventListener('scroll', () => console.log('scroll'))
})

function onTableScroll() {
    console.log(table.scrollTop)
}

function toggleEdit(event: MouseEvent) {
    editing = !editing
    const target: HTMLElement = event.target as HTMLElement
    nextTick(() => {
        const input: HTMLInputElement | null = target.querySelector('.table__input');
        if (input) input.focus()
    })
}

</script>
<template>
    <table class="table" ref="table" @scroll="onTableScroll">
        <thead class="table__head">
        <tr class="table__row table__row--head">
            <th class="table__column table__column--head">Id</th>
            <th v-for="(col, index) in cols" :key="index" class="table__column table__column--head">
                {{ col }}
            </th>
        </tr>
        </thead>
        <tr v-for="(row, rowIndex) in visibleRows" :key="rowIndex" class="table__row">
            <td class="table__column">
                {{ rowIndex }}
            </td>
            <td
                class="table__column"
                v-for="(item, colIndex) in row"
                :key="colIndex"
                @click="select(rowIndex, colIndex)"
                @dblclick="toggleEdit"
            >
                <input class="table__input"
                       v-if="isEditing(rowIndex, colIndex)"
                       type="text"
                       v-model="rows[rowIndex][colIndex]"/>
                <template v-else>{{ item }}</template>
            </td>
        </tr>
    </table>
</template>
<style scoped lang="scss">
.table {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    border-collapse: collapse;
    text-align: left;

    &__head {
        position: sticky;
        top: 0;
    }


    &__row {

        &:nth-child(odd) {
            background: #e8e8e8;
        }

        &--head {
            background: #333 !important;
            color: white;
        }
    }

    &__column {
        position: relative;
        padding: 0.5rem;
        text-align: center;

        &:nth-child(1) {
            text-align: left;
        }
    }

    &__column, &__input {
        font-size: 1rem;
    }

    &__input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        background: transparent;
        border: 1px solid black;
    }
}
</style>