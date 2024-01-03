<template>
    <div v-if="probashContents?.length > 0" class="home-probash-category ">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${probashContents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">প্রবাস</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- Probash Feature Content -->
            <NuxtLink :to="`/category/${probashContents[0]?.cat_slug}/${probashContents[0]?.content_id}`"
                class="flex flex-col gap-2 group">
                <div class=" overflow-hidden">
                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${probashContents[0]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)"  />
                </div>
                <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">{{ probashContents[0]?.content_heading }}
                </h3>
            </NuxtLink>
            <!--/ Probash Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink :to="`/category/${probashContent?.cat_slug}/${probashContent?.content_id}`"
                    class=" border-b py-3" v-for="probashContent in probashContents.slice(1, 5)"
                    :key="probashContent.content_id">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">{{ probashContent?.content_heading }}</h4>
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
// ======== Probash Content =============== //
const probashContents = useState(() => [])
const { data: hprobash } = await useFetch("/api/prismaapi/home/probash", {
    method: 'GET',
    // cache: 'force-cache',
})
probashContents.value = hprobash
// ======== Probash Content =============== //
</script>

<style lang="scss" scoped></style>