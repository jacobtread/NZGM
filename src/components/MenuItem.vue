<template>
    <div class="menu" :class="{'menu--expanded':expanded}" @mouseleave="expanded = false" @mouseenter="expanded = true">
        <span class="menu__label">{{ label }}</span>
        <transition name="menu">
            <div v-if="expanded" class="menu__items">
                <template v-for="(item, index) in items" :key="index">
                    <button v-if="item.length > 0" @click="item.length === 2 ? item[1]() : item[2]()"
                            class="menu__items__value">
                        <icon v-if="item.length > 2" :icon="item[1]" class="menu__items__value__icon"/>
                        {{ item[0] }}
                    </button>
                    <span v-else class="menu__items__separator"></span>
                </template>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

export type MenuItemAction = () => any;
export type MenuItemValue = [ string?, (string|MenuItemAction)?, MenuItemAction? ];

export default defineComponent({
    props: {
        label: { type: String, required: true },
        items: { type: Object as PropType<MenuItemValue[]>, required: true }
    },
    setup() {
        const expanded = ref(false);
        return { expanded };
    }
})
</script>

<style scoped lang="scss">
.menu {
    position: relative;
    display: inline-block;

    &__label {
        display: block;
        padding: 0.6rem;
        border: none;
        background: transparent;
        user-select: none;
        cursor: pointer;

        &:hover {
            background: $background-dark;
            font-weight: 700;
        }
    }

    &--expanded {
        .menu__label {
            background: $background-dark;
            font-weight: 700;
        }
    }

    &__items {
        position: absolute;
        left: 0;
        top: 100%;
        border: 2px solid $background-dark;
        background: $background;
        min-width: 300px;
        z-index: 50;
        padding: 0.2rem;

        &__value {

            background: transparent;
            display: block;
            border: none;
            padding: 0.7rem 1rem;
            color: #555;
            width: 100%;
            text-align: left;
            font-size: 1.1rem;
            cursor: pointer;

            &__icon {
                margin-right: 0.5rem;
                opacity: 0.5;
                width: 24px;
                font-weight: 300;
            }

            &:hover {
                background: $background-dark;
            }

        }

        &__separator {
            display: block;
            width: 90%;
            height: 2px;
            margin: 0.25rem auto;
            background: $background-dark;
        }
    }
}


.menu-leave-active,
.menu-enter-active {
    transition: all 0.1s;
    opacity: 1;
    transform: translateY(0);
    z-index: 50;
}

.menu-enter-from,
.menu-leave-to {
    opacity: 0;
    z-index: -1;
    transform: translateY(-15px);
    pointer-events: none;
}
</style>