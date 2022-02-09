<script setup lang="ts">
import Menu, { Item } from "./Menu.vue";
import Logo from "../../assets/logo.svg?inline"
import MenuIcon from "../../assets/icons/menu.svg?inline"
import { $ref } from "vue/macros";

interface Section {
    name: string;
    values: Item[]
}

const menus: Section[] = [
    {
        name: 'Data',
        values: [
            [ 'Clear Data', () => console.log('Clear Data') ],
            [ 'Open File', () => {
            } ],
            [ 'Import From URL', () => {
            } ],
            [ 'Import From Clipboard', () => {
            } ],
            [ 'Copy Data', () => {
            } ],
            [ 'Download Data', () => {
            } ],
            [ 'Save Session', () => {
            } ],
        ]
    },
    {
        name: 'Edit',
        values: [
            [ 'Remove Row', () => true ],
            [ 'Remove Specific Row', () => true ],
            [ 'Remove Last Row', () => true ],
            [],
            [ 'Remove Column', () => true ],
            [ 'Remove Last Column', () => true ],
        ]
    },
    {
        name: 'Insert',
        values: [
            [ 'Insert Row', () => true ],
            [ 'Insert Row Before', () => true ],
            [ 'Insert Row After', () => true ],
            [],
            [ 'Insert Column', () => true ],
            [ 'Insert Column Before', () => true ],
            [ 'Insert Column After', () => true ],
        ]
    }
]

let menuExpanded = $ref(false)

</script>
<template>
    <header class="header">
        <Logo class="header__logo"/>
        <div class="header__content">
            <input type="text" class="input header__name" value="Example Graph">
            <div :class="{'menus': true, 'menus--expanded': menuExpanded}">
                <Menu v-for="menu of menus" :items="menu.values" :name="menu.name"/>
            </div>
            <span class="header__spacer"></span>
            <span class="menu__small" @click="menuExpanded = !menuExpanded">
                <MenuIcon class="menu__small__icon"/>
            </span>
        </div>
    </header>
</template>
<style scoped lang="scss">
.header {
    position: relative;
    display: flex;
    gap: 0.7rem;
    width: 100%;
    background: #e5e5e5;
    align-items: center;
    border-bottom: 1px solid #bfbfbf;
    height: 65px;

    &__logo {
        color: white;
        background: #333;
        padding: 0 1.5rem;
        width: 120px;
        height: 64px;
    }

    &__content {
        flex: auto;
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    &__name {
        height: 2.5rem;
    }

    &__spacer {
        flex: auto;
    }
}

.menu__small {
    display: none;
}

@media screen and (max-width: 630px) {
    .header {
        &__name {
            flex: auto;
        }
        &__spacer {
            display: none;
        }
        &__content {
            gap: 0;
        }
    }

    .menus {
        display: none;
        width: 100%;

        &--expanded {
            display: initial;
            position: absolute;
            left: 0;
            top: 100%;
        }
    }

    .menu__small {
        display: flex;
        cursor: pointer;
        width: 24px;
        height: 24px;
        margin: 0 0.7rem;
    }
}

@media screen and (max-width: 390px){
    .header__logo {
        display: none;
    }
    .header__content {
        padding-left: 0.7rem;
    }
}
</style>