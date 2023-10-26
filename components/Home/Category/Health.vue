<template>
    <div class="home-health-category " v-if="healthcontents?.length > 0">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${healthcontents[0]?.category?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">স্বাস্থ্য</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- Health Feature Content -->
            <NuxtLink :to="`/category/${healthcontents[0]?.category?.cat_slug}/${healthcontents[0]?.content_id}`" class="flex flex-col gap-2 group">
                <div class=" overflow-hidden">
                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${healthcontents[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                </div>
                <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">{{ healthcontents[0]?.content_heading }}</h3>
            </NuxtLink>
            <!--/ Health Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink :to="`/category/${healthcontent?.category?.cat_slug}/${healthcontent?.content_id}`" class=" border-b py-3" v-for="healthcontent in healthcontents.slice(1,5)"
                :key="healthcontent.content_id">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">{{ healthcontent?.content_heading }}</h4>
                </NuxtLink>
                <!--/ Loop Item -->
            </div>

        </div>
    </div>
</template>

<script setup>
const img = useImage()
const siteurl = siteUrlState()

// ======== Health Content =============== //
const healthcontents = useState(() => [])
const { data: chealth } = await useFetch("/api/home/healthcontent", {
    method: 'GET'
})
healthcontents.value = chealth
// ======== Health Content =============== //
</script>

<style lang="scss" scoped></style>