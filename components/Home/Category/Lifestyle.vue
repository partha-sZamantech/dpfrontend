<template>
    <div class="home-entertainment-category" v-if="lifestyles?.length > 0">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${lifestyles[0]?.category?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">লাইফস্টাইল</h2>
            </NuxtLink>
        </div>
        <div class="home-crime-category-except-post flex flex-col">
            <!-- Loop Item -->
            <div class="grid grid-cols-12 gap-4 group h-sports-excpt border-b py-4" v-for="lifestyle in lifestyles"
                :key="lifestyle.content_id">
                <div class=" col-span-5 overflow-hidden">
                    <NuxtLink :to="`/category/${lifestyle?.category?.cat_slug}/${lifestyle?.content_id}`">
                        <nuxt-img :src="`${siteurl.site_url}/media/content/images/${lifestyle?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)"  />
                    </NuxtLink>
                </div>
                <div class=" col-span-7">
                    <NuxtLink :to="`/category/${lifestyle?.category?.cat_slug}/${lifestyle?.content_id}`">
                        <h4 class="text-[18px] leading-tight group-hover:text-[#ff0000]">{{ lifestyle?.content_heading }}</h4>
                    </NuxtLink>
                </div>
            </div>
            <!--/ Loop Item -->

        </div>
    </div>
</template>

<script setup>
const img = useImage()
const siteurl = siteUrlState()

// ======== Life Style Content =============== //
const lifestyles = useState(() => [])
const { data: lifesc } = await useFetch("/api/home/lifestylecontent", {
    method: 'GET'
})
lifestyles.value = lifesc
// ======== Life Style Content =============== //
</script>

<style scoped>
.h-sports-excpt:first-child {
    padding-top: 0px
}
</style>