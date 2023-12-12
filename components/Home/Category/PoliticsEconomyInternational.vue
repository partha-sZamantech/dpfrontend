<template>
    <div class="grid grid-cols-12 gap-4 py-4">
        <div class=" col-span-12 md:col-span-4">
            <div class="home-politic-category ">
                <div class="category-header border-b-4 border-b-[#3375af] my-3">
                    <NuxtLink :to="`/${politics[0]?.category?.cat_slug}`" class="flex gap-3 items-center">
                        <span class="w-3 h-3 bg-[#3375af]"></span>
                        <h2 class="text-[#3375af] text-[18px] font-semibold">রাজনীতি</h2>
                    </NuxtLink>
                </div>
                <div class="home-p-c-ontent flex flex-col gap-3">
                    <!-- Politic Feature Content -->
                    <NuxtLink :to="`/category/${politics[0]?.cat_slug}/${politics[0]?.content_id}`"
                        class="flex flex-col gap-2 group">
                        <div class=" overflow-hidden">
                            <nuxt-img :src="`${siteurl.site_url}/media/content/images/${politics[0]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                        <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">{{ politics[0]?.content_heading }}
                        </h3>
                    </NuxtLink>
                    <!--/ Politic Feature Content -->

                    <div class="h-p-c-excpt flex flex-col">
                        <!-- Loop Item -->
                        <NuxtLink :to="`/category/${hpolitic?.cat_slug}/${hpolitic?.content_id}`" class=" border-b py-3"
                            v-for="hpolitic in politics.slice(1, 6)" :key="hpolitic.content_id">
                            <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">{{ hpolitic.content_heading }}</h4>
                        </NuxtLink>
                        <!--/ Loop Item -->

                    </div>

                </div>
            </div>
        </div>
        <div class=" col-span-12 md:col-span-4">
            <div class="home-economy-category ">
                <div class="category-header border-b-4 border-b-[#3375af] my-3">
                    <NuxtLink :to="`/${economycontent[0]?.cat_slug}`" class="flex gap-3 items-center">
                        <span class="w-3 h-3 bg-[#3375af]"></span>
                        <h2 class="text-[#3375af] text-[18px] font-semibold">অর্থনীতি</h2>
                    </NuxtLink>
                </div>
                <div class="home-econ-c-ontent flex flex-col gap-3">
                    <!-- Economy Feature Content -->
                    <NuxtLink :to="`/category/${economycontent[0]?.cat_slug}/${economycontent[0]?.content_id}`"
                        class="flex flex-col gap-2 group">
                        <div class=" overflow-hidden">
                            <nuxt-img :src="`${siteurl.site_url}/media/content/images/${economycontent[0]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                        <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">{{
                            economycontent[0]?.content_heading }}</h3>
                    </NuxtLink>
                    <!--/ Economy Feature Content -->

                    <div class="h-p-c-excpt flex flex-col">
                        <!-- Loop Item -->
                        <NuxtLink :to="`/category/${heconmy?.cat_slug}/${heconmy?.content_id}`"
                            class=" border-b py-3" v-for="heconmy in economycontent.slice(1, 6)" :key="heconmy.content_id">
                            <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">{{ heconmy.content_heading }}</h4>
                        </NuxtLink>
                        <!--/ Loop Item -->

                    </div>

                </div>
            </div>
        </div>
        <div class=" col-span-12 md:col-span-4">
            <div class="home-international-category ">
                <div class="category-header border-b-4 border-b-[#3375af] my-3">
                    <NuxtLink :to="`/${internationalcontent[0]?.cat_slug}`" class="flex gap-3 items-center">
                        <span class="w-3 h-3 bg-[#3375af]"></span>
                        <h2 class="text-[#3375af] text-[18px] font-semibold">সারাবিশ্ব</h2>
                    </NuxtLink>
                </div>
                <div class="home-int-c-content flex flex-col gap-3">
                    <!-- International Feature Content -->
                    <NuxtLink
                        :to="`/category/${internationalcontent[0]?.cat_slug}/${internationalcontent[0]?.content_id}`"
                        class="flex flex-col gap-2 group">
                        <div class=" overflow-hidden">
                            <nuxt-img
                                :src="`${siteurl.site_url}/media/content/images/${internationalcontent[0]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                        <h3 class="text-[19px] leading-tight group-hover:text-[#ff0000]">{{
                            internationalcontent[0]?.content_heading }}</h3>
                    </NuxtLink>
                    <!--/ International Feature Content -->

                    <div class="h-p-c-excpt flex flex-col">
                        <!-- Loop Item -->
                        <NuxtLink :to="`/category/${hinternatcon?.cat_slug}/${hinternatcon?.content_id}`"
                            class=" border-b py-3" v-for="hinternatcon in internationalcontent.slice(1, 6)"
                            :key="hinternatcon.content_id">
                            <h4 class="text-[17px] hover:text-[#ff0000] leading-tight">{{ hinternatcon.content_heading }}
                            </h4>
                        </NuxtLink>
                        <!--/ Loop Item -->
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const img = useImage()
const siteurl = siteUrlState()

// ======== Politics Content =============== //
const politics = useState(() => [])
const { data: pltic } = await useFetch("/api/prismaapi/home/positioncontent", {
    method: 'POST',
    body: {
        cat_id: 2, // Politics Category id [2]
        take: 6
    }
})
politics.value = pltic
// ======== Politics Content =============== //

// ======== Economy Content =============== //
const economycontent = useState(() => [])
const { data: econ } = await useFetch("/api/prismaapi/home/categorycontent", {
    method: 'POST',
    body: {
        cat_id: 3, // assign Category id
        take: 6
    }
})
economycontent.value = econ
// ======== Economy Content =============== //

// ======== International Content =============== //
const internationalcontent = useState(() => [])
const { data: intntnal } = await useFetch("/api/prismaapi/home/categorycontent", {
    method: 'POST',
    body: {
        cat_id: 4, // assign Category id
        take: 6
    }
})
internationalcontent.value = intntnal
// ======== International Content =============== //



</script>

<style lang="scss" scoped></style>