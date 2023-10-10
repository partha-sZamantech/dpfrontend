<template>
    <div class="py-2 md:px-0">
        <!-- Headline Component -->
        <Headline v-if="allHeadline?.length > 0" />
        <!--/ Headline Component -->
        <!-- Special Top Content Component -->
        <HomeSpecialTopContent />
        <!--/ Special Top Content Component -->

        <div class=" grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-9">
                <!-- Special Top Content Component -->
                <HomeSpecialBottomContent />
                <!--/ Special Top Content Component -->
                <!-- National Category Component -->
                <HomeCategoryNational />
                <!--/ National Category Component -->
                <!-- National Category Component -->
                <HomeCategoryPoliticsEconomyInternational />
                <!--/ National Category Component -->
            </div>

            <div class="col-span-12 md:col-span-3">
                <!-- Home Right Sidebar -->
                <HomePostTabs />
                <!--/ Home Right Sidebar -->
            </div>
        </div>

        <!-- Special Top Content Component -->
        <HomeCategorySpecialReport />
        <!--/ Special Top Content Component -->

        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-9">
                <!-- Sports Category Component -->
                <HomeCategorySports />
                <!--/ Sports Category Component -->
            </div>
            <div class="col-span-12 md:col-span-3">
                <!-- Saradesh Category Component -->
                <HomeCategorySaradesh />
                <!--/ Saradesh Category Component -->
            </div>
        </div>

    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const allHeadline = useState(() => [])
const { data: allhead } = await useFetch(`${config.public.apiUrl}/api/breaking-news`, {
    method: 'GET'
})
allHeadline.value = allhead


</script>

<style lang="scss" scoped></style>