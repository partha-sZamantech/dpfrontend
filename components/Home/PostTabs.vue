<template>
    <div class="home-post-tabs border border-t-2 border-t-[#124d80] my-4 ">
        <div class="grid grid-cols-2 text-[17px] text-center">
            <div v-if="isActiveStatus === false" :class="`bg-[#3375af] text-white py-1`">সর্বশেষ</div>
            <div v-else @click="tabToggleHandler" :class="`hover:bg-[#3375af] hover:text-white cursor-pointer py-1`">সর্বশেষ
            </div>

            <div v-if="isActiveStatus === true" :class="`bg-[#3375af] text-white py-1`">
                সর্বাধিক পঠিত
            </div>
            <div v-else @click="tabToggleHandler" :class="`hover:bg-[#3375af] hover:text-white cursor-pointer py-1`">
                সর্বাধিক পঠিত
            </div>
        </div>

        <!-- Latest Post -->
        <div v-if="isActiveStatus === false" class="latest-post px-3 h-[240px] overflow-y-auto">
            <NuxtLink :to="`/category/${latstpost?.category?.cat_slug}/${latstpost?.content_id}`"
                class="grid grid-cols-12 gap-3 group border-b py-3 latest-post-loop" v-for="latstpost in latestposts"
                :key="latstpost?.content_id">
                <div class="latest-post-tab-image col-span-4 overflow-hidden">
                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${latstpost?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                </div>
                <div class="tab-latast-post-title col-span-8">
                    <h4 class="text-[17px] group-hover:text-[#ff0000]">{{ latstpost?.content_heading }}</h4>
                </div>
            </NuxtLink>

        </div>
        <!--/ Latest Post -->
        <!-- Popular Post -->
        <div v-else class="latest-post px-3 h-[240px] overflow-y-auto">
            <NuxtLink :to="`/category/${poplarpost?.category?.cat_slug}/${poplarpost?.content_id}`"
                class="grid grid-cols-12 gap-3 group border-b py-3 latest-post-loop" v-for="poplarpost in popularposts"
                :key="poplarpost?.content_id">
                <div class="latest-post-tab-image col-span-4 overflow-hidden">
                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${poplarpost?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                </div>
                <div class="tab-latast-post-title col-span-8">
                    <h4 class="text-[17px] group-hover:text-[#ff0000]">{{ poplarpost?.content_heading }}</h4>
                </div>
            </NuxtLink>
       
        </div>
        <!--/ Popular Post -->
    </div>
</template>

<script setup>
const img = useImage()
const isActiveStatus = ref(false)
const tabToggleHandler = () => {
    if (isActiveStatus.value === true) {
        isActiveStatus.value = false
    } else {
        isActiveStatus.value = true
    }
}

const siteurl = siteUrlState()

// ======== Latest Posts Content =============== //
const latestposts = useState(() => [])
const { data: latpost } = await useFetch(`/api/home/latestposts`, {
    method: 'GET'
})
latestposts.value = latpost
// ======== Latest Posts Content =============== //

// ======== Popular Posts Content =============== //
const popularposts = useState(() => [])
const { data: hplpost } = await useFetch(`/api/home/popularposts`, {
    method: 'GET'
})
popularposts.value = hplpost
// ======== Popular Posts Content =============== //

</script>

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #ddd;
}

/* Handle */
::-webkit-scrollbar-thumb {
    /* background: #c9c3c3; */
    background: #3375af;
    border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #bdb8b8;
}</style>