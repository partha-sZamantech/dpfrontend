<template>
    <div>
       {{tag_slug}}
    </div>
</template>

<script setup>
   const tag_slug = useRoute().params.tag_slug
</script>

<style lang="scss" scoped>

</style>