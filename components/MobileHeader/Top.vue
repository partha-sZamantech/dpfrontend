<template>
    <div>
        <div class="flex justify-between items-center md:hidden shadow-md fixed bg-white top-0 left-0 right-0 px-2 z-[999999]">
            <div class="flex gap-6 px-2 py-2 items-center justify-center">
                <Icon v-if="!mobileMenuStatus" @click="mobileMenuToggle" class="text-3xl cursor-pointer hover:bg-[#f7f7f7]" name="ic:outline-menu" />
                <Icon v-else name="material-symbols:close" @click="mobileMenuToggle" class="text-3xl cursor-pointer hover:bg-[#f7f7f7]" />
                <nuxt-img class="mx-auto" src="https://www.dhakaprokash24.com/media/common/logo1672518180.png" alt="Dhaka Prokash" />
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