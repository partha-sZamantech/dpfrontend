<template>
    <div v-if="opinionContents" class="home-opinion-category ">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${opinionContents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">মতামত</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- Opinion Feature Content -->
            <NuxtLink :to="`/category/${opinionContents[0]?.cat_slug}/${opinionContents[0]?.content_id}`" class="flex flex-col gap-2 group">
                <div class=" overflow-hidden">
                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${opinionContents[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)"  />
                </div>
                <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">{{ opinionContents[0]?.content_heading }}</h3>
            </NuxtLink>
            <!--/ Opinion Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink :to="`/category/${opinionContent?.cat_slug}/${opinionContent?.content_id}`" class=" border-b py-3" v-for="opinionContent in opinionContents.slice(1, 7)" :key="opinionContent.content_id">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">{{ opinionContent?.content_heading }}</h4>
                </NuxtLink>
                <!--/ Loop Item -->

            </div>

        </div>
    </div>
</template>

<script setup>
const img = useImage()
const siteurl = siteUrlState()
const nuxtApp = useNuxtApp()
// ======== Opinion Content =============== //
const opinionContents = useState(() => [])
const { data: hmOpinion } = await useFetch("/api/prismaapi/home/opinion", {
    method: 'GET',
    // cache: 'force-cache',
 
})
opinionContents.value = hmOpinion
// ======== Opinion Content =============== //
</script>

<style lang="scss" scoped></style>