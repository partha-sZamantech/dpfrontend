<template>
    <div class=" grid grid-cols-12 py-4 border-t border-t-[#e2e2e2] border-b border-b-[#e2e2e2]">
        <!-- Start Special Content Area -->
        <div class="  col-span-6 border-r border-r-[#e2e2e2]">
            <!-- Start Special Content Top -->
            <NuxtLink to="/" class=" group" >
            <div class="grid grid-cols-12 gap-2 pr-2">
                <div class=" col-span-8 overflow-hidden">
                    <nuxt-img src="/assets/img/banner.jpg" class="mx-auto w-full group-hover:scale-110 duration-300" :placeholder="img('/assets/img/logo.png', {  height: 300 })"  />
                </div>
                <div class="col-span-4">
                    <div class="flex flex-col gap-2">
                        <h2 class="text-[#121212] text-[18px] font-[600]">দেশের নিট রিজার্ভ এখন ১৮ বিলিয়ন ডলারের নিচে: জাহিদ
                            হোসেন</h2>
                        <p class="text-[#555555] text-[16px]">দেশের সামষ্টিক অর্থনৈতিক অস্থিতিশীলতার পেছনে বহিস্থ কারণের
                            সঙ্গে দেশীয় কারণও আছে বলে মনে করেন জাহিদ হোসেন।</p>
                    </div>
                </div>
            </div>
            </NuxtLink>
            <!-- End Special Content Top -->
        </div>
        <!-- End Special Content Area -->
        <div class=" col-span-6">
            <div class="grid grid-cols-2 gap-2">
                <div class="px-2 border-r border-r-[#e2e2e2]">
                    <NuxtLink to="/" class="group" >
                        <div class="flex flex-col">
                            <div class="w-[295px] h-[165px] overflow-hidden">
                                <nuxt-img src="/assets/img/banner.jpg" class="mx-auto w-full group-hover:scale-110 duration-300" :placeholder="img('/assets/img/logo.png', {  height: 300 })" />
                            </div>
                            <h2 class="text-[#121212] text-[18px] font-[600] pt-1">দেশের নিট রিজার্ভ এখন ১৮ বিলিয়ন ডলারের নিচে: জাহিদ
                                হোসেন</h2>
                                <p class="text-[#555555] text-[16px]">দেশের সামষ্টিক অর্থনৈতিক অস্থিতিশীলতার পেছনে বহিস্থ কারণের
                                সঙ্গে দেশীয় </p>
                        </div>
                    </NuxtLink>
                </div>
                <div>
                    <nuxt-img src="/assets/img/ads.gif" class="w-full"  />
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
const img = useImage()
</script>

<style lang="scss" scoped></style>