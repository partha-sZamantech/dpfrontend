<template>
    <div class="py-2 md:px-0">
        <!-- Headline Component -->
        <Headline v-if="allHeadline?.length > 0"  />
        <!--/ Headline Component -->
        <!-- Special Top Content Component -->
        <HomeSpecialTopContent />
        <!--/ Special Top Content Component -->

        <!-- Special Top Content Component -->
        <HomeSpecialBottomContent />
        <!--/ Special Top Content Component -->
        

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