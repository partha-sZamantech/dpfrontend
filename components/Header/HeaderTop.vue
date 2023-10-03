<template>
    <div class="max-w-[1280px] mx-auto">
        <div :class="` hidden md:grid grid-cols-3 py-5 bg-white px-2 justify-between items-center `">
            <div class="flex gap-3 flex-col">
                <div class="flex gap-3 items-center h-8">
                    <div>
                        <Icon @click="desktopMenuOpenHandler" class="text-3xl cursor-pointer hover:bg-[#f7f7f7]"
                            name="ic:outline-menu" />
                        <!-- <Icon v-else @click="desktopMenuCloseHandler" name="material-symbols:close" class="text-3xl cursor-pointer hover:bg-[#f7f7f7]" /> -->
                    </div>
                    <div v-if="!searchStatus">
                        <Icon @click="searchBoxHandler" class="text-2xl cursor-pointer" name="tabler:search" />
                    </div>
                    <div v-else :class="` flex items-center duration-500`">
                        <input type="text" placeholder="যা খুঁজতে চান তা লিখুন"
                            class=" focus:outline-none border px-2 py-2">
                        <div class=" bg-gray-200 px-2 py-2  cursor-pointer">
                            <Icon class="text-2xl " name="tabler:search" />
                        </div>
                        <div @click="searchBoxHandler"
                            class=" bg-gray-200 px-2 py-2 border-l border-l-gray-400 cursor-pointer">
                            <Icon name="material-symbols:close" class="text-2xl" />
                        </div>
                    </div>
                </div>
                <div class="today_date text-sm">

                    {{ todayDate }}

                </div>
            </div>
            <div class="header_logo">
                <!-- <nuxt-img class="mx-auto" src="/assets/img/logo.png" height="56" alt="Dhaka Prokash"
                :placeholder="img('/assets/img/logo.png', { h: 56, blur: 2, q: 50 })" /> -->
                <NuxtLink to="/"><nuxt-img class="mx-auto" :src="`${siteConfig.public.apiUrl}/media/common/${siteSetting.logo}`" height="56" alt="Dhaka Prokash" /></NuxtLink>
            </div>
            <div class="flex gap-4 flex-col">
                <div class="flex gap-4 items-center place-self-end">
                    <NuxtLink to="https://www.facebook.com/dhakaprokash24" target="_blank">
                        <Icon class="text-2xl cursor-pointer" name="bi:facebook" /> {{ siteConfig.public.SITE_URL }}
                    </NuxtLink>
                    <NuxtLink to="https://twitter.com/dhakaprokash24" target="_blank">
                        <Icon class="text-2xl cursor-pointer" name="ri:twitter-x-fill" />
                    </NuxtLink>
                    <NuxtLink to="https://www.instagram.com/dhakaprokash24/" target="_blank">
                        <Icon class="text-2xl cursor-pointer" name="bi:instagram" />
                    </NuxtLink>
                    <NuxtLink to="https://www.youtube.com/c/DhakaProkash" target="_blank">
                        <Icon class="text-2xl cursor-pointer" name="bi:youtube" />
                    </NuxtLink>
                </div>
                <div class="today_date place-self-end flex gap-2">
                    <div class="px-3 py-1 border cursor-pointer">ইপেপার</div>
                    <div class="px-3 py-1 border cursor-pointer">English</div>
                </div>
            </div>
            <HeaderDesktopSideMenu :desktopMenuStatus="desktopMenuStatus" />
        </div>

    </div>
</template>

<script setup>

const { scrollDown, counter } = defineProps(['scrollDown', 'LogoHeaderScollUp'])
// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
const todayDate = getDate.format(new Date())
// ================ Get Bangla Date ============== //
const img = useImage()

// ========== Desktop Sidebar menu Action Handler ============== //
const desktopMenuStatus = desktopMenuState()
const desktopMenuOpenHandler = () => {
    desktopMenuStatus.value = true
}
const desktopMenuCloseHandler = () => {
    desktopMenuStatus.value = false
}
// ========== Desktop Sidebar menu Action Handler ============== //

const searchStatus = ref(false)
const searchBoxHandler = () => {
    if (searchStatus.value === true) {
        searchStatus.value = false
    } else {
        searchStatus.value = true
    }
}

// ==================== Logo ====================
const siteConfig = useRuntimeConfig()
const siteSetting = useState(() => [])
const {data:siteSet} = await useFetch(`${siteConfig.public.apiUrl}/api/site-setting`,{
    method: 'GET'
})
siteSetting.value = siteSet
// ==================== Logo ====================
</script>

<style lang="scss" scoped></style>