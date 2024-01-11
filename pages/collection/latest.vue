<template>
    <div class="category-page">

        <Head>
            <Title>আজকের খবর, আপডেট নিউজ</Title>
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
            <div class="breadcrump border-b border-b-[#dee2e6] pb-2 mb-5 flex flex-col gap-2 md:gap-4">

                <div class="flex gap-1 justify-start items-center">
                    <NuxtLink :to="`/collection/latest`" class="text-[#3375af] font-semibold">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        <h1 class="text-xl md:text-3xl">সর্বশেষ খবর</h1>
                    </NuxtLink>
                </div>

            </div>
            <!--/ Breadcrump Section -->

            <div class="grid grid-cols-12 gap-8 md:gap-3">
                <div class="col-span-12 md:col-span-9 md:border-r md:pr-3">
                    <!-- Category Lead Section -->
                    <div class="grid grid-cols-12 border-b border-b-[#dee2e6] pb-4">
                        <div class="col-span-12 md:col-span-8 md:pr-3 mb-1 md:mb-0">
                            <div class="lead-post md:h-[328px] group overflow-hidden">
                                <NuxtLink
                                    :to="getPostUrl(latestPosts[0]?.cat_slug, latestPosts[0]?.subcat_slug, latestPosts[0]?.content_type, latestPosts[0]?.content_id)"
                                    class="relative">
                                    <nuxt-img
                                        :src="`${siteurl.site_url}/media/content/images/${latestPosts[0]?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300 md:h-full"
                                        :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                    <div class="lead-overly absolute h-full w-full block top-0">
                                        <h5
                                            class="img-title font-semibold text-white group-hover:text-[#ff0000] text-[18px] md:text-[24px] absolute bottom-4 left-6">
                                            {{ latestPosts[0]?.content_heading }}</h5>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div v-if="latestPosts[1]"
                            class="col-span-12 md:col-span-4  border-t mt-2 md:mt-0 pt-3 md:pt-0 md:border-t-0 md:pl-3 md:border-l border-l-[#dee2e6]">
                            <NuxtLink
                                :to="getPostUrl(latestPosts[1]?.cat_slug, latestPosts[1]?.subcat_slug, latestPosts[1]?.content_type, latestPosts[1]?.content_id)"
                                class="categorypost-2 group">
                                <div class="cat-feature-image overflow-hidden">
                                    <nuxt-img
                                        :src="`${siteurl.site_url}/media/content/images/${latestPosts[1]?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                        :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                </div>
                                <div class="flex flex-col gap-3 mt-2">
                                    <h3
                                        class="cat-postheading font-semibold text-xl group-hover:text-[#ff0000] text-[#333]">
                                        {{ latestPosts[1]?.content_heading }}
                                    </h3>
                                    <ClientOnly>
                                        <div class="cat-postdesc text-base font-[300] text-black"
                                            v-html="`${latestPosts[1]?.content_details.substring(0, 155)}...`"></div>
                                    </ClientOnly>
                                    <small class="cat-postdate text-black">
                                        প্রকাশ: {{ postCreatedDate(latestPosts[1]?.created_at) }}
                                    </small>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                    <!--/ Category Lead Section -->
                    <!-- Category Bottom Lead -->
                    <div v-if="latestPosts[2]" class="grid grid-cols-12 gap-4 md:gap-0 py-4 border-b border-b-[#dee2e6]">
                        <NuxtLink
                            :to="getPostUrl(latestPosts[2]?.cat_slug, latestPosts[2]?.subcat_slug, latestPosts[2]?.content_type, latestPosts[2]?.content_id)"
                            class="cat-box group md:pr-3 md:border-r border-r-[#dee2e6] col-span-12 md:col-span-4">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img :src="`${siteurl.site_url}/media/content/images/${latestPosts[2]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <div class="flex flex-col gap-3 mt-2">
                                <h3
                                    class="cat-postheading font-semibold text-xl group-hover:text-[#ff0000] text-[#333]">
                                    {{ latestPosts[2]?.content_heading }}
                                </h3>
                                <ClientOnly>
                                    <div class="cat-postdesc text-base font-[300] text-black"
                                        v-html="`${latestPosts[2]?.content_details.substring(0, 155)}...`"></div>
                                </ClientOnly>
                                <small class="cat-postdate text-black">
                                    প্রকাশ: {{ postCreatedDate(latestPosts[2]?.created_at) }}
                                </small>
                            </div>
                        </NuxtLink>
                        <NuxtLink v-if="latestPosts[3]"
                            :to="getPostUrl(latestPosts[3]?.cat_slug, latestPosts[3]?.subcat_slug, latestPosts[3]?.content_type, latestPosts[3]?.content_id)"
                            class="cat-box group md:px-3 md:border-r border-r-[#dee2e6] col-span-12 md:col-span-4">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img :src="`${siteurl.site_url}/media/content/images/${latestPosts[3]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <div class="flex flex-col gap-3 mt-2">
                                <h3
                                    class="cat-postheading text-xl font-semibold group-hover:text-[#ff0000] text-[#333]">
                                    {{ latestPosts[3]?.content_heading }}
                                </h3>
                                <ClientOnly>
                                    <div class="cat-postdesc text-base font-[300] text-black"
                                        v-html="`${latestPosts[3]?.content_details.substring(0, 155)}...`"></div>
                                </ClientOnly>
                                <small class="cat-postdate text-black">
                                    প্রকাশ: {{ postCreatedDate(latestPosts[3]?.created_at) }}
                                </small>
                            </div>
                        </NuxtLink>
                        <NuxtLink v-if="latestPosts[4]"
                            :to="getPostUrl(latestPosts[4]?.cat_slug, latestPosts[4]?.subcat_slug, latestPosts[4]?.content_type, latestPosts[4]?.content_id)"
                            class="cat-box group md:pl-3 col-span-12 md:col-span-4">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img :src="`${siteurl.site_url}/media/content/images/${latestPosts[4]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <div class="flex flex-col gap-3 mt-2">
                                <h3
                                    class="cat-postheading text-xl font-semibold group-hover:text-[#ff0000] text-[#333]">
                                    {{ latestPosts[4]?.content_heading }}
                                </h3>
                                <ClientOnly>
                                    <div class="cat-postdesc text-base font-[300] text-black"
                                        v-html="`${latestPosts[4]?.content_details.substring(0, 155)}...`"></div>
                                </ClientOnly>
                                <small class="cat-postdate text-black">
                                    প্রকাশ: {{ postCreatedDate(latestPosts[4]?.created_at) }}
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

                            <div class="cat-post-item py-4 border-b" v-for="(latestPost, cpInx) in latestPostContentExcept"
                                :key="cpInx">
                                <NuxtLink
                                    :to="getPostUrl(latestPost?.cat_slug, latestPost?.subcat_slug, latestPost?.content_type, latestPost?.content_id)"
                                    class=" grid grid-cols-12 gap-3 group">
                                    <div class=" col-span-7 flex flex-col gap-3">
                                        <h3
                                            class="cat-title col-span-12 font-semibold text-[20px] text-[#333] group-hover:text-[#ff0000]">
                                            {{
                                                latestPost?.content_heading }}</h3>
                                        <ClientOnly>
                                            <div class="cat-desc text-black text-[15px] font-[300]"
                                                v-html="`${latestPost?.content_details.substring(0, 155)}...`"></div>
                                        </ClientOnly>

                                        <span class="post-date flex flex-col gap-1 text-base text-black">
                                            <small>আপডেট: {{
                                                postCreatedDate(latestPost?.updated_at) }}</small>
                                            <small>প্রকাশ: {{
                                                postCreatedDate(latestPost?.created_at) }}</small>
                                        </span>
                                    </div>
                                    <div class=" col-span-5 category-post-image overflow-hidden">
                                        <nuxt-img
                                            :src="`${siteurl.site_url}/media/content/images/${latestPost?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                    </div>
                                </NuxtLink>
                            </div>

                            <!--/ Loop Item -->

                        </div>
                        <div class="col-span-2 hidden md:block"></div>
                    </div>
                    <div class="flex justify-center items-center" v-if="latestPosts?.length > 10">
                        <button @click="loadMoreButtonHandler"
                            class="border border-[#dee2e6] text-[#3375af] px-8 py-2 rounded-sm mt-5 hover:border-[#3375af]"><b>আরও</b></button>
                    </div>
                    <!-- Loop Category Post Section -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <Tabs :class="`sticky ${stickyScroll ? ' top-44' : 'top-16'}`" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
