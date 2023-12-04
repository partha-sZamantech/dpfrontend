<template>
    <div class="flex flex-col gap-1" v-if="specialVideoTop?.length > 0">

        <div class="special-feature_video">
            <div v-if="specialVideoTop[0]?.is_live === 1">
                <iframe v-if="specialVideoTop[0]?.type === 1" width="518" height="292"
                    :src="`https://www.youtube.com/embed/${specialVideoTop[0]?.code}?enablejsapi=1&autoplay=1&mute=1&rel=0&showinfo=1&controls=1&loop=1&playlist=${specialVideoTop[0]?.code}`"
                    frameborder="0" allowfullscreen style="width: 100%!important;"></iframe>
                <div v-else class="fb-video" :data-href="`https://www.facebook.com/watch/?v=${specialVideoTop[0]?.code}`"
                    data-width="auto" data-autoplay="true" data-show-captions="false"></div>
            </div>
            <div v-else>
                <a class="group" style="margin-bottom: 20px; cursor: pointer" href="dfsdfsd" target="_blank" rel="nofollow">
                    <div class="notliveimage relative">
                        <img :src="`${siteurl?.site_url}/media/videoImages/${specialVideoTop[0]?.img_bg_path}`"
                            :alt="specialVideoTop[0]?.title" style="width: 100%" />
                        <Icon name="simple-icons:youtubemusic"
                            class=" absolute top-[40%] left-[40%] col-span-2 md:col-span-3 text-6xl group-hover:text-[#3375af] text-[#ff0000]" />
                    
                        <h4>
                            {{ specialVideoTop[0]?.title }}
                        </h4>
                    </div>
                </a>
            </div>
            <!-- <iframe width="518" height="292" src="https://www.youtube.com/embed/{{$spTopFirstVideo->code}}?enablejsapi=1&autoplay=1&mute=1&rel=0&showinfo=1&controls=1&loop=1&playlist={{$spTopFirstVideo->code}}" frameborder="0" allowfullscreen style="width: 100%!important;"></iframe> -->

        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 md:place-items-center">
            <NuxtLink to="/" class="grid grid-cols-12 gap-4 items-center group border-b py-4 group">
                <Icon name="simple-icons:youtubemusic"
                    class=" col-span-2 md:col-span-3 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                <h4 class="text-[18px] col-span-10 md:col-span-9 group-hover:text-[#3375af]">মা দিবসের পেছনের
                    গল্প</h4>
            </NuxtLink>
            <NuxtLink to="/" class="grid grid-cols-12 gap-4 items-center group border-b py-4 group">
                <Icon name="simple-icons:youtubemusic"
                    class=" col-span-2 md:col-span-3 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                <h4 class="text-[18px] col-span-10 md:col-span-9 group-hover:text-[#3375af]">মা দিবসের পেছনের
                    গল্প</h4>
            </NuxtLink>
            <NuxtLink to="/" class="grid grid-cols-12 gap-4 items-center group border-b py-4 group">
                <Icon name="simple-icons:youtubemusic"
                    class=" col-span-2 md:col-span-3 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                <h4 class="text-[18px] col-span-10 md:col-span-9 group-hover:text-[#3375af]">মা দিবসের পেছনের
                    গল্প</h4>
            </NuxtLink>
            <NuxtLink to="/" class="grid grid-cols-12 gap-4 items-center group border-b py-4 group">
                <Icon name="simple-icons:youtubemusic"
                    class=" col-span-2 md:col-span-3 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                <h4 class="text-[18px] col-span-10 md:col-span-9 group-hover:text-[#3375af]">মা দিবসের পেছনের
                    গল্প</h4>
            </NuxtLink>

        </div>
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
const siteurl = siteUrlState()
// =============== Special Top Video Fetching ====================//
const specialVideoTop = useState(() => [])
const { data: sptpvdo } = await useFetch('/api/home/specialvideotop', {
    method: "GET"
})
specialVideoTop.value = sptpvdo
console.log(specialVideoTop.value)
// =============== Special Top Video Fetching ====================//

</script>

<style lang="scss" scoped></style>