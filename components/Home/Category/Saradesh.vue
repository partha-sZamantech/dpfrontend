<template>
    <div class="home-saradesh-category">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${saradeshcontents[0]?.category?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">সারাদেশ</h2>
            </NuxtLink>
        </div>
        <div class="home-saradesh-category-except-post flex flex-col">
            <!-- Loop Item -->
            <div class="grid grid-cols-12 gap-4 group h-sports-excpt border-b py-4" v-for="saradeshcon in saradeshcontents" :key="saradeshcon.content_id">
                <div class=" col-span-5 overflow-hidden">
                    <NuxtLink :to="`/category/${saradeshcon?.category?.cat_slug}/${saradeshcon?.content_id}`">
                        <nuxt-img :src="`${siteUrl.site_url}/media/content/images/${saradeshcon?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteUrl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                    </NuxtLink>
                </div>
                <div class=" col-span-7">
                    <NuxtLink :to="`/category/${saradeshcon?.category?.cat_slug}/${saradeshcon?.content_id}`">
                        <h4 class="text-[18px] leading-tight group-hover:text-[#ff0000]">{{ saradeshcon?.content_heading
                        }}</h4>
                    </NuxtLink>
                </div>
            </div>
            <!--/ Loop Item -->

        </div>
    </div>
</template>

<script setup>
const img = useImage()
const siteUrl = siteUrlState()
const saradeshcontents = useState(() => [])
const { data: hsradesh } = await useFetch('/api/home/saradeshcontent', {
    method: 'GET'
})
saradeshcontents.value = hsradesh
</script>

<style scoped>
.h-sports-excpt:first-child {
    padding-top: 0px
}
</style>