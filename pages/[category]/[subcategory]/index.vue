<template>
    <div>
        {{ subcategory }}
    </div>
</template>

<script setup>
    const subcategory = useRoute().params.subcategory
</script>

<style lang="scss" scoped>

</style>