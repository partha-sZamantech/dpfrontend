<template>
    <div class=" max-w-[1280px] mx-auto detail-page px-2 py-4">
        <div class="breadcrump border-b pb-1 mb-5">
            <div class="flex gap-1 justify-start items-center">

                <NuxtLink to="/">
                    <Icon class="text-xl" name="material-symbols:house-rounded" />
                </NuxtLink>
                <Icon name="ic:outline-keyboard-arrow-right" />
                <NuxtLink to="/">
                    National
                </NuxtLink>

            </div>
        </div>
        <div class=" grid grid-cols-12 gap-4">
            <div class=" col-span-9">
                dfsd
            </div>
            <div class=" col-span-3">

                <div class="flex flex-col gap-2">
                    <div class=" border-b-[3px] border-[#3375af] pb-1">
                        <h3 class="text-[#3375af] text-[18px] font-[600]">এই বিভাগের আরও</h3>
                    </div>
                    <div class="detail-page-category-content-exept flex flex-col">
                        <!-- Loop Item -->
                        <div class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4">
                            <div class=" col-span-5 overflow-hidden">
                                <NuxtLink to="/">
                                    <nuxt-img
                                        :src="`http://127.0.0.1:8000/media/content/images/2023September/indiavspakistan-dp-20230902133542.jpg`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                </NuxtLink>
                            </div>
                            <div class=" col-span-7">
                                <NuxtLink :to="`/`">
                                    <h4 class="text-[16px] leading-tight group-hover:text-[#ff0000]">এশিয়া কাপের হাই ভোল্টেজ
                                        ম্যাচে ভারত-পাকিস্তান মহারণ আজ</h4>
                                </NuxtLink>
                            </div>
                        </div>
                        <!--/ Loop Item -->

                        <!-- Loop Item -->
                        <div class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4">
                            <div class=" col-span-5 overflow-hidden">
                                <NuxtLink to="/">
                                    <nuxt-img
                                        :src="`http://127.0.0.1:8000/media/content/images/2023September/indiavspakistan-dp-20230902133542.jpg`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                </NuxtLink>
                            </div>
                            <div class=" col-span-7">
                                <NuxtLink :to="`/`">
                                    <h4 class="text-[16px] leading-tight group-hover:text-[#ff0000]">এশিয়া কাপের হাই ভোল্টেজ
                                        ম্যাচে ভারত-পাকিস্তান মহারণ আজ</h4>
                                </NuxtLink>
                            </div>
                        </div>
                        <!--/ Loop Item -->

                        <!-- Loop Item -->
                        <div class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4">
                            <div class=" col-span-5 overflow-hidden">
                                <NuxtLink to="/">
                                    <nuxt-img
                                        :src="`http://127.0.0.1:8000/media/content/images/2023September/indiavspakistan-dp-20230902133542.jpg`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img('https://www.dhaka prokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                </NuxtLink>
                            </div>
                            <div class=" col-span-7">
                                <NuxtLink :to="`/`">
                                    <h4 class="text-[16px] leading-tight group-hover:text-[#ff0000]">এশিয়া কাপের হাই ভোল্টেজ
                                        ম্যাচে ভারত-পাকিস্তান মহারণ আজ</h4>
                                </NuxtLink>
                            </div>
                        </div>
                        <!--/ Loop Item -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const img = useImage()
</script>

<style lang="scss" scoped></style>