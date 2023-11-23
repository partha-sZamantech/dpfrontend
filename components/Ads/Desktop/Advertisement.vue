<template>
    <div v-if="topBannerAd.status === 1" class="ad-container py-2 border-b ">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="topBannerAd.external_link" target="_blank" rel="nofollow" v-if="topBannerAd.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${topBannerAd.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="topBannerAd.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const props = defineProps(['page', 'position'])
const topBannerAd = ref(null)
const { data: topbA } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: props?.page,
        position: props?.position
    }
})
topBannerAd.value = topbA.value

</script>

<style lang="scss" scoped></style>