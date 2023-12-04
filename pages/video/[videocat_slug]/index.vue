<template>
    <div>
        video : {{ videocat_slug }}
    </div>
</template>

<script setup>
    const videocat_slug = useRoute().params.videocat_slug
</script>

<style lang="scss" scoped>

</style>