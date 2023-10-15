<template>
    <div style=" margin-top:200px">
        {{  contentid }}         {{  category }}
    </div>
</template>

<script setup>
    const category = useRoute().params.category
    const contentid = useRoute().params.contentid
</script>

<style lang="scss" scoped>

</style>