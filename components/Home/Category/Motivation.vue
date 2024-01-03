<template>
    <div class="home-motivation-category" v-if="motivationContents?.length > 0">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${motivationContents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">মোটিভেশন</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- Motivation Feature Content -->
            <NuxtLink :to="`/category/${motivationContents[0]?.cat_slug}/${motivationContents[0]?.content_id}`"
                class="flex flex-col gap-2 group">
                <div class=" overflow-hidden">
                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${motivationContents[0]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)"  />
                </div>
                <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">{{ motivationContents[0]?.content_heading }}
                </h3>
            </NuxtLink>
            <!--/ Motivation Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink :to="`/category/${motivationContent?.cat_slug}/${motivationContent?.content_id}`"
                    class=" border-b py-3" v-for="motivationContent in motivationContents.slice(1, 5)"
                    :key="motivationContent.content_id">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">{{ motivationContent?.content_heading }}</h4>
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
// ======== Motivation Content =============== //
const motivationContents = useState(() => [])
const { data: hmotivation } = await useFetch("/api/prismaapi/home/motivation", {
    method: 'GET',
    // cache: 'force-cache',

})
motivationContents.value = hmotivation
// ======== Motivation Content =============== //
</script>

<style lang="scss" scoped></style>