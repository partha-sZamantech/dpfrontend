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
            <div class="breadcrump border-b pb-2 mb-5 flex flex-col gap-4">
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
                <div>
                    <div class="subcategory flex flex-wrap gap-3" v-if="category?.subcat?.length > 0">
                        <!-- <Icon v-if="detailsContent?.subcategory" name="ic:outline-keyboard-arrow-right" /> -->
                        <div class="subcategoryLink" v-for="subcategory in category?.subcat">
                            <NuxtLink :to="`/`" class="text-[000000] font-[600] hover:text-[#3375af]">
                                {{ subcategory.subcat_name_bn }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12">
                <div class="col-span-9">
                    <div class="grid grid-cols-12">
                        <div class="col-span-8">
                            <div class="lead-post h-[328px]">
                                <NuxtLink :to="`/`" class=" relative">
                                    <nuxt-img
                                        :src="`https://www.dhakaprokash24.com/media/content/images/2023October/asad-dhakaprokash-20231005140541.jpg`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                        :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                    <div class="lead-overly absolute h-full w-full block top-0">
                                        <h5 class="img-title text-center text-white group-hover:text-[#ff0000] text-[19px] absolute bottom-4 left-6">
                                            dfdsf</h5>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-span-4">
                        </div>
                    </div>
                </div>
                <div class=" col-span-3">
                    dfds
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const img = useImage()
const siteurl = siteUrlState()
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
.lead-overly{
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(53, 50, 50, 0.9) 75%, rgb(0, 0, 0) 100%);
}
</style>