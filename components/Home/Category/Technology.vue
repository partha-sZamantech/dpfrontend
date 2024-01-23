<template>
    <div class="home-technology-category" v-if="technologycontents?.length > 0">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${technologycontents[0]?.category?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">বিজ্ঞান-তথ্যপ্রযুক্তি</h2>
            </NuxtLink>
        </div>
        <div class="flex flex-col gap-4">
            <div class="">
                <NuxtLink
                    :to="getPostUrl(technologycontents[0]?.cat_slug, technologycontents[0]?.subcat_slug, technologycontents[0]?.content_type, technologycontents[0]?.content_id)"
                    class="grid grid-cols-1 md:grid-cols-2 group gap-4">
                    <div class="intertainment-feature-image overflow-hidden">
                        <nuxt-img loading="lazy"
                            :src="`${siteurl.site_url}/media/content/images/${technologycontents[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                    </div>
                    <div class="intertainment-feature-description flex flex-col gap-1">
                        <h3 class="text-[25px] text-black font-semibold group-hover:text-[#ff0000]">{{
                            technologycontents[0]?.content_heading }}</h3>
                        <ClientOnly>
                            <div class="text-base font-[300] text-black" v-html="`${technologycontents[0]?.content_details?.substring(0,
                                165)} ...`"></div>
                        </ClientOnly>
                        <p class="text-sm text-black flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(technologycontents[0]?.created_at) }}
                            </span>
                        </p>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="home-intertainment-category-except-post grid grid-cols-2 gap-4">
                    <!-- Loop Item -->
                    <div class="flex flex-col gap-4 group h-sports-excpt"
                        v-for="technologycontent in technologycontents.slice(1, 5)" :key="technologycontent.content_id">
                        <div class=" col-span-5 overflow-hidden">
                            <NuxtLink
                                :to="getPostUrl(technologycontent?.cat_slug, technologycontent?.subcat_slug, technologycontent?.content_type, technologycontent?.content_id)">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${technologycontent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </NuxtLink>
                        </div>
                        <div class=" col-span-7">
                            <NuxtLink
                                :to="getPostUrl(technologycontent?.cat_slug, technologycontent?.subcat_slug, technologycontent?.content_type, technologycontent?.content_id)"
                                class="flex flex-col gap-2">
                                <h4 class="text-base text-black font-semibold group-hover:text-[#ff0000]">
                                    {{ technologycontent?.content_heading }}
                                </h4>
                                <p class="text-sm text-black mt-1 flex gap-1 items-center">
                                    <Icon name="ph:alarm-bold" />
                                    <span>
                                        {{ postCreatedDate(technologycontent?.created_at) }}
                                    </span>
                                </p>
                            </NuxtLink>
                        </div>
                    </div>
                    <!--/ Loop Item -->


                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { postCreatedDate, getPostUrl } from '~/lib/helpers';
const img = useImage()
const siteurl = siteUrlState()
// ======== Technology Content =============== //
const technologycontents = useState(() => [])
const { data: technologyc } = await useFetch("/api/prismaapi/home/technology", {
    method: 'GET',
    // cache: 'force-cache',

})
technologycontents.value = technologyc
// ======== Technology Content =============== //


</script>

<style lang="scss" scoped></style>