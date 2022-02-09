<script setup lang="ts">

import { reactive } from "vue";
import { $ref } from "vue/macros";
import events from "../events";

const emit = defineEmits([ 'resizing', 'resized' ])


const root = $ref<HTMLDivElement>()
let resizing = $ref(false)

const topStyle = reactive({ height: 'calc(50% - 5px)' });
const bottomStyle = reactive({ height: 'calc(50% - 5px)', top: 'calc(50% + 5px)' });
const handleStyle = reactive({ top: 'calc(50% - 5px)' });

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

type MouseMoveEvent = MouseEvent | { pageY: number }

function onMouseMove(event?: MouseMoveEvent) {
    if (!resizing.valueOf() || !event) return
    const y = event.pageY;
    const relY = y - root.offsetTop - root.getBoundingClientRect().y;
    const height = root.offsetHeight;
    const percent = (relY / height);
    const isOverflow = (height - (percent * height)) < 10;
    if (percent == 0) {
        handleStyle.top = topStyle.height = `0`;
        bottomStyle.top = `10px`;
        bottomStyle.height = `calc(100% - 10px)`;
    } else if (isOverflow) {
        handleStyle.top = topStyle.height = `calc(100% - 10px)`;
        bottomStyle.top = bottomStyle.height = `0`;
    } else {
        handleStyle.top = topStyle.height = `calc(${ percent * 100 }% - 5px)`;
        bottomStyle.top = `calc(${ percent * 100 }% + 5px)`;
        bottomStyle.height = `calc(${ (1 - percent) * 100 }% - 5px)`;
    }
    events.emit('resizing');
}

function onTouchMove(event: TouchEvent) {
    const touch = event.touches[0];
    onMouseMove({ pageY: touch.pageY });
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
        <div class="resizable__area" :style="topStyle">
            <div class="wrapper">
                <slot name="first"/>
            </div>
        </div>

        <div class="resizable__handle" :style="handleStyle" @mousedown="startResizing" @touchstart.passive="startResizing"/>

        <div class="resizable__area" :style="bottomStyle">
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
        top: calc(50% - 5px);
        left: 0;
        width: 100%;
        height: 10px;
        user-select: none;
        cursor: row-resize;
        touch-action: none;
        background: #e7e7e7;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            background: #999;
            width: 50px;
            height: 10px;
            transform: translateX(-50%);
        }

    }

    &__area {
        position: absolute;
        left: 0;
        top: 0;
        height: calc(50% - 5px);
        width: 100%;
        overflow: auto;
    }
}


.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>