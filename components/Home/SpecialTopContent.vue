<template>
    <div class="specialContent py-3">
        <div class=" grid grid-cols-12 gap-5">
            <div class="col-span-12 md:col-span-7">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 md:col-span-7 group">
                        <!-- Special First Content -->
                        <NuxtLink :to="`/${specialTopContents[0]?.category?.cat_slug}/${specialTopContents[0]?.content_id}`"
                            class="flex flex-col gap-3" >
                            <div class="overflow-hidden">
                                <nuxt-img
                                    :src="`${config.public.apiUrl}/media/content/images/${specialTopContents[0].img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })"
                                     />
                            </div>
                            <h2 class="text-[#ff0000] text-[32px] leading-tight">{{ specialTopContents[0]?.content_heading
                            }}</h2>
                            <p class="text-[18px]">{{ specialTopContents[0]?.content_details?.substring(0,
                                165)?.toString().replace(/(<([^>]+)>)/ig, '') }}...</p>
                        </NuxtLink>
                        <!-- Special First Content -->
                    </div>
                    <div class="col-span-12 md:col-span-5">
                        <div class="flex flex-col gap-2">
                            <!-- ========== Loop Item =========== -->
                            <NuxtLink :to="`/${topcontent?.category?.cat_slug}/${topcontent?.content_id}`" class=" grid grid-cols-12 gap-4 group py-4 border-b specialMiddleTop" v-for="topcontent in specialTopContents.slice(1, 5)" :key="topcontent.content_id">
                                <div class="col-span-5">
                                    <div class="overflow-hidden">
                                        <nuxt-img :alt="topcontent?.content_heading"
                                        :src="`${config.public.apiUrl}/media/content/images/${topcontent?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                    </div>
                                </div>
                                <div class="col-span-7">
                                    <h4 class="text-[20px] leading-tight group-hover:text-[#ff0000]">{{ topcontent?.content_heading }}</h4>
                                </div>
                            </NuxtLink>
                         <!-- ========== Loop Item =========== -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-5">
                <div class="flex flex-col gap-1">
                    <div>
                        <iframe width="518" height="292"
                            src="https://www.youtube.com/embed/rWdN3xUDdE8?enablejsapi=1&autoplay=1&mute=1&rel=0&showinfo=1&controls=1&loop=1&playlist={{$spTopFirstVideo->code}}"
                            frameborder="0" allowfullscreen style="width: 100%!important;"></iframe>
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
            </div>
        </div>
    </div>
</template>

<script setup>
const img = useImage()
// =============== Special Content Fetching ====================//
const config = useRuntimeConfig();
const specialTopContents = specialTopContentState()
const { data: spTopCon } = await useFetch("/api/home/specialtopcontent", {
    method: 'GET'
})
specialTopContents.value = spTopCon
// =============== Special Content Fetching ====================//
</script>

<style scoped>.specialMiddleTop:first-child {
    padding-top: 0;
}</style>