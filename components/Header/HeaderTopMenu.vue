<template>
    <div :class="`${scrollDown ? 'fixed top-0 right-0 left-0 shadow-lg' : ''} hidden md:block duration-300 border-t border-b py-3 bg-white`">
        <ul class="flex gap-8 justify-center text-sm">
            <li>
                <NuxtLink to="/">সর্বশেষ</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">বিশেষ সংবাদ</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">রাজনীতি</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">বাংলাদেশ</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">অপরাধ</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">বিশ্ব</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">বাণিজ্য</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">মতামত</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">খেলা</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">বিনোদন</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">চাকরি</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">জীবনযাপন {{ counter }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const {scrollDown} = defineProps(['scrollDown', 'counter'])
</script>

<style lang="scss" scoped></style>