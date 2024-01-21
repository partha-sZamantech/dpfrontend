<template>
    <div class="home-entertainment-category" v-if="lifestyles?.length > 0">
        <div class="category-header border-b-[3px] border-b-[#3375af] my-3">
            <NuxtLink :to="`/${lifestyles[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">লাইফস্টাইল</h2>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-6">
                <NuxtLink
                    :to="getPostUrl(lifestyles[0]?.cat_slug, lifestyles[0]?.subcat_slug, lifestyles[0]?.content_type, lifestyles[0]?.content_id)"
                    class="flex flex-col group gap-2">
                    <div class="intertainment-feature-image overflow-hidden">
                        <nuxt-img loading="lazy"
                            :src="`${siteurl.site_url}/media/content/images/${lifestyles[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                    </div>
                    <div class="intertainment-feature-description flex flex-col gap-2">
                        <h3 class="text-[25px] text-black font-semibold group-hover:text-[#ff0000]">{{
                            lifestyles[0]?.content_heading }}</h3>
                        <ClientOnly>
                            <div class="text-base font-[300] text-black" v-html="`${lifestyles[0]?.content_details?.substring(0,
                                255)} ...`"></div>
                        </ClientOnly>
                        <p class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(lifestyles[0]?.created_at) }}
                            </span>
                        </p>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="home-intertainment-category-except-post grid grid-cols-2 gap-4">
                    <!-- Loop Item -->
                    <div class="flex flex-col gap-4 group h-sports-excpt"
                        v-for="lifestyle in lifestyles.slice(1, 5)" :key="lifestyle.content_id">
                        <div class=" col-span-5 overflow-hidden">
                            <NuxtLink
                                :to="getPostUrl(lifestyle?.cat_slug, lifestyle?.subcat_slug, lifestyle?.content_type, lifestyle?.content_id)">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${lifestyle?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                            </NuxtLink>
                        </div>
                        <div class=" col-span-7">
                            <NuxtLink
                                :to="getPostUrl(lifestyle?.cat_slug, lifestyle?.subcat_slug, lifestyle?.content_type, lifestyle?.content_id)"
                                class="flex flex-col gap-2">
                                <h4 class="text-base text-black font-semibold group-hover:text-[#ff0000]">{{
                                    lifestyle?.content_heading }}</h4>
                                <p class="text-sm text-black flex gap-1 items-center">
                                    <Icon name="ph:alarm-bold" />
                                    <span>
                                        {{ postCreatedDate(lifestyle?.created_at) }}
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
// ======== Life Style Content =============== //
const lifestyles = useState(() => [])
const { data: lifesc } = await useFetch("/api/prismaapi/home/lifestyle", {
    method: 'GET',
    // cache: 'force-cache'
})
lifestyles.value = lifesc.value
// ======== Life Style Content =============== //


</script>

<style scoped>
.h-sports-excpt:first-child {
    padding-top: 0px
}
</style>