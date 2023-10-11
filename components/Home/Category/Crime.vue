<template>
    <div class="home-crime-category">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink to="/" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">অপরাধ</h2>
            </NuxtLink>
        </div>
        <div class="home-saradesh-category-except-post flex flex-col">
            <!-- Loop Item -->
            <div class="grid grid-cols-12 gap-4 group h-sports-excpt border-b py-4">
                <div class=" col-span-5 overflow-hidden">
                    <NuxtLink to="/">
                        <nuxt-img
                            src="https://www.dhakaprokash24.com/media/content/images/2023October/SM/gaja-2-20231008122635.jpg"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                    </NuxtLink>
                </div>
                <div class=" col-span-7">
                    <NuxtLink to="/">
                        <h4 class="text-[18px] leading-tight group-hover:text-[#ff0000]">শাহজালাল বিমানবন্দরের তৃতীয়
                            টার্মিনালের আংশিক উদ্বোধন করলেন প্রধানমন্ত্রী</h4>
                    </NuxtLink>
                </div>
            </div>
            <!--/ Loop Item -->
            <!-- Loop Item -->
            <div class="grid grid-cols-12 gap-4 group h-sports-excpt border-b py-5">
                <div class=" col-span-5 overflow-hidden">
                    <NuxtLink to="/">
                        <nuxt-img
                            src="https://www.dhakaprokash24.com/media/content/images/2023October/SM/gaja-2-20231008122635.jpg"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                    </NuxtLink>
                </div>
                <div class=" col-span-7">
                    <NuxtLink to="/">
                        <h4 class="text-[18px] leading-tight group-hover:text-[#ff0000]">শাহজালাল বিমানবন্দরের তৃতীয়
                            টার্মিনালের আংশিক উদ্বোধন করলেন প্রধানমন্ত্রী</h4>
                    </NuxtLink>
                </div>
            </div>
            <!--/ Loop Item -->
            <!-- Loop Item -->
            <div class="grid grid-cols-12 gap-4 group h-sports-excpt border-b py-5">
                <div class=" col-span-5 overflow-hidden">
                    <NuxtLink to="/">
                        <nuxt-img
                            src="https://www.dhakaprokash24.com/media/content/images/2023October/SM/gaja-2-20231008122635.jpg"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                    </NuxtLink>
                </div>
                <div class=" col-span-7">
                    <NuxtLink to="/">
                        <h4 class="text-[18px] leading-tight group-hover:text-[#ff0000]">শাহজালাল বিমানবন্দরের তৃতীয়
                            টার্মিনালের আংশিক উদ্বোধন করলেন প্রধানমন্ত্রী</h4>
                    </NuxtLink>
                </div>
            </div>
            <!--/ Loop Item -->
            <!-- Loop Item -->
            <div class="grid grid-cols-12 gap-4 group h-sports-excpt border-b py-5">
                <div class=" col-span-5 overflow-hidden">
                    <NuxtLink to="/">
                        <nuxt-img
                            src="https://www.dhakaprokash24.com/media/content/images/2023October/SM/gaja-2-20231008122635.jpg"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                    </NuxtLink>
                </div>
                <div class=" col-span-7">
                    <NuxtLink to="/">
                        <h4 class="text-[18px] leading-tight group-hover:text-[#ff0000]">শাহজালাল বিমানবন্দরের তৃতীয়
                            টার্মিনালের আংশিক উদ্বোধন করলেন প্রধানমন্ত্রী</h4>
                    </NuxtLink>
                </div>
            </div>
            <!--/ Loop Item -->
        </div>
    </div>
</template>

<script setup>
    const img = useImage()
</script>

<style scoped>
   .h-sports-excpt:first-child{
        padding-top:0px
    }
</style>