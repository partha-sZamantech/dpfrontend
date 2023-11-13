<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-5 py-4">
        <ClientOnly>
        <!-- ========== Loop Item =========== -->
        <NuxtLink :to="`/category/${tpcontent?.category?.cat_slug}/${tpcontent?.content_id}`" class="flex flex-col gap-3 group" v-for="tpcontent in spTopContent?.slice(5, 11)" :key="tpcontent?.content_id">
            <div class=" overflow-hidden">
                <nuxt-img :src="`${siteurl?.site_url}/media/content/images/${tpcontent?.img_bg_path}`"
                    class="mx-auto w-full group-hover:scale-110 duration-300"
                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
            </div>
            <div>
                <h4 class="leading-tight text-[20px] mb-1 group-hover:text-[#ff0000]">{{ tpcontent?.content_heading }}</h4>
                <!-- <p class="text-[16px]">{{ tpcontent?.content_details?.substring(0,100)?.toString().replace(/(<([^>]+)>)/ig, '') }}...</p> -->
                <div class="text-[15px] font-[300] text-[#555555]" v-html="`${tpcontent?.content_details?.substring(0,100)} ...`"></div>
            </div>
        </NuxtLink>
        <!-- ========== Loop Item =========== -->
    </ClientOnly>

    </div>
</template>

<script setup>
const img = useImage()
const spTopContent = specialTopContentState()
const siteurl =  siteUrlState()
</script>

<style lang="scss" scoped></style>