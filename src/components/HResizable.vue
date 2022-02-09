<script setup lang="ts">

import { reactive } from "vue";
import { $ref } from "vue/macros";
import events from "../events";

const emit = defineEmits([ 'resizing', 'resized' ])


const root = $ref<HTMLDivElement>()
let resizing = $ref(false)

const leftStyle = reactive({ width: 'calc(50% - 5px)' });
const rightStyle = reactive({ width: 'calc(50% - 5px)', left: 'calc(50% + 5px)' });
const handleStyle = reactive({ left: 'calc(50% - 5px)' });

function startResizing() {
    if (!resizing) {
        emit('resizing')
        resizing = true
        document.body.style.cursor = 'row-resize'
    }
}

function stopResizing() {
    if (resizing) {
        emit('resized')
        events.emit('resized')
        resizing = false
        document.body.style.cursor = 'initial'
    }
}

type MouseMoveEvent = MouseEvent | { pageX: number }

function onMouseMove(event?: MouseMoveEvent) {
    if (!resizing || !event) return
    const x = event.pageX;
    const relX = x - root.getBoundingClientRect().x;
    const width = root.offsetWidth;
    const percent = (relX / width);
    const isOverflow = (width - (percent * width)) < 10;
    if (percent == 0) {
        handleStyle.left = leftStyle.width = `0`;
        rightStyle.left = `10px`;
        rightStyle.width = `calc(100% - 10px)`;
    } else if (isOverflow) {
        handleStyle.left = leftStyle.width = `calc(100% - 10px)`;
        rightStyle.left = rightStyle.width = `0`;
    } else {
        handleStyle.left = leftStyle.width = `calc(${ percent * 100 }% - 5px)`;
        rightStyle.left = `calc(${ percent * 100 }% + 5px)`;
        rightStyle.width = `calc(${ (1 - percent) * 100 }% - 5px)`;
    }
    events.emit('resizing');
}

function onTouchMove(event: TouchEvent) {
    const touch = event.touches[0];
    onMouseMove({ pageX: touch.pageX });
}

</script>
<template>
    <div
        ref="root"
        class="resizable"
        :class="{'resizable--resizing': resizing}"
        @mouseup="stopResizing"
        @mouseleave="stopResizing"
        @mousemove="onMouseMove"
        @touchend.passive="stopResizing"
        @touchmove.passive="onTouchMove"
    >
        <div class="resizable__area" :style="leftStyle">
            <div class="wrapper">
                <slot name="first"/>
            </div>
        </div>

        <div class="resizable__handle" :style="handleStyle" @mousedown="startResizing" @touchstart.passive="startResizing"/>

        <div class="resizable__area" :style="rightStyle">
            <div class="wrapper">
                <slot name="second"/>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
.resizable {
    position: relative;

    &__handle {
        position: absolute;
        top: 0;
        left: calc(50% - 5px);
        width: 10px;
        height: 100%;
        user-select: none;
        cursor: col-resize;
        touch-action: none;
        background: #e7e7e7;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            background: #999;
            width: 10px;
            height: 50px;
            transform: translateY(-50%);
        }

    }

    &__area {
        position: absolute;
        left: 0;
        top: 0;
        width: calc(50% - 5px);
        height: 100%;
        overflow: auto;
    }
}

.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>