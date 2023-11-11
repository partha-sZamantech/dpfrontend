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
                    <!-- Category Lead Section -->
                    <div class="grid grid-cols-12 border-b border-b-[#dee2e6] pb-4">
                        <div class="col-span-8 pr-3">
                            <div class="lead-post h-[328px] group overflow-hidden">
                                <NuxtLink :to="`/`" class=" relative">
                                    <nuxt-img
                                        :src="`${siteurl.site_url}/media/content/images/${categoryContent[0]?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                        :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                    <div class="lead-overly absolute h-full w-full block top-0">
                                        <h5 class="img-title leading-8 text-white group-hover:text-[#ff0000] text-[24px] absolute bottom-4 left-6">{{ categoryContent[0]?.content_heading }}</h5>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-span-4 pl-3 border-l border-l-[#dee2e6]">
                            <NuxtLink to="/" class="categorypost-2 group">
                                <div class="cat-feature-image overflow-hidden">
                                    <nuxt-img
                                        :src="`${siteurl.site_url}/media/content/images/${categoryContent[1]?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                        :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                </div>
                                <div class="flex flex-col gap-2 mt-2">
                                    <h3 class="cat-postheading text-xl group-hover:text-[#ff0000] leading-[24px] text-[#121212]">
                                        {{ categoryContent[1]?.content_heading }}
                                    </h3>
                                    <div class="cat-postdesc text-[15px] font-[300] text-[#555555]" v-html="categoryContent[1]?.content_details.substring(0,150)"></div>
                                    <small class="cat-postdate">
                                        ৩ ঘণ্টা আগে
                                    </small>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                    <!--/ Category Lead Section -->
                    <!-- Category Bottom Lead -->
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
                        <NuxtLink to="/" class="cat-box group pl-3">
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
                    <!--/ Category Bottom Lead -->
                    <!-- Loop Category Post Section -->
                    <div class="category-post-list grid grid-cols-12 mt-4">
                        <div class="col-span-2 hidden md:block"></div>
                        <div class="col-span-12 md:col-span-8">
                            <!-- Loop Item -->
                            <div class="cat-post-item py-4 border-b">
                                <NuxtLink to="/" class=" grid grid-cols-12 gap-3 group">
                                    <h3 class="cat-title col-span-12 text-[20px] group-hover:text-[#ff0000]">পুলিশের অস্ত্র
                                        ছিনতাই, বিএনপি নেতা আমিনুলসহ তিনজন কারাগারে</h3>
                                    <div class=" col-span-7 flex flex-col gap-3">

                                        <p class="cat-desc text-[#555555]">ঢাকা মহানগর উত্তর বিএনপির সদস্যসচিব আমিনুল হকসহ
                                            তিনজনকে কারাগারে পাঠানোর আদেশ দিয়েছেন আদালত। পুলিশের অস্ত্র...</p>
                                        <span class="post-date">
                                            <small class="text-[#555555]">আপডেট: ১১ নভেম্বর ২০২৩, ০৩:০৫ পিএম</small>
                                        </span>
                                    </div>
                                    <div class=" col-span-5 category-post-image overflow-hidden">
                                        <nuxt-img
                                            :src="`https://www.dhakaprokash24.com/media/content/images/2023October/asad-dhakaprokash-20231005140541.jpg`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                    </div>
                                </NuxtLink>
                            </div>
                            <!--/ Loop Item -->
                            <!-- Loop Item -->
                            <div class="cat-post-item py-4 border-b">
                                <NuxtLink to="/" class=" grid grid-cols-12 gap-3 group">
                                    <h3 class="cat-title col-span-12 text-[20px] group-hover:text-[#ff0000]">পুলিশের অস্ত্র
                                        ছিনতাই, বিএনপি নেতা আমিনুলসহ তিনজন কারাগারে</h3>
                                    <div class=" col-span-7 flex flex-col gap-3">

                                        <p class="cat-desc text-[#555555]">ঢাকা মহানগর উত্তর বিএনপির সদস্যসচিব আমিনুল হকসহ
                                            তিনজনকে কারাগারে পাঠানোর আদেশ দিয়েছেন আদালত। পুলিশের অস্ত্র...</p>
                                        <span class="post-date">
                                            <small class="text-[#555555]">আপডেট: ১১ নভেম্বর ২০২৩, ০৩:০৫ পিএম</small>
                                        </span>
                                    </div>
                                    <div class=" col-span-5 category-post-image overflow-hidden">
                                        <nuxt-img
                                            :src="`https://www.dhakaprokash24.com/media/content/images/2023October/asad-dhakaprokash-20231005140541.jpg`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                    </div>
                                </NuxtLink>
                            </div>
                            <!--/ Loop Item -->
                        </div>
                        <div class="col-span-2 hidden md:block"></div>
                    </div>
                    <div class="flex justify-center items-center">
                        <button class="border border-[#dee2e6] text-[#3375af] px-8 py-2 rounded-sm mt-5 hover:border-[#3375af]"><b>আরও</b></button>
                    </div>
                    <!-- Loop Category Post Section -->
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

//================== Category Content fetching =============== //
// Category State
const category = ref('')
//Category Content State
const categoryContent = useState(() => [])
const take = ref(15)
const { data: catcont } = await useFetch('/api/category/categorycontent', {
    method: "POST",
    body: {
        cat_slug: cat_slug,
        take: take.value
    }
})
// Category Content Assign
categoryContent.value = catcont.value.contents
// Category Assign
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