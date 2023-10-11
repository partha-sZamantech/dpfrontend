<template>
    <div class="home-religion-category ">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink to="/" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">ধর্ম</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- International Feature Content -->
            <NuxtLink to="/" class="flex flex-col gap-2 group">
                <div class=" overflow-hidden">
                    <nuxt-img
                        src="https://www.dhakaprokash24.com/media/content/images/2023October/SM/gaja-2-20231008122635.jpg"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                </div>
                <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">উন্নত চিকিৎসা না পেলে, যে কোন সময়
                    মারা যেতে পারেন খালেদা জিয়া</h3>
            </NuxtLink>
            <!--/ International Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink to="/" class=" border-b py-3">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">ভিসানীতি নিয়ে বেশি আতঙ্কে
                        প্রধানমন্ত্রী: মির্জা ফখরুল</h4>
                </NuxtLink>
                <!--/ Loop Item -->
                <!-- Loop Item -->
                <NuxtLink to="/" class=" border-b py-3">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">ভিসানীতি নিয়ে বেশি আতঙ্কে
                        প্রধানমন্ত্রী: মির্জা ফখরুল</h4>
                </NuxtLink>
                <!--/ Loop Item -->
                <!-- Loop Item -->
                <NuxtLink to="/" class=" border-b py-3">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">ভিসানীতি নিয়ে বেশি আতঙ্কে
                        প্রধানমন্ত্রী: মির্জা ফখরুল</h4>
                </NuxtLink>
                <!--/ Loop Item -->
                <!-- Loop Item -->
                <NuxtLink to="/" class=" border-b py-3">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">ভিসানীতি নিয়ে বেশি আতঙ্কে
                        প্রধানমন্ত্রী: মির্জা ফখরুল</h4>
                </NuxtLink>
                <!--/ Loop Item -->
      
            </div>

        </div>
    </div>
</template>

<script setup>
const img = useImage()
</script>

<style lang="scss" scoped></style>