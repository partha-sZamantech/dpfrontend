<template>
    <div v-if="lawcourtContents?.length > 0" class="home-law-court-category">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${lawcourtContents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">আইন আদালত</h2>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-6">
                <NuxtLink :to="getPostUrl(lawcourtContents[0]?.cat_slug, lawcourtContents[0]?.subcat_slug, lawcourtContents[0]?.content_type, lawcourtContents[0]?.content_id)"
                    class="flex flex-col group gap-2">
                    <div class="intertainment-feature-image overflow-hidden">
                        <nuxt-img loading="lazy" :src="`${siteurl.site_url}/media/content/images/${lawcourtContents[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                    </div>
                    <div class="intertainment-feature-description flex flex-col gap-2">
                        <h3 class="text-[25px] text-black font-semibold group-hover:text-[#ff0000]">{{
                            lawcourtContents[0]?.content_heading }}</h3>
                        <ClientOnly>
                            <div class="text-base font-[300] text-black" v-html="`${lawcourtContents[0]?.content_details?.substring(0,
                                255)} ...`"></div>
                        </ClientOnly>
                        <span class="text-sm text-black">{{ lawcourtContents[0]?.created_at }}</span>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="home-intertainment-category-except-post grid grid-cols-2 gap-4">
                    <!-- Loop Item -->
                    <div class="flex flex-col gap-4 group h-sports-excpt"
                        v-for="lawcourtContent in lawcourtContents.slice(1, 5)" :key="lawcourtContent.content_id">
                        <div class=" col-span-5 overflow-hidden">
                            <NuxtLink :to="getPostUrl(lawcourtContent?.cat_slug, lawcourtContent?.subcat_slug, lawcourtContent?.content_type, lawcourtContent?.content_id)">
                                <nuxt-img loading="lazy" :src="`${siteurl.site_url}/media/content/images/${lawcourtContent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                            </NuxtLink>
                        </div>
                        <div class=" col-span-7">
                            <NuxtLink :to="getPostUrl(lawcourtContent?.cat_slug, lawcourtContent?.subcat_slug, lawcourtContent?.content_type, lawcourtContent?.content_id)"
                                class="flex flex-col gap-2">
                                <h4 class="text-base text-black font-semibold group-hover:text-[#ff0000]">{{
                                    lawcourtContent?.content_heading }}</h4>
                                <span class="text-sm text-black">{{ lawcourtContent?.created_at }}</span>
                            </NuxtLink>
                        </div>
                    </div>
                    <!--/ Loop Item -->


                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const img = useImage()
const siteurl = siteUrlState()

// ======== Law Court Content =============== //
const lawcourtContents = useState(() => [])
const { data: lwcourt } = await useFetch("/api/prismaapi/home/lawcourt", {
    method: 'GET',
    // cache: 'force-cache',
})
lawcourtContents.value = lwcourt
// ======== Law Court Content =============== //

// ======== Post Url Generate ============ //
const getPostUrl = (category_slug, subcategory_slug, content_type, content_id) => {
    return `/${category_slug}/${subcategory_slug ? subcategory_slug : (content_type === 1 ? 'news' : 'article')}/${content_id}`
}
// ======== Post Url Generate ============ //

</script>

<style scoped>
.h-sports-excpt:first-child {
    padding-top: 0px
}
</style>