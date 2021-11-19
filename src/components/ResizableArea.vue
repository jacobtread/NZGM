<template>
    <div
        ref="root"
        class="resizable"
        :class="{'resizable--resizing': resizing}"
        @mouseup="stopResize"
        @mouseleave="stopResize"
        @mousemove="onMouseMove"
    >

        <div class="resizable__area" :style="leftStyle">
            <slot name="first"/>
        </div>

        <div class="resizable__handle" :style="handleStyle" @mousedown="startResize"/>

        <div class="resizable__area" :style="rightStyle">
            <slot name="second"/>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
    emits: [ 'resized', 'resizing' ],
    setup: function (_, { emit }) {

        const root = ref(null);

        let resizing = ref(false);

        const leftStyle = reactive({ width: 'calc(50% - 5px)' });
        const rightStyle = reactive({ width: 'calc(50% - 5px)', left: 'calc(50% + 5px)' });
        const handleStyle = reactive({ left: 'calc(50% - 5px)' });

        function startResize() {
            emit('resizing');
            resizing.value = true;
            document.body.style.cursor = 'col-resize';
        }

        function stopResize() {
            emit('resized');
            resizing.value = false;
            document.body.style.cursor = 'initial';

        }

        function onMouseMove(event: MouseEvent) {
            if (!resizing.value || !event || root.value == null) return;
            const x = event.pageX;
            const el = root.value! as HTMLDivElement;
            const relX = x - el.offsetLeft;
            const width = el.offsetWidth;
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
        }

        return {
            startResize, stopResize, onMouseMove,
            leftStyle, rightStyle, handleStyle,
            resizing, root
        };
    }
})
</script>

<style scoped lang="scss">
.resizable {
    position: relative;

    &__handle {
        position: absolute;
        top: 0;
        left: calc(50% - 5px);
        width: 10px;
        height: 100%;
        background: purple;

        user-select: none;

        cursor: col-resize;
    }

    &__area {
        position: absolute;

        left: 0;
        top: 0;
        width: calc(50% - 5px);
        height: 100%;

        &:nth-of-type(1) {
            background: blue;
        }

        &:nth-of-type(3) {
            background: red;
        }
    }

}
</style>