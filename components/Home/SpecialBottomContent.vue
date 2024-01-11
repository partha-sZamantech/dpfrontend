<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-5 py-4">
        <ClientOnly>
            <!-- ========== Loop Item =========== -->
            <NuxtLink :to="getPostUrl(tpcontent?.cat_slug, tpcontent?.subcat_slug, tpcontent?.content_type, tpcontent?.content_id)" class="flex flex-col gap-3 group"
                v-for="tpcontent in spTopContent?.slice(5, 11)" :key="tpcontent?.content_id">
                <div class=" overflow-hidden">
                    <nuxt-img :src="`${siteurl?.site_url}/media/content/images/${tpcontent?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
                <div class="flex flex-col gap-4 md:gap-2">

                    <div class="h-16">
                        <h4 class=" text-[20px] font-semibold mb-1 group-hover:text-[#ff0000]">{{ tpcontent?.content_heading
                        }}</h4>
                    </div>

                    <!-- <p class="text-[16px]">{{ tpcontent?.content_details?.substring(0,100)?.toString().replace(/(<([^>]+)>)/ig, '') }}...</p> -->
                    <div class="text-base font-[300] text-black" v-html="`${tpcontent?.content_details?.substring(0, 100)} ...`"></div>

                    <span class="text-sm text-black">{{ tpcontent?.bn_cat_name }} | {{ tpcontent?.created_at }}</span>

                </div>
            </NuxtLink>
            <!-- ========== Loop Item =========== -->
        </ClientOnly>

    </div>
</template>

<script setup>
const img = useImage()

// Global Special Top Content State Composables
const spTopContent = specialTopContentState()
const siteurl = siteUrlState()

// ======== Post Url Generate ============ //
const getPostUrl = (category_slug, subcategory_slug, content_type, content_id) => {
    return `/${category_slug}/${subcategory_slug ? subcategory_slug : (content_type === 1 ? 'news' : 'article') }/${content_id}`
}
// ======== Post Url Generate ============ //

</script>

<style lang="scss" scoped></style>