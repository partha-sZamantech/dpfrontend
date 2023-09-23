<template>
    <div>
        <div class="flex justify-between items-center md:hidden shadow-md fixed z-50 bg-white top-0 left-0 right-0">
            <div class="flex gap-6 px-2 py-2 items-center justify-center">
                <Icon @click="mobileMenuToggle" class="text-3xl cursor-pointer hover:bg-[#f7f7f7]" name="ic:outline-menu" />
                <nuxt-img class="mx-auto" src="/assets/img/logo.png" alt="Dhaka Prokash" />
            </div>

            <div class="flex gap-3 px-2">
                <NuxtLink class="border px-2 font-semibold text-blue-700" to="/">EN</NuxtLink>
                <NuxtLink to="/" class="border px-2 font-semibold text-blue-700">E-P</NuxtLink>
            </div>
        </div>
        <MobileHeaderDropdown :mobileMenuStatus="mobileMenuStatus" />
    </div>
</template>

<script setup>
    const mobileMenuStatus = ref(false)
    const mobileMenuToggle = () => {
        if (mobileMenuStatus.value === true) {
            mobileMenuStatus.value = false
        }else{
            mobileMenuStatus.value = true
        }
    }
</script>

<style lang="scss" scoped></style>