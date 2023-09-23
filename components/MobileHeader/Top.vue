<template>
    <div class="flex justify-between items-center md:hidden shadow-md">
        <div class="flex gap-6 px-2 py-2 items-center justify-center">
            <Icon class="text-3xl cursor-pointer hover:bg-[#f7f7f7]" name="ic:outline-menu" />
            <nuxt-img class="mx-auto" src="/assets/img/logo.png"  alt="Dhaka Prokash" />
        </div>
      
        <div class="flex gap-3 px-2">
            <NuxtLink class="border px-2 font-semibold text-blue-700" to="/">EN</NuxtLink>
            <NuxtLink to="/" class="border px-2 font-semibold text-blue-700">E-P</NuxtLink>
        </div>
    </div>
    
</template>

<script setup>

</script>

<style lang="scss" scoped></style>