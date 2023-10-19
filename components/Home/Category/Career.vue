<template>
    <div class="home-career-category " v-if="careers?.length > 0">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${careers[0]?.category?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">ক্যারিয়ার</h2>
            </NuxtLink>
        </div>
        <div class="home-career-c-content flex flex-col gap-3">
            <!-- Career Feature Content -->
            <NuxtLink :to="`${careers[0]?.category?.cat_slug}/${careers[0]?.content_id}`" class="flex flex-col gap-2 group">
                <div class=" overflow-hidden">
                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${careers[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                </div>
                <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">{{ careers[0]?.content_heading }}</h3>
            </NuxtLink>
            <!--/ Career Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink :to="`${career?.category?.cat_slug}/${career?.content_id}`" class=" border-b py-3" v-for="career in careers.slice(1,8)"
                :key="career.content_id">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">{{ career?.content_heading }}</h4>
                </NuxtLink>
                <!--/ Loop Item -->
  
            </div>

        </div>
    </div>
</template>

<script setup>
const img = useImage()
const siteurl = siteUrlState()

// ======== Career Content =============== //
const careers = useState(() => [])
const { data: dcareer } = await useFetch("/api/home/careercontent", {
    method: 'GET'
})
careers.value = dcareer
// ======== Career Content =============== //
</script>

<style lang="scss" scoped></style>