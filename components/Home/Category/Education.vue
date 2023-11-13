<template>
    <div class="home-education-category " v-if="educationcontents?.length > 0">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${educationcontents[0]?.category?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">শিক্ষা</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- International Feature Content -->
            <NuxtLink :to="`/category/${educationcontents[0]?.category?.cat_slug}/${educationcontents[0]?.content_id}`" class="flex flex-col gap-2 group">
                <div class=" overflow-hidden">
                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${educationcontents[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)"  />
                </div>
                <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">{{ educationcontents[0]?.content_heading }}</h3>
            </NuxtLink>
            <!--/ International Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink :to="`/category/${educationcontent?.category?.cat_slug}/${educationcontent?.content_id}`" class=" border-b py-3" v-for="educationcontent in educationcontents.slice(1,5)"
                :key="educationcontent.content_id">
                    <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">{{ educationcontent?.content_heading }}</h4>
                </NuxtLink>
                <!--/ Loop Item -->
    
      
            </div>

        </div>
    </div>
</template>

<script setup>
const img = useImage()
const siteurl = siteUrlState()

// ======== Arts Content =============== //
const educationcontents = useState(() => [])
const { data: heducation } = await useFetch("/api/home/educationcontent", {
    method: 'GET'
})
educationcontents.value = heducation
// ======== Arts Content =============== //
</script>

<style lang="scss" scoped></style>