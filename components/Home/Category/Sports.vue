<template>
    <div class="home-sports-category" v-if="sportscontent?.length > 0">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${sportscontent[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">খেলা</h2>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-7">
                <NuxtLink :to="`/category/${sportscontent[0]?.cat_slug}/${sportscontent[0]?.content_id}`"
                    class="flex flex-col group gap-2">
                    <div class="national-feature-image overflow-hidden">
                        <nuxt-img :src="`${siteUrl.site_url}/media/content/images/${sportscontent[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteUrl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                    </div>
                    <div class="national-feature-description flex flex-col gap-1">
                        <h3 class="text-[25px] leading-tight group-hover:text-[#ff0000]">{{
                            sportscontent[0]?.content_heading }}</h3>
                        <!-- <p class="text-md">{{ sportscontent[0]?.content_details?.substring(0,
                            165)?.toString().replace(/(<([^>]+)>)/ig, '') }}...</p> -->
                        <ClientOnly>
                            <div class="text-[16px] font-[400]" v-html="`${sportscontent[0]?.content_details?.substring(0,
                                165)} ...`"></div>
                        </ClientOnly>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-5">
                <div class="home-national-category-except-post flex flex-col">
                    <!-- Loop Item -->
                    <div class="grid grid-cols-12 gap-4 group h-sports-excpt border-b py-4"
                        v-for="hmsport in sportscontent.slice(1, 5)" :key="hmsport.content_id">
                        <div class=" col-span-5 overflow-hidden">
                            <NuxtLink :to="`/category/${hmsport?.cat_slug}/${hmsport?.content_id}`">
                                <nuxt-img :src="`${siteUrl.site_url}/media/content/images/${hmsport?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteUrl?.site_url}/logo/placeholder.jpg`)" />
                            </NuxtLink>
                        </div>
                        <div class=" col-span-7">
                            <NuxtLink :to="`/category/${hmsport?.cat_slug}/${hmsport?.content_id}`">
                                <h4 class="text-[18px] leading-tight group-hover:text-[#ff0000]">{{
                                    hmsport?.content_heading }}</h4>
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
const nuxtApp = useNuxtApp()
const siteUrl = siteUrlState()
const sportscontent = useState(() => [])
const { data: hsport } = await useFetch('/api/prismaapi/home/sports', {
    method: 'GET',
    cache: 'force-cache',
})
sportscontent.value = hsport
</script>

<style scoped>
.h-sports-excpt:first-child {
    padding-top: 0px
}
</style>