// import moment from 'moment'
// moment.locale('bn');
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

// ======== Post Url Generate ============ //
const getPostUrl = (category_slug, subcategory_slug, content_type, content_id) => {
    return `/${category_slug}/${subcategory_slug ? subcategory_slug : (content_type === 1 ? 'news' : 'article')}/${content_id}`
}
// ======== Post Url Generate ============ //



const img = useImage()
const siteurl = siteUrlState()


// Sticky Status
const singlePageSticky = singlePageStickyState()
const stickyScroll = computed(() =>
    singlePageSticky.value
)

//================== Latest Post Content fetching =============== //
//Latest Post Content State
const latestPosts = useState(() => [])
const latestPostContentExcept = useState(() => [])
const take = ref(15)

const { data: lcpt } = await useFetch('/api/prismaapi/collection/latestpost', {
    method: "POST",
    body: {
        take: take.value,
        skip: 0
    }
})
// console.log(lcpt.value)
// Latest Post Content Assign
latestPosts.value = lcpt

const { data: exceptlPost } = await useFetch('/api/prismaapi/collection/latestpost', {
    method: "POST",
    body: {
        take: 10,
        skip: 5
    }
})
latestPostContentExcept.value = exceptlPost.value
// Latest Post Assign
//================== Latest Post Content fetching  =============== //


//================ Load More Latest Post Content Button =================//
const loadMoreButtonHandler = async () => {
    take.value += 10

    const { data: loadLPC } = await useFetch('/api/prismaapi/collection/latestpost', {
        method: "POST",
        body: {
            take: take.value,
            skip: 5
        }
    })
    latestPostContentExcept.value = loadLPC.value

}
//================ Load More Latest Post Content Button =================//

// let date = new Date(categoryContent.value[0].created_at).toLocaleDateString("bn")

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
}</style>