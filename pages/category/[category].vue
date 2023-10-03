<template>
    <div>
        <h2>{{category}}</h2>
    </div>
</template>

<script setup>
    const {category} = useRoute().params
</script>

<style lang="scss" scoped>

</style>