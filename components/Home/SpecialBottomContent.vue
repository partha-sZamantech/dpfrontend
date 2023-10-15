<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-5 py-4">
        <ClientOnly>
        <!-- ========== Loop Item =========== -->
        <NuxtLink :to="`/${tpcontent?.category?.cat_slug}/${tpcontent?.content_id}`" class="flex flex-col gap-3 group" v-for="tpcontent in spTopContent.slice(5, 11)" :key="tpcontent.content_id">
            <div class=" overflow-hidden">
                <nuxt-img :src="`${config.public.apiUrl}/media/content/images/${tpcontent?.img_bg_path}`"
                    class="mx-auto w-full group-hover:scale-110 duration-300"
                    :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
            </div>
            <div>
                <h4 class=" leading-tight text-[20px] mb-1 group-hover:text-[#ff0000]">{{ tpcontent?.content_heading }}</h4>
                <p class="text-[16px]">ব্যস্ততার ভিড়ে একটু ছুটি
                    মিললেই কোথায় ঘুরতে যাবেন তা নিয়ে পরিকল্পনার শেষ নেই। যানজট এড়িয়ে...</p>
            </div>
        </NuxtLink>
        <!-- ========== Loop Item =========== -->
    </ClientOnly>

    </div>
</template>

<script setup>
const img = useImage()
const spTopContent = specialTopContentState()
const config = useRuntimeConfig();
</script>

<style lang="scss" scoped></style>