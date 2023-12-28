<template>
    <div class="home-art-culture-category " v-if="artscontents?.length > 0">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${artscontents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">শিল্প-সংস্কৃতি</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- Art Culture Feature Content -->
            <NuxtLink :to="`/category/${artscontents[0]?.cat_slug}/${artscontents[0]?.content_id}`"
                class="flex flex-col gap-2 group">
                <div class=" overflow-hidden">
                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${artscontents[0]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
                <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">{{ artscontents[0]?.content_heading }}</h3>
            </NuxtLink>
            <!--/ Art Culture  Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink :to="`/category/${artscontent?.cat_slug}/${artscontent?.content_id}`" class=" border-b py-3"
                    v-for="artscontent in artscontents.slice(1, 5)" :key="artscontent.content_id">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">{{ artscontent?.content_heading }}</h4>
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
// ======== Arts Content =============== //
const artscontents = useState(() => [])
const { data: harts } = await useFetch("/api/prismaapi/home/art", {
    method: 'GET',

    cache: 'force-cache',


})
artscontents.value = harts
// ======== Arts Content =============== //
</script>

<style lang="scss" scoped></style>