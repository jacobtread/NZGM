<template>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    setup() {
        const { state } = useStore();
        const data = state.data;
    }
})
</script>

<style scoped lang="scss">

</style>