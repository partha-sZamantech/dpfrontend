<template>
    <div v-if="saradeshcontents?.length > 0" class="home-saradesh-category">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${saradeshcontents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">সারাদেশ</h2>
            </NuxtLink>
        </div>
        <div class="home-saradesh-category-except-post flex flex-col">
            <!-- Loop Item -->
            <div class="grid grid-cols-12 gap-4 group h-sports-excpt border-b py-4" v-for="saradeshcon in saradeshcontents"
                :key="saradeshcon.content_id">
                <div class=" col-span-5 overflow-hidden">
                    <NuxtLink
                        :to="getPostUrl(saradeshcon?.cat_slug, saradeshcon?.subcat_slug, saradeshcon?.content_type, saradeshcon?.content_id)">
                        <nuxt-img loading="lazy"
                            :src="`${siteUrl.site_url}/media/content/images/${saradeshcon?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteUrl?.site_url}/logo/placeholder.jpg`)" />
                    </NuxtLink>
                </div>
                <div class=" col-span-7">
                    <NuxtLink
                        :to="getPostUrl(saradeshcon?.cat_slug, saradeshcon?.subcat_slug, saradeshcon?.content_type, saradeshcon?.content_id)"
                        class="flex flex-col gap-2">
                        <h4 class="text-base text-black font-semibold group-hover:text-[#ff0000]">{{
                            saradeshcon?.content_heading
                        }}</h4>
                        <span class="text-sm text-black">{{ saradeshcon?.created_at }}</span>
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
const { data: hsradesh } = await useFetch('/api/prismaapi/home/saradesh', {
    method: 'GET',
    // cache: 'force-cache',

})
saradeshcontents.value = hsradesh

// ======== Post Url Generate ============ //
const getPostUrl = (category_slug, subcategory_slug, content_type, content_id) => {
    return `/${category_slug}/${subcategory_slug ? subcategory_slug : (content_type === 1 ? 'news' : 'article')}/${content_id}`
}
// ======== Post Url Generate ============ //
</script>

<style scoped>.h-sports-excpt:first-child {
    padding-top: 0px
}</style>