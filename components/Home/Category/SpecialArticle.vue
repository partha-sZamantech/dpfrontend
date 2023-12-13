<template>
    <div v-if="specialArticleContents" class="home-special-article-category ">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${specialArticleContents[0]?.category?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">বিশেষ নিবন্ধ</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- Special Article Feature Content -->
            <NuxtLink :to="`/category/${specialArticleContents[0]?.category?.cat_slug}/${specialArticleContents[0]?.content_id}`" class="flex flex-col gap-2 group">
                <div class=" overflow-hidden">
                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${specialArticleContents[0]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
                <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">{{ specialArticleContents[0]?.content_heading }}</h3>
            </NuxtLink>
            <!--/ Special Article Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink :to="`/category/${specialArticleContent?.category?.cat_slug}/${specialArticleContent?.content_id}`" class=" border-b py-3" v-for="specialArticleContent in specialArticleContents.slice(1, 7)" :key="specialArticleContent.content_id">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">{{ specialArticleContent?.content_heading }}</h4>
                </NuxtLink>
                <!--/ Loop Item -->
            </div>

        </div>
    </div>
</template>

<script setup>
const img = useImage()
const siteurl = siteUrlState()

// ======== Special Article Content =============== //
const specialArticleContents = useState(() => [])
const { data: hmspecialrticle } = await useFetch("/api/prismaapi/home/specialarticle", {
    method: 'GET'
})
specialArticleContents.value = hmspecialrticle
// ======== Special Article Content =============== //
</script>

<style lang="scss" scoped></style>