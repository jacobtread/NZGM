<script setup lang="ts">
import { $ref } from "vue/macros";


export type Item = [ string?, Action? ]

type Action = () => any

const props = defineProps([ 'items', 'name' ])
const items: Item[] = props.items as Item[]

let open = $ref(false)

const isMobile = () => window.innerWidth < 630

function mouseEnterOpen() {
    if (!isMobile()) open = true
}

function mouseLeaveClose() {
    if (!isMobile()) open = false
}

function mouseClickToggle() {
    if (isMobile()) open = !open
}


</script>
<template>
    <div class="menu"
         @mouseenter="mouseEnterOpen"
         @click="mouseClickToggle"
         @mouseleave="mouseLeaveClose"
    >
        <span class="menu__name">{{ name }}</span>
        <div class="menu__items" v-if="open">
            <template v-for="item of items">
                <button
                    v-if="item.length === 2"
                    class="menu__items__value"
                    @click="item[1]">{{ item[0] }}
                </button>
                <span v-else class="menu__items__spacer"></span>
            </template>
        </div>
    </div>
</template>
<style scoped lang="scss">
.menu {
    position: relative;

    display: inline-block;
    padding: 1rem;
    cursor: pointer;

    &__items {
        position: absolute;
        left: 50%;
        transform: translate(-50%);


        top: 100%;
        z-index: 1;
        width: 200px;
        display: grid;
        grid-template-columns: 1fr;
        padding: 0.5rem;
        background: #e5e5e5;
        border: 1px solid #bfbfbf;
        border-top: none;
        animation: 0.15s ease menu-in;

        &__value {
            text-align: left;
            padding: 0.5rem 0.5rem;
            background: transparent;
            border: transparent;
            cursor: pointer;
            font-size: 1rem;

            &:hover {
                background: #adadad;
            }
        }

        &__spacer {
            display: block;
            height: 2px;
            background: #c9c9c9;
        }
    }
}

@keyframes menu-in {
    0% {
        transform: translate(-50%, -20px);
        opacity: 0.5;
    }
    100% {
        transform: translate(-50%, 0px);
        opacity: 1;
    }
}

@media screen and (max-width: 630px) {
    .menu {
        width: 100%;
        background: #e5e5e5;
        display: block;
        padding: 1rem;

        &__name {
            padding-bottom: 0.5rem;
            display: block;
        }

        &__items {
            position: relative;
            width: 100%;
            left: 0;
            transform: translate(0, 0);
            animation: 0.15s ease menu-in-left;
            border: none;
            background: #d4d4d4;
        }
    }
}

@keyframes menu-in-left {
    0% {
        transform: translate(-20px);
        opacity: 0.5;
    }
    100% {
        transform: translate(0px);
        opacity: 1;
    }
}

</style>