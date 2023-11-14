<template>
    <div class="home-page">
        <div class="py-2 md:px-2 max-w-[1280px] mx-auto px-4">
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
                    <HomePostTabs  />
                    <!-- <Tabs /> -->
                    <!--/ Home Right Sidebar -->
                </div>
            </div>

            <!-- Special Top Content Component -->
            <HomeCategorySpecialReport />
            <!--/ Special Top Content Component -->

            <div class="grid grid-cols-12 gap-4 mb-6">
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

            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-9">
                    <!-- Sports Category Component -->
                    <HomeCategoryEntertainment />
                    <!--/ Sports Category Component -->
                </div>
                <div class="col-span-12 md:col-span-3">
                    <!-- Saradesh Category Component -->
                    <HomeCategoryLifestyle />
                    <!--/ Saradesh Category Component -->
                </div>
            </div>
        </div>

        <!-- English Content Area -->
        <div class="english-content-except bg-[#fff4e6] my-6">
            <!-- English Component -->
            <HomeEnglishContent />
            <!-- English Component -->
        </div>
        <!-- English Content Area -->

        <div class="py-2 md:px-2 max-w-[1280px] mx-auto px-4">

            <div class=" grid grid-cols-12 gap-6">
                <div class=" col-span-12 md:col-span-9">
                    <!-- Law Court Component -->
                    <HomeCategoryLawCourt />
                    <!-- Law Court Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Crime Component -->
                    <HomeCategoryCrime />
                    <!-- Crime Component -->
                </div>
            </div>

            <div class=" grid grid-cols-12 gap-6 py-4">
                <div class=" col-span-12 md:col-span-6">
                    <!-- Technology Component -->
                    <HomeCategoryTechnology />
                    <!-- Technology Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Career Component -->
                    <HomeCategoryCareer />
                    <!-- Career Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Campus Component -->
                    <HomeCategoryCampus />
                    <!-- Campus Component -->
                </div>
            </div>


            <div class=" grid grid-cols-12 gap-6 py-4">
                <div class=" col-span-12 md:col-span-3">
                    <!-- Art Culture Component -->
                    <HomeCategoryArtCulture />
                    <!-- Art Culture Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Health Component -->
                    <HomeCategoryHealth />
                    <!-- Health Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Education Component -->
                    <HomeCategoryEducation />
                    <!-- Education Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Religion Component -->
                    <HomeCategoryReligion />
                    <!-- Religion Component -->
                </div>
            </div>

            <div class=" grid grid-cols-12 gap-6 py-4">
                <div class=" col-span-12 md:col-span-3">
                    <!-- Child Adolescent Component -->
                    <HomeCategoryChildAdolescent />
                    <!-- Child Adolescent Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Motivation Component -->
                    <HomeCategoryMotivation />
                    <!-- Motivation Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Probash Component -->
                    <HomeCategoryProbash />
                    <!-- Probash Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Corporate Component -->
                    <HomeCategoryCorporate />
                    <!-- Corporate Component -->
                </div>
            </div>

            <div class=" grid grid-cols-12 gap-6 py-4">
                <div class=" col-span-12 md:col-span-6">
                    <!-- Literature Component -->
                    <HomeCategoryLiterature />
                    <!-- Literature Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Opinion Component -->
                    <HomeCategoryOpinion />
                    <!-- Opinion Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Special Article Component -->
                    <HomeCategorySpecialArticle />
                    <!-- Special Article Component -->
                </div>
            </div>
        </div>


        <!-- Gallery Content Area -->
        <div class="english-content-except bg-[#00427A] my-6 text-white">
            <!-- Gallery Component -->
            <HomeGallery />
            <!-- Gallery Component -->
        </div>
        <!-- Gallery Content Area -->


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