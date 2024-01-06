<template>
    <div class="category-page">

        <Head>
            <Title>{{ category.subcat_name_bn }}</Title>
        </Head>
        <!-- Space For Ads -->
        <!-- <div class="category-ads-section border-b border-b-[#dee2e6] py-4 ">
            <div class="bg-[#f7f7f7]">
                <a target="_blank" href="/">
                    <img class="mx-auto" src="/assets/img/bar-ads.gif" alt="">
                </a>
            </div>
        </div> -->
        <!-- Space For Ads -->
        <div class=" max-w-[1280px] mx-auto category-content px-4 md:px-2 py-4 relative">
            <!-- Breadcrump Section -->
            <div class="breadcrump border-b border-b-[#dee2e6] pb-2 mb-5 flex flex-col gap-2 md:gap-2">
                <div class="flex gap-1 justify-start items-center">
                    <NuxtLink :to="`/${category?.cat_slug}`" class=" font-semibold">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        <h1
                            class="text-xl md:text-xl border-b text-[#000000] hover:text-[#3375af] hover:border-b-[#3375af]">
                            {{ category?.cat_name_bn }}</h1>
                    </NuxtLink>
                </div>

                <div class="flex flex-col gap-4">
                    <NuxtLink :to="`/${category?.cat_slug}/${subcat_slug}`" class="text-[#3375af] font-semibold">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        <h1 class="text-xl md:text-3xl">{{ category.subcat_name_bn }}</h1>
                    </NuxtLink>
                    <div class="subcategory flex flex-wrap gap-3" v-if="subcategory?.length > 0">
                        <!-- <Icon v-if="detailsContent?.subcategory" name="ic:outline-keyboard-arrow-right" /> -->
                        <div class="subcategoryLink" v-for="subcat in subcategory">
                            <NuxtLink :to="`/${category?.cat_slug}/${subcat?.subcat_slug}`"
                                :class="`${subcategory?.subcat_name_bn === subcat?.subcat_name_bn && 'text-[#3375af]'} text-[#121212] font-[600] text-sm md:text-[16px] hover:text-[#3375af]`">
                                {{ subcat?.subcat_name_bn }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!--/ Breadcrump Section -->
            <div class="grid grid-cols-12 gap-8 md:gap-3">
                <div v-if="subcategoryContents?.length > 0" class="col-span-12 md:col-span-9 md:border-r md:pr-3">
                    <!-- Category Lead Section -->
                    <div class="grid grid-cols-12 border-b border-b-[#dee2e6] pb-4">
                        <div class="col-span-12 md:col-span-8 md:pr-3 mb-1 md:mb-0">
                            <div class="lead-post md:h-[328px] group overflow-hidden">
                                <NuxtLink
                                    :to="`/category/${subcategoryContents[0]?.cat_slug}/${subcategoryContents[0]?.content_id}`"
                                    class="relative">
                                    <nuxt-img
                                        :src="`${siteurl.site_url}/media/content/images/${subcategoryContents[0]?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300 md:h-full"
                                        :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                    <div class="lead-overly absolute h-full w-full block top-0">
                                        <h5
                                            class="img-title leading-[24px] text-white group-hover:text-[#ff0000] text-[18px] md:text-[24px] font-semibold absolute bottom-4 left-6">
                                            {{ subcategoryContents[0]?.content_heading }}</h5>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div v-if="subcategoryContents[1]"
                            class="col-span-12 md:col-span-4  border-t mt-2 md:mt-0 pt-3 md:pt-0 md:border-t-0 md:pl-3 md:border-l border-l-[#dee2e6]">
                            <NuxtLink
                                :to="`/category/${subcategoryContents[1]?.cat_slug}/${subcategoryContents[1]?.content_id}`"
                                class="categorypost-2 group">
                                <div class="cat-feature-image overflow-hidden">
                                    <nuxt-img
                                        :src="`${siteurl.site_url}/media/content/images/${subcategoryContents[1]?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                        :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                </div>
                                <div class="flex flex-col gap-3 mt-2">
                                    <h3
                                        class="cat-postheading text-xl group-hover:text-[#ff0000] leading-[24px] font-semibold text-[#121212]">
                                        {{ subcategoryContents[1]?.content_heading }}
                                    </h3>
                                    <ClientOnly>
                                        <div class="cat-postdesc text-base font-[300]"
                                            v-html="`${subcategoryContents[1]?.content_details.substring(0, 155)}...`">
                                        </div>
                                    </ClientOnly>
                                    <small class="cat-postdate">
                                        <!-- প্রকাশ: {{ postCreatedDate(subcategoryContents[1]?.created_at) }} -->
                                        <span class="text-sm">
                                            {{ subcategoryContents[1]?.post_time }}
                                        </span>
                                    </small>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                    <!--/ Category Lead Section -->
                    <!-- Category Bottom Lead -->
                    <div class="grid grid-cols-12 gap-4 md:gap-0 py-4 border-b border-b-[#dee2e6]">
                        <NuxtLink v-if="subcategoryContents[2]"
                            :to="`/category/${subcategoryContents[2]?.cat_slug}/${subcategoryContents[2]?.content_id}`"
                            class="cat-box group md:pr-3 md:border-r border-r-[#dee2e6] col-span-12 md:col-span-4">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img
                                    :src="`${siteurl.site_url}/media/content/images/${subcategoryContents[2]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <div class="flex flex-col gap-3 mt-2">
                                <h3
                                    class="cat-postheading text-xl group-hover:text-[#ff0000] leading-[24px] font-semibold text-[#121212]">
                                    {{ subcategoryContents[2]?.content_heading }}
                                </h3>
                                <ClientOnly>
                                    <div class="cat-postdesc text-base font-[300]"
                                        v-html="`${subcategoryContents[2]?.content_details.substring(0, 155)}...`"></div>
                                </ClientOnly>
                                <small class="cat-postdate">
                                    <!-- প্রকাশ: {{ postCreatedDate(subcategoryContents[2]?.created_at) }} -->
                                    <span class="text-sm">
                                        {{ subcategoryContents[2]?.post_time }}
                                    </span>
                                </small>
                            </div>
                        </NuxtLink>
                        <NuxtLink v-if="subcategoryContents[3]"
                            :to="`/category/${subcategoryContents[3]?.cat_slug}/${subcategoryContents[3]?.content_id}`"
                            class="cat-box group md:px-3 md:border-r border-r-[#dee2e6] col-span-12 md:col-span-4">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img
                                    :src="`${siteurl.site_url}/media/content/images/${subcategoryContents[3]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <div class="flex flex-col gap-3 mt-2">
                                <h3
                                    class="cat-postheading text-xl group-hover:text-[#ff0000] font-semibold leading-[24px] text-[#121212]">
                                    {{ subcategoryContents[3]?.content_heading }}
                                </h3>
                                <ClientOnly>
                                    <div class="cat-postdesc text-base font-[300]"
                                        v-html="`${subcategoryContents[3]?.content_details.substring(0, 155)}...`"></div>
                                </ClientOnly>
                                <small class="cat-postdate">
                                    <span class="text-sm">
                                        {{ subcategoryContents[3]?.post_time }}
                                    </span>
                                </small>
                            </div>
                        </NuxtLink>
                        <NuxtLink v-if="subcategoryContents[4]"
                            :to="`/category/${subcategoryContents[4]?.cat_slug}/${subcategoryContents[4]?.content_id}`"
                            class="cat-box group md:pl-3 col-span-12 md:col-span-4">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img
                                    :src="`${siteurl.site_url}/media/content/images/${subcategoryContents[4]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <div class="flex flex-col gap-3 mt-2">
                                <h3
                                    class="cat-postheading text-xl group-hover:text-[#ff0000] font-semibold leading-[24px] text-[#121212]">
                                    {{ subcategoryContents[4]?.content_heading }}
                                </h3>
                                <ClientOnly>
                                    <div class="cat-postdesc text-base font-[300]"
                                        v-html="`${subcategoryContents[4]?.content_details.substring(0, 155)}...`"></div>
                                </ClientOnly>
                                <small class="cat-postdate">
                                    <span class="text-sm">
                                        {{ subcategoryContents[4]?.post_time }}
                                    </span>
                                </small>
                            </div>
                        </NuxtLink>
                        <!--::::::::::::::::::: Ads Section :::::::::::::::::::::::: -->
                        <!-- <div class=" col-span-12 cat-inside-ads">
                            <NuxtLink to="/">
                                <nuxt-img :src="`/assets/img/cat-ads.gif`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 px-2 mt-6 mb-2"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </NuxtLink>
                        </div> -->
                        <!--::::::::::::::::::: Ads Section :::::::::::::::::::::::: -->
                    </div>
                    <!--/ Category Bottom Lead -->
                    <!-- Loop Category Post Section -->
                    <div class="category-post-list grid grid-cols-12 mt-4">
                        <div class="col-span-2 hidden md:block"></div>
                        <div class="col-span-12 md:col-span-8">
                            <!-- Loop Item -->

                            <div class="cat-post-item py-4 border-b" v-for="(catPost, cpInx) in subcategoryContentExcept"
                                :key="cpInx">
                                <NuxtLink :to="`/category/${catPost?.cat_slug}/${catPost?.content_id}`"
                                    class=" grid grid-cols-12 gap-3 group">
                                    
                                    <div class=" col-span-7 flex flex-col gap-3">
                                        <h3 class="cat-title text-[20px] font-semibold leading-[24px] group-hover:text-[#ff0000]">{{
                                        catPost?.content_heading }}</h3>
                                        <ClientOnly>
                                            <div class="cat-desc text-base font-[300]"
                                                v-html="catPost?.content_details.substring(0, 160)"></div>
                                        </ClientOnly>

                                        <span class="post-date flex flex-col gap-1">
                                            <small class="text-sm">আপডেট: {{
                                                postCreatedDate(catPost?.updated_at) }}</small>
                                            <small class="text-sm">প্রকাশ: {{
                                                postCreatedDate(catPost?.created_at) }}</small>
                                        </span>
                                    </div>
                                    <div class=" col-span-5 category-post-image overflow-hidden">
                                        <nuxt-img :src="`${siteurl.site_url}/media/content/images/${catPost?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                    </div>
                                </NuxtLink>
                            </div>

                            <!--/ Loop Item -->

                        </div>
                        <div class="col-span-2 hidden md:block"></div>
                    </div>
                    <div class="flex justify-center items-center" v-if="subcategoryContents?.length > 10">
                        <button @click="loadMoreButtonHandler"
                            class="border border-[#dee2e6] text-[#3375af] px-8 py-2 rounded-sm mt-5 hover:border-[#3375af]"><b>আরও</b></button>
                    </div>
                    <!-- Loop Category Post Section -->
                </div>
                <div v-else class="col-span-12 md:col-span-9 md:border-r md:pr-3">
                    <h2 class="text-2xl text-center py-8">আপনি যে বিষয়টি অনুসন্ধান করছেন তা খুজে পাওয়া যায়নি</h2>
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <Tabs :class="`sticky ${stickyScroll ? ' top-44' : 'top-16'}`" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()

const img = useImage()
const siteurl = siteUrlState()
// Sticky Status
const singlePageSticky = singlePageStickyState()
const stickyScroll = computed(() =>
    singlePageSticky.value
)

// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric", hour: "numeric", minute: 'numeric' })
// const postDate = getDate.format(new Date(detailsContent.value.created_at)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
const postCreatedDate = (date) => {
    // If date value has
    if (date) {
        return getDate.format(new Date(date)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
    }
}
// ================ Get Bangla Date ============== //

const subcat_slug = useRoute().params.subcategory
const cat_slug = useRoute().params.category
// ================== Subcategory Content ============= //
const subcategoryContents = useState(() => [])
const subcategoryContentExcept = useState(() => [])
const category = ref(null)
const subcategory = ref(null)
const take = ref(15)

// Fetching Leading Post Data
const { data: subctcont } = await useFetch('/api/prismaapi/subcategory/subcategorycontent', {
    method: "POST",
    body: {
        cat_slug: cat_slug,
        subcat_slug: subcat_slug,
        take: 5,
        skip: 0
    },
})
subcategoryContents.value = subctcont?.value?.contents
// Fetching Leading Post Data

// Assign category & Subcategory
category.value = subctcont?.value?.category
subcategory.value = subctcont?.value?.subcat
// Assign category & Subcategory

// Except Content More
const { data: exceptctcsubct } = await useFetch('/api/prismaapi/subcategory/subcategorycontent', {
    method: "POST",
    body: {
        cat_slug: cat_slug,
        subcat_slug: subcat_slug,
        take: 10,
        skip: 5
    },
})
subcategoryContentExcept.value = exceptctcsubct?.value?.contents
// Except Content More

// ================== Subcategory Content ============= //

//================ Load More Sub Category Content Button =================//
const loadMoreButtonHandler = async () => {
    take.value += 10
    const { data: loadsubCtP } = await useFetch('/api/prismaapi/subcategory/subcategorycontent', {
        method: "POST",
        body: {
            cat_slug: cat_slug,
            subcat_slug: subcat_slug,
            take: take.value,
            skip: 5
        },

    })
    subcategoryContentExcept.value = loadsubCtP.value.contents
}
//================ Load More Sub Category Content Button =================//

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