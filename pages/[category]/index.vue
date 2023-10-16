<template>
    <div>
        {{  category }}
    </div>
</template>

<script setup>
    const category = useRoute().params.category
</script>

<style lang="scss" scoped>

</style>