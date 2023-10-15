
<template>
    <div class="home-national-category">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink to="/" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">জাতীয়</h2>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-7">
                <NuxtLink to="/" class="flex flex-col group gap-2">
                    <div class="national-feature-image overflow-hidden">
                        <nuxt-img
                        :src="`${config.public.apiUrl}/media/content/images/${nationalHCon[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                    </div>
                    <div class="national-feature-description flex flex-col gap-1">
                        <h3 class="text-[25px] leading-tight group-hover:text-[#ff0000]">{{ nationalHCon[0]?.content_heading }}</h3>
                       <ClientOnly> <p class="text-md">{{ nationalHCon[0]?.content_details?.substring(0,
                                300)?.toString().replace(/(<([^>]+)>)/ig, '') }}...</p></ClientOnly>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-5">
                <div class="home-national-category-except-post flex flex-col">
                    <!-- Loop Item -->
                    <div v-for="nationalcntent in nationalHCon.slice(1, 5)" :key="nationalcntent.content_id" class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4">
                        <div class=" col-span-5 overflow-hidden">
                            <NuxtLink to="/">
                                <nuxt-img
                                :src="`${config.public.apiUrl}/media/content/images/${nationalcntent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                            </NuxtLink>
                        </div>
                        <div class=" col-span-7">
                            <NuxtLink to="/">
                                <h4 class="text-[18px] leading-tight group-hover:text-[#ff0000]">{{ nationalcntent?.content_heading }}</h4>
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
const img = useImage()
    const nationalHCon = NationalHomeContentState()
    const {data:nationalhc} = await useFetch('/api/home/nationalhomecontent', {
        method: 'GET'
    })
    nationalHCon.value = nationalhc
    const config = useRuntimeConfig();
</script>

<style scoped>
    .h-national-excpt:first-child{
        padding-top:0px
    }
</style>