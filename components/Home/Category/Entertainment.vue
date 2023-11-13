<template>
    <div class="home-intertainment-category">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${entertainments[0]?.category?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">বিনোদন</h2>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-6">
                <NuxtLink :to="`/category/${entertainments[0]?.category?.cat_slug}/${entertainments[0]?.content_id}`" class="flex flex-col group gap-2">
                    <div class="intertainment-feature-image overflow-hidden">
                        <nuxt-img :src="`${siteurl.site_url}/media/content/images/${entertainments[0]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                    </div>
                    <div class="intertainment-feature-description flex flex-col gap-1">
                        <h3 class="text-[25px] leading-tight group-hover:text-[#ff0000]">{{ entertainments[0]?.content_heading }}</h3>
                        <ClientOnly>
                                <div class="text-md" v-html="`${entertainments[0]?.content_details?.substring(0,
                                        270)} ...`"></div>
                            </ClientOnly>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="home-intertainment-category-except-post grid grid-cols-2 gap-4">
                    <!-- Loop Item -->
                    <div class="flex flex-col gap-4 group h-sports-excpt" v-for="entertainment in entertainments.slice(1, 5)" :key="entertainment.content_id">
                        <div class=" col-span-5 overflow-hidden">
                            <NuxtLink :to="`/category/${entertainment?.category?.cat_slug}/${entertainment?.content_id}`">
                                <nuxt-img :src="`${siteurl.site_url}/media/content/images/${entertainment?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)"  />
                            </NuxtLink>
                        </div>
                        <div class=" col-span-7">
                            <NuxtLink :to="`/category/${entertainment?.category?.cat_slug}/${entertainment?.content_id}`">
                                <h4 class="text-[18px] leading-tight group-hover:text-[#ff0000]">{{
                                        entertainment?.content_heading }}</h4>
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

// ======== Entertainment Content =============== //
const entertainments = useState(() => [])
const { data: entertainc } = await useFetch("/api/home/entertainmentcontent", {
    method: 'GET'
})
entertainments.value = entertainc
// ======== Entertainment Content =============== //
</script>

<style scoped>
.h-sports-excpt:first-child {
    padding-top: 0px
}
</style>