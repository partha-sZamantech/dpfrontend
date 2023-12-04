<template>
    <div>
        video : {{ video_id }}
    </div>
</template>

<script setup>
    const video_id = useRoute().params.video_id
</script>

<style lang="scss" scoped>

</style>