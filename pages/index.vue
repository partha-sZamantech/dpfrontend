<template>
    <div class="py-2 md:px-0">
        <Headline v-if="allHeadline?.length > 0"  />
        
        <!-- Start Special Content -->
        <HomeSpecialContent />
        <!-- Start Special Content -->


    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const allHeadline = useState(() => [])
const {data:allhead} = await useFetch(`${config.public.apiUrl}/api/breaking-news`,{
    method: 'GET'
})
allHeadline.value = allhead


</script>

<style lang="scss" scoped></style>