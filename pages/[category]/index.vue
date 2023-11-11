<template>
    <div class="category-page">

        <Head>
            <Title>{{ category.cat_name_bn }}</Title>
        </Head>
        <!-- Space For Ads -->
        <div class="category-ads-section border-b border-b-[#dee2e6] py-4 ">
            <div class="bg-[#f7f7f7]">
                <a target="_blank" href="/">
                    <img class="mx-auto" src="/assets/img/bar-ads.gif" alt="">
                </a>
            </div>
        </div>
        <!-- Space For Ads -->
        <div class=" max-w-[1280px] mx-auto category-content px-4 md:px-2 py-4 relative">
            <!-- Breadcrump Section -->
            <div class="breadcrump border-b border-b-[#dee2e6] pb-2 mb-5 flex flex-col gap-4">
                <div class="flex gap-1 justify-start items-center">

                    <NuxtLink to="/">
                        <Icon class="text-xl" name="material-symbols:house-rounded" />
                    </NuxtLink>
                    <Icon name="ic:outline-keyboard-arrow-right" class="text-[#3375af]" />
                    <NuxtLink :to="`/`" class="text-[#3375af] font-semibold">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        {{ category.cat_name_bn }}
                    </NuxtLink>
                </div>
                <div>
                    <div class="subcategory flex flex-wrap gap-3" v-if="category?.subcat?.length > 0">
                        <!-- <Icon v-if="detailsContent?.subcategory" name="ic:outline-keyboard-arrow-right" /> -->
                        <div class="subcategoryLink" v-for="subcategory in category?.subcat">
                            <NuxtLink :to="`/`" class="text-[000000] font-[600] hover:text-[#3375af]">
                                {{ subcategory.subcat_name_bn }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Breadcrump Section -->

            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-9 border-r pr-3">
                    <div class="grid grid-cols-12 border-b border-b-[#dee2e6] pb-4">
                        <div class="col-span-8 pr-3">
                            <div class="lead-post h-[328px] group overflow-hidden">
                                <NuxtLink :to="`/`" class=" relative">
                                    <nuxt-img
                                        :src="`https://www.dhakaprokash24.com/media/content/images/2023October/asad-dhakaprokash-20231005140541.jpg`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                        :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                    <div class="lead-overly absolute h-full w-full block top-0">
                                        <h5
                                            class="img-title leading-8 text-white group-hover:text-[#ff0000] text-[24px] absolute bottom-4 left-6">
                                            নরসিংদীতে গলাকেটে হত্যা: ফেলে যাওয়া মুঠোফোনের সূত্র ধরে আসামি গ্রেপ্তার </h5>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-span-4 pl-3 border-l border-l-[#dee2e6]">
                            <NuxtLink to="/" class="categorypost-2 group">
                                <div class="cat-feature-image overflow-hidden">
                                    <nuxt-img
                                        :src="`https://www.dhakaprokash24.com/media/content/images/2023October/asad-dhakaprokash-20231005140541.jpg`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                        :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                </div>
                                <div class="flex flex-col gap-2 mt-2">
                                    <h3
                                        class="cat-postheading text-xl group-hover:text-[#ff0000] leading-[24px] text-[#121212]">
                                        নরসিংদীতে গলাকেটে হত্যা: ফেলে যাওয়া মুঠোফোনের সূত্র ধরে আসামি গ্রেপ্তার
                                    </h3>
                                    <p class="cat-postdesc text-[16px] text-[#555]">যাওয়া মুঠোফোনের সূত্র ধরে আসামি
                                        গ্রেপ্তার হত্যা মুগদায় ঘুমন্ত
                                        নারীর মাথায়–মুখে আঘাত করে হত্যা এ ঘটনায় ওই নারীর স্বামীকে আ</p>
                                    <small class="cat-postdate">
                                        ৩ ঘণ্টা আগে
                                    </small>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 py-4 border-b border-b-[#dee2e6]">
                        <NuxtLink to="/" class="cat-box group pr-3 border-r border-r-[#dee2e6]">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img
                                    :src="`https://www.dhakaprokash24.com/media/content/images/2023October/asad-dhakaprokash-20231005140541.jpg`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                            </div>
                            <div class="flex flex-col gap-2 mt-2">
                                <h3
                                    class="cat-postheading text-xl group-hover:text-[#ff0000] leading-[24px] text-[#121212]">
                                    নরসিংদীতে গলাকেটে হত্যা: ফেলে যাওয়া মুঠোফোনের সূত্র ধরে আসামি গ্রেপ্তার
                                </h3>
                                <p class="cat-postdesc text-[16px] text-[#555]">যাওয়া মুঠোফোনের সূত্র ধরে আসামি গ্রেপ্তার
                                    হত্যা মুগদায় ঘুমন্ত
                                    নারীর মাথায়–মুখে আঘাত করে হত্যা এ ঘটনায় ওই নারীর স্বামীকে আ</p>
                                <small class="cat-postdate">
                                    ৩ ঘণ্টা আগে
                                </small>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/" class="cat-box group px-3 border-r border-r-[#dee2e6]">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img
                                    :src="`https://www.dhakaprokash24.com/media/content/images/2023October/asad-dhakaprokash-20231005140541.jpg`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                            </div>
                            <div class="flex flex-col gap-2 mt-2">
                                <h3
                                    class="cat-postheading text-xl group-hover:text-[#ff0000] leading-[24px] text-[#121212]">
                                    নরসিংদীতে গলাকেটে হত্যা: ফেলে যাওয়া মুঠোফোনের সূত্র ধরে আসামি গ্রেপ্তার
                                </h3>
                                <p class="cat-postdesc text-[16px] text-[#555]">যাওয়া মুঠোফোনের সূত্র ধরে আসামি গ্রেপ্তার
                                    হত্যা মুগদায় ঘুমন্ত
                                    নারীর মাথায়–মুখে আঘাত করে হত্যা এ ঘটনায় ওই নারীর স্বামীকে আ</p>
                                <small class="cat-postdate">
                                    ৩ ঘণ্টা আগে
                                </small>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/" class="cat-box group px-3">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img
                                    :src="`https://www.dhakaprokash24.com/media/content/images/2023October/asad-dhakaprokash-20231005140541.jpg`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                            </div>
                            <div class="flex flex-col gap-2 mt-2">
                                <h3
                                    class="cat-postheading text-xl group-hover:text-[#ff0000] leading-[24px] text-[#121212]">
                                    নরসিংদীতে গলাকেটে হত্যা: ফেলে যাওয়া মুঠোফোনের সূত্র ধরে আসামি গ্রেপ্তার
                                </h3>
                                <p class="cat-postdesc text-[16px] text-[#555]">যাওয়া মুঠোফোনের সূত্র ধরে আসামি গ্রেপ্তার
                                    হত্যা মুগদায় ঘুমন্ত
                                    নারীর মাথায়–মুখে আঘাত করে হত্যা এ ঘটনায় ওই নারীর স্বামীকে আ</p>
                                <small class="cat-postdate">
                                    ৩ ঘণ্টা আগে
                                </small>
                            </div>
                        </NuxtLink>
                        <!--::::::::::::::::::: Ads Section :::::::::::::::::::::::: -->
                        <div class=" col-span-12 cat-inside-ads">
                            <NuxtLink to="/">
                                <nuxt-img :src="`/assets/img/cat-ads.gif`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 px-2 mt-6 mb-2"
                                    :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                            </NuxtLink>
                        </div>
                        <!--::::::::::::::::::: Ads Section :::::::::::::::::::::::: -->
                    </div>
                </div>
                <div class=" col-span-3">
                    <Tabs :class="`sticky ${stickyScroll ? ' top-44' : 'top-16'}`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const img = useImage()
const siteurl = siteUrlState()

// Sticky Status
const singlePageSticky = singlePageStickyState()
const stickyScroll = computed(() =>
    singlePageSticky.value
)
//
const cat_slug = useRoute().params.category
const category = ref('')
//================== Category Content fetching =============== //
const categoryContent = useState(() => [])
const take = ref(15)
const { data: catcont } = await useFetch('/api/category/categorycontent', {
    method: "POST",
    body: {
        cat_slug: cat_slug,
        take: take.value
    }
})
categoryContent.value = catcont.value
category.value = catcont?.value?.category
console.log(categoryContent.value)
//================== Category Content fetching =============== //

</script>

<style scoped>
.subcategory .subcategoryLink:not(:last-child)::after {
    content: "";
    width: 7px;
    height: 7px;
    background: #3375af;
    display: inline-block;
    border-radius: 100%;
    margin-bottom: 3px;
    margin-left: 10px;
}

.cat-box:last-child {
    border-right: 0px !important;
}

.lead-overly {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(53, 50, 50, 0.9) 75%, rgb(0, 0, 0) 100%);
}
</style>