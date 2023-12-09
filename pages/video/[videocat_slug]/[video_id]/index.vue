<template>
    <div class=" max-w-[1280px] mx-auto detail-page px-4 md:px-2 py-4">

        <Head>
            <Title>{{ videoDetail?.title }}</Title>
            <!-- Refresh Reload -->
            <!-- <Meta content="500" http-equiv="refresh" /> -->
            <!-- Refresh Reload -->
            <!-- <Meta name="description" :content="ogDescription" />
            <Meta name="keywords" :content="metaKeywords" /> -->
            <Meta property="og:url" :content="`${websiteUrl.website_url}/video/${videocat_slug}/${video_id}`" />
            <Meta property="og:title" :content="videoDetail?.title" />
            <!-- <Meta property="og:description" :content="ogDescription" /> -->
            <!-- <Meta property="og:image" :content="ogImage" /> -->

            <Meta name="twitter:title" :content="videoDetail?.title" />
            <!-- <Meta name="twitter:description" :content="ogDescription" /> -->
            <!-- <Meta name="twitter:image" :content="ogImage" /> -->
            <Meta name="twitter:url" :content="`${websiteUrl.website_url}/video/${videocat_slug}/${video_id}`" />
            <!-- <Link rel="canonical" :href="ogUrl" /> -->
        </Head>
        <!-- <img src="http://127.0.0.1:8000/api/ogimage/get/politics?imgPath=2023November/dhaka-prokash-news-15-20231111182548.jpg" alt=""> -->
        <div class="breadcrump border-b pb-1 mb-5">
            <div class="flex gap-1 justify-start items-center">
                <NuxtLink :to="`/video/${videoDetail?.category?.slug}`" class="text-[#3375af] font-semibold">
                    <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                    <h1 class="text-xl md:text-3xl">{{ videoDetail?.category?.name_bn }}</h1>
                </NuxtLink>
            </div>
        </div>

        <!--========== First Details Content ============ -->
        <div class=" grid grid-cols-12 gap-5 relative d-print">
            <div class="col-span-12 md:col-span-9">
                <div class="video-details">
                    <div v-if="videoDetail?.type == 1" class="play-video">
                        <iframe width="100%" class=" md:h-[530px] h-[215px]"
                            :src="`https://www.youtube.com/embed/${videoDetail?.code}?rel=0&enablejsapi=1&autoplay=1&mute=1&showinfo=1&controls=1`"
                            frameborder="0" allowfullscreen></iframe>
                        </div>
                </div>

            </div>

            <div class=" col-span-12 md:col-span-3">

                <!--:::::::: Detail Page Right One Ads :::::::::-->
                <div :class="`sticky ${stickyScroll ? ' top-[164px]' : 'top-14'} duration-200`">
                    <div :class="`flex flex-col gap-2`">
                        <div class=" border-b-[3px] border-[#3375af] pb-1 flex items-center gap-3">
                            <span class="w-3 h-3 bg-[#3375af]"></span>
                            <h3 class="text-[#3375af] text-[18px] font-[600]">আরও ভিডিও</h3>
                        </div>
                        <div class="video-detail-page flex flex-col">
                            <!-- Loop Item -->
                            <NuxtLink :to="`dfgfdg`" class="grid grid-cols-12 gap-4 group border-b py-2 items-center">
                                <div class=" col-span-2">
                                    <Icon name="simple-icons:youtubemusic"
                                        class=" col-span-2 md:col-span-2 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                                </div>
                                <div class=" col-span-6">
                                    <h4 class="text-[16px] leading-tight group-hover:text-[#ff0000]">dfgdfgd</h4>
                                </div>
                            </NuxtLink>

                            <!--/ Loop Item -->
                        </div>
                    </div>

                </div>
            </div>



        </div>
        <!--========== // First Details Content ============ -->


    </div>
</template>

<script setup>
useHead({
    script: [
        {
            src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2',
            async: 'true',
            defer: 'true',
            tagPosition: "head"
        }
    ]
})
// single Page sticky
const singlePageSticky = singlePageStickyState()
const siteurl = siteUrlState()
const websiteUrl = websiteUrlState()
const stickyScroll = computed(() =>
    singlePageSticky.value
)
const video_id = useRoute().params.video_id
const videocat_slug = useRoute().params.videocat_slug

const videoDetail = useState(() => "")
const moreVideos = useState(() => [])
const { data: vdtail } = await useFetch('/api/videos/videodetails', {
    method: 'POST',
    body: {
        video_id: video_id,
        videocat_slug: videocat_slug
    }
})
videoDetail.value = vdtail?.value?.video
moreVideos.value = vdtail?.value?.videos
console.log(videoDetail.value)

</script>

<style lang="scss" scoped></style>