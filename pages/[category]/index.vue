<template>
    <div class="category-page">

        <Head>
            <Title>{{ category.cat_name_bn }}</Title>
        </Head>
        <!-- Space For Ads -->
        <div class="category-ads-section border-b py-4 ">
            <div class="bg-[#f7f7f7]">
                <a target="_blank" href="/">
                    <img class="mx-auto" src="/assets/img/bar-ads.gif" alt="">
                </a>
            </div>
        </div>
        <!-- Space For Ads -->
        <div class=" max-w-[1280px] mx-auto category-content px-4 md:px-2 py-4">
            <div class="breadcrump border-b pb-1 mb-5 flex flex-col gap-2">
                <div class="flex gap-1 justify-start items-center">

                    <NuxtLink to="/">
                        <Icon class="text-xl" name="material-symbols:house-rounded" />
                    </NuxtLink>
                    <Icon name="ic:outline-keyboard-arrow-right" class="text-[#3375af]" />
                    <NuxtLink :to="`/`" class="text-[#3375af] font-semibold">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        {{ category.cat_name_bn }}
                    </NuxtLink>
                </div>
                <div class="subcategory flex gap-4" v-if="category?.subcat?.length > 0">
                    <!-- <Icon v-if="detailsContent?.subcategory" name="ic:outline-keyboard-arrow-right" /> -->
                    <NuxtLink v-for="subcategory in category?.subcat" :to="`/`" class="text-[000000] font-[600]">
                        {{ subcategory.subcat_name_bn }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const cat_slug = useRoute().params.category
const category = ref('')
//================== Category Content fetching =============== //
const categoryContent = useState(() => [])
const take = ref(15)
const { data: catcont } = await useFetch('/api/category/categorycontent', {
    method: "POST",
    body: {
        cat_slug: cat_slug,
        take: take.value
    }
})
categoryContent.value = catcont.value
category.value = catcont?.value?.category
console.log(categoryContent.value)
//================== Category Content fetching =============== //

</script>

<style lang="scss" scoped></style>