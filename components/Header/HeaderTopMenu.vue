<template>
    <div :class="`${scrollDown ? 'fixed top-0 right-0 left-0 shadow-lg' : ''} hidden md:block shadow-lg shadow-gray-300 duration-300 bg-[#3375af]`">
        <ul class="flex gap-1 justify-center text-[18px] text-white">
            <li v-for="category in headCategory" :key="category.cat_id">
                <NuxtLink :to="`/category/${category.cat_slug}`" class="py-2 px-3 block hover:text-red-700">{{ category.cat_name_bn }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const {scrollDown} = defineProps(['scrollDown'])

const headCatconfig = useRuntimeConfig()
const headCategory = useState(() => [])
const {data:headCat} = await useFetch(`${headCatconfig.public.apiUrl}/api/headercat`,{
    method: 'GET'
})
headCategory.value = headCat

</script>

<style lang="scss" scoped></style>