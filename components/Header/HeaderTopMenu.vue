<template>
    <div
        :class="`${scrollDown ? 'fixed top-0 right-0 left-0 shadow-lg' : 'fixed right-0 left-0 '} hidden md:block shadow-lg shadow-gray-300 duration-300 bg-[#3375af]`">
        <div class="flex gap-3 items-center justify-center border-b">
            <ul class="flex gap-0 justify-center text-[18px] text-white mainmenu">
                <li>
                    <NuxtLink to="/"
                        class=" py-2 px-3 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                        <Icon name="material-symbols:house-rounded" class="text-xl" />
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="`/collection/latest`"
                        class="py-2 px-3 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                        সর্বশেষ</NuxtLink>
                </li>
                <li v-for="category in headCategory?.slice(0,11)" :key="category.cat_id">
                    <NuxtLink :to="`/${category.cat_slug}`"
                        class="py-2 px-3 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                        {{ category.cat_name_bn }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="`/video`"
                        class="py-2 px-3 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                        ভিজ্যুয়াল মিডিয়া</NuxtLink>
                </li>
            </ul>
            <div @click="dkdropdownToggle" class="flex gap-1 items-center justify-center text-white hover:bg-[#124d80] px-3 py-1 rounded-sm cursor-pointer" >
                <Icon name="dashicons:editor-justify" />
                <span>সব</span>
            </div>
            <a href="#" class="text-[#124d80] text-base bg-white px-2 py-[2px] rounded-sm">English</a>
            <a href="#" class="text-[#124d80] text-base bg-white px-2 py-[2px] rounded-sm">ই-পেপার</a>
        </div>
        <div :class="`max-w-[1280px] px-4 py-4 mx-auto ${dkdropdownStatus === true ? 'block' : 'hidden'}`">
            <div class="dropmenu grid grid-cols-6 gap-1 items-center justify-center text-white text-[18px]">
                <NuxtLink class="hover:pl-2 duration-300 py-2" v-for="dropmenuitem in headCategory?.slice(11,41)" :key="dropmenuitem.cat_id" :to="`/${dropmenuitem.cat_slug}`">
                    {{ dropmenuitem.cat_name_bn }} 
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const { scrollDown } = defineProps(['scrollDown'])

// const headCatconfig = useRuntimeConfig()
const headCategory = useState(() => [])
// const { data: headCat } = await useFetch(`${headCatconfig.public.apiUrl}/api/headercat`, {
//     method: 'GET'
// })
const { data: headCat } = await useFetch(`/api/prismaapi/header/headercategory`, {
    method: 'GET'
})
headCategory.value = headCat.value

const dkdropdownStatus = ref(false)
const dkdropdownToggle = () => {
    if(dkdropdownStatus.value == false){
        dkdropdownStatus.value = true
    }else{
        dkdropdownStatus.value = false
    }
}

</script>

<style scoped>
.mainmenu .router-link-active {
    background-color: #284f81;
    border-bottom: 2px solid #fff;
}
</style>