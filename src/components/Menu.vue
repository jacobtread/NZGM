<template>
    <div class="menus">
        <MenuItem label="Data" :items="dataMenu"/>
        <MenuItem label="Edit" :items="editMenu"/>
        <MenuItem label="Insert" :items="insertMenu"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuItem, { MenuItemValue } from "@/components/MenuItem.vue";

export default defineComponent({
    components: { MenuItem },
    setup() {

        const dataMenu: MenuItemValue[] = [
            [ 'Clear Data', 'trash', () => console.log('Clear Data') ],
            [ 'Open File', 'upload', () => true ],
            [ 'Import From URL', 'link', () => true ],
            [ 'Import From Clipboard', 'clipboard', () => true ],
            [ 'Copy Data', 'copy', () => true ],
            [ 'Download Data', 'download', () => true ],
            [ 'Save Session', 'save', () => true ],
        ]

        const editMenu: MenuItemValue[] = [
            [ 'Remove Row', () => true ],
            [ 'Remove Specific Row', () => true ],
            [ 'Remove Last Row', () => true ],
            [],
            [ 'Remove Column', () => true ],
            [ 'Remove Last Column', () => true ],
        ]

        const insertMenu: MenuItemValue[] = [
            [ 'Insert Row', () => true ],
            [ 'Insert Row Before', () => true ],
            [ 'Insert Row After', () => true ],
            [],
            [ 'Insert Column', () => true ],
            [ 'Insert Column Before', () => true ],
            [ 'Insert Column After', () => true ],
        ]

        return { dataMenu, editMenu, insertMenu }
    }
})
</script>

<style scoped lang="scss">
.menus {
    display: flex;
}
</style>