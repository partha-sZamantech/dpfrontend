<template>
    <div :class="`${mobileMenuStatus ? 'left-0 fixed' : 'absolute -left-[415px]'} duration-200 bg-white h-screen max-w-full md:hidden right-0 top-12`">
        <div class="px-6 py-6 ">
            <h2>1</h2>
        <h2>2</h2>
        <h2>3</h2>
        <h2>4</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        </div>
    </div>
</template>

<script setup>
    const {mobileMenuStatus} = defineProps(['mobileMenuStatus'])
</script>

<style lang="scss" scoped>

</style>