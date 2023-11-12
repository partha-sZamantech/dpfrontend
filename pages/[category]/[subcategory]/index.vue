<template>
    <div class="category-page">

        <Head>
            <Title>{{ subcategory.subcat_name_bn }}</Title>
        </Head>
        <!-- Space For Ads -->
        <div class="category-ads-section border-b border-b-[#dee2e6] py-4 ">
            <div class="bg-[#f7f7f7]">
                <a target="_blank" href="/">
                    <img class="mx-auto" src="/assets/img/bar-ads.gif" alt="">
                </a>
            </div>
        </div>
        <!-- Space For Ads -->
        <div class=" max-w-[1280px] mx-auto category-content px-4 md:px-2 py-4 relative">
            <!-- Breadcrump Section -->
            <div class="breadcrump border-b border-b-[#dee2e6] pb-2 mb-5 flex flex-col gap-2 md:gap-2">
                <div class="flex gap-1 justify-start items-center">
                    <NuxtLink :to="`/${category?.cat_slug}`" class=" font-semibold">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        <h1 class="text-xl md:text-xl border-b text-[#000000] hover:text-[#3375af] hover:border-b-[#3375af]">{{ category?.cat_name_bn }}</h1>
                    </NuxtLink>
                </div>

                <div class="flex flex-col gap-4">
                    <NuxtLink :to="`/${category?.cat_slug}/${subcat_slug}`" class="text-[#3375af] font-semibold">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        <h1 class="text-xl md:text-3xl">{{ subcategory.subcat_name_bn }}</h1>
                    </NuxtLink>
                    <div class="subcategory flex flex-wrap gap-3" v-if="category?.subcat?.length > 0">
                        <!-- <Icon v-if="detailsContent?.subcategory" name="ic:outline-keyboard-arrow-right" /> -->
                        <div class="subcategoryLink" v-for="subcat in category?.subcat">
                            <NuxtLink :to="`/${category?.cat_slug}/${subcat?.subcat_slug}`"
                                :class="`${subcategory?.subcat_name_bn === subcat?.subcat_name_bn && 'text-[#3375af]' } text-[#121212] font-[600] text-sm md:text-[16px] hover:text-[#3375af]`">
                                {{ subcat?.subcat_name_bn }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!--/ Breadcrump Section -->


        </div>
    </div>
</template>

<script setup>
const subcat_slug = useRoute().params.subcategory
const cat_slug = useRoute().params.category
// ================== Subcategory Content ============= //
const subcategoryContents = useState(() => [])
const subcategoryContentExcept = useState(() => [])
const category = ref(null)
const subcategory = ref(null)
const take = ref(15)
const { data: subctcont } = await useFetch('/api/subcatcontent/subcatcontent', {
    method: "POST",
    body: {
        cat_slug: cat_slug,
        subcat_slug: subcat_slug,
        take: take.value
    }
})
category.value = subctcont?.value?.category
subcategoryContents.value = subctcont?.value?.contents
subcategory.value = subctcont?.value?.subcategory
subcategoryContentExcept.value = subctcont?.value?.contents.slice(5, take.value)
console.log(subcategoryContents.value)
// ================== Subcategory Content ============= //

//================ Load More Sub Category Content Button =================//
const loadMoreButtonHandler = async () => {
    take.value += 10
    const { data: loadsubCtP } = await useFetch('/api/subcatcontent/subcatcontent', {
        method: "POST",
        body: {
            cat_slug: cat_slug,
            subcat_slug: subcat_slug,
            take: take.value
        }
    })
    subcategoryContentExcept.value = loadsubCtP.value.contents.slice(5, take.value)

}
//================ Load More Sub Category Content Button =================//

</script>

<style scoped>
.subcategory .subcategoryLink:not(:last-child)::after {
    content: "";
    width: 7px;
    height: 7px;
    background: #3375af;
    display: inline-block;
    border-radius: 100%;
    margin-bottom: 3px;
    margin-left: 10px;
}

.cat-box:last-child {
    border-right: 0px !important;
}

.lead-overly {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(53, 50, 50, 0.9) 75%, rgb(0, 0, 0) 100%);
}
</style>