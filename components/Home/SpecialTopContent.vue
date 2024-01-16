<template>
    <div class="specialContent py-3">
        <div class=" grid grid-cols-12 gap-5">
            <div class="col-span-12 md:col-span-7">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 md:col-span-7 group">
                        <!-- Special First Content -->
                        <!-- <NuxtLink :to="`/category/${specialTopContents[0]?.cat_slug}/${specialTopContents[0]?.content_id}`" -->
                        <NuxtLink :to="getPostUrl(specialTopContents[0]?.cat_slug, specialTopContents[0]?.subcat_slug, specialTopContents[0]?.content_type, specialTopContents[0]?.content_id)"
                            class="flex flex-col gap-3">
                            <div class="overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${specialTopContents[0]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <h2 class="text-[#ff0000] text-[32px] font-semibold leading-snug">{{ specialTopContents[0]?.content_heading
                            }}</h2>
                            <!-- <p class="text-[18px]">{{ specialTopContents[0]?.content_details?.substring(0,
                                165)?.toString().replace(/(<([^>]+)>)/ig, '') }}...</p> -->
                            <ClientOnly>
                                <div class=" font-[300] text-base text-[#000]" v-html="`${specialTopContents[0]?.content_details?.substring(0,
                                        250)} ...`"></div>
                            </ClientOnly>
                            <span class="text-sm text-black">
                                {{ specialTopContents[0]?.bn_cat_name }} | {{ postCreatedDate(specialTopContents[0]?.created_at) }}
                            </span>
                        </NuxtLink>
                        <!-- Special First Content -->
                    </div>
                    <div class="col-span-12 md:col-span-5">
                        <div class="flex flex-col gap-2">
                            <!-- ========== Loop Item =========== -->
                            <NuxtLink :to="getPostUrl(topcontent?.cat_slug, topcontent?.subcat_slug, topcontent?.content_type, topcontent?.content_id)"
                                class=" grid grid-cols-12 gap-4 group py-4 border-b specialMiddleTop"
                                v-for="topcontent in specialTopContents?.slice(1, 5)" :key="topcontent?.content_id">
                                <div class="col-span-5">
                                    <div class="overflow-hidden">
                                        <nuxt-img loading="lazy" :alt="topcontent?.content_heading"
                                            :src="`${siteurl?.site_url}/media/content/images/${topcontent?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                                    </div>
                                </div>
                                <div class="col-span-7 flex flex-col gap-2">
                                    <h4 class="text-base font-semibold group-hover:text-[#ff0000]">{{
                                        topcontent?.content_heading }}</h4>
                                    <span class="text-sm text-black">{{ topcontent?.bn_cat_name }} | {{ postCreatedDate(topcontent?.created_at) }}</span>
                                </div>
                            </NuxtLink>
                            <!-- ========== Loop Item =========== -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-5">
                <HomeSpecialTopVideos />
            </div>
        </div>
    </div>
</template>

<script setup>
// const nuxtApp = useNuxtApp()
const img = useImage()
const siteurl = siteUrlState()

// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric"  })
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
    return `/${category_slug}/${subcategory_slug ? subcategory_slug : (content_type === 1 ? 'news' : 'article') }/${content_id}`
}
// ======== Post Url Generate ============ //

// =============== Special Content Fetching ====================//
const specialTopContents = specialTopContentState()

// const { data: spTopCon } = await useFetch('/api/prismaapi/home/specialtopcontent', {
//     method: "GET",
//     // cache: 'force-cache'
// })
// // const { data: spTopCon } = await useFetch("/api/home/specialtopcontent", {
// //     method: 'GET'
// // })
// specialTopContents.value = spTopCon.value
// =============== Special Content Fetching ====================//


</script>

<style scoped>
.specialMiddleTop:first-child {
    padding-top: 0;
}
</style>