<template>
    <div class="home-page">
        <!-- Home Middle Top Ads -->
        <div v-if="homeMiddleAds.status === 1" class="py-4 border-b border-b-[#e2e2e2] mt-6 md:mt-0">
            <AdsDesktopHomeMiddleTop :homeMiddleAds="homeMiddleAds" />
        </div>
        <!-- Home Middle Top Ads -->
        <div class="py-2 md:px-2 max-w-[1280px] mx-auto px-4">
            <!-- Headline Component -->
            <Headline v-if="allHeadline?.length > 0" />
            <!--/ Headline Component -->
            <!-- Special Top Content Component -->
            <HomeSpecialTopContent />
            <!--/ Special Top Content Component -->

            <div class=" grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-9">
                    <!-- Home Middle One Ads -->
                    <div v-if="homeMiddleOneAds.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeMiddleOne :homeMiddleOneAds="homeMiddleOneAds" />
                    </div>
                    <!-- Home Middle One Ads -->
                    <!-- Special Top Content Component -->
                    <HomeSpecialBottomContent />
                    <!--/ Special Top Content Component -->
                    <!-- Home Middle Two Ads -->
                    <div v-if="homeMiddleTwoAds.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeMiddleTwo :homeMiddleTwoAds="homeMiddleTwoAds" />
                    </div>
                    <!-- Home Middle Two Ads -->
                    <!-- National Category Component -->
                    <HomeCategoryNational />
                    <!--/ National Category Component -->
                    <!-- Home Middle Three Ads -->
                    <div v-if="homeMiddleThreeAds.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeMiddleThree :homeMiddleThreeAds="homeMiddleThreeAds" />
                    </div>
                    <!-- Home Middle Three Ads -->
                    <!-- National Category Component -->
                    <HomeCategoryPoliticsEconomyInternational />
                    <!--/ National Category Component -->
                    <!-- Home Middle Four Ads -->
                    <div v-if="homeMiddleFourAds.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeMiddleFour :homeMiddleFourAds="homeMiddleFourAds" />
                    </div>
                    <!-- Home Middle Four Ads -->
                </div>

                <div class="col-span-12 md:col-span-3">
                    <!-- Home Right One Ads -->
                    <div v-if="homeRightOneAds.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeRightOne :homeRightOneAds="homeRightOneAds" />
                    </div>
                    <!-- Home Right One Ads -->
                    <!-- Home Right Two Ads -->
                    <div v-if="homeRightTwoAds.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeRightTwo :homeRightTwoAds="homeRightTwoAds" />
                    </div>
                    <!-- Home Right Two Ads -->
                    <!-- Home Right Sidebar -->
                    <HomePostTabs />
                    <!-- <Tabs /> -->
                    <!--/ Home Right Sidebar -->
                    <!-- Home Right Three Ads -->
                    <div v-if="homeRightThreeAds.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeRightThree :homeRightThreeAds="homeRightThreeAds" />
                    </div>
                    <!-- Home Right Three Ads -->
                    <!-- Home Right Four Ads -->
                    <div v-if="homeRightFourAds.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeRightFour :homeRightFourAds="homeRightFourAds" />
                    </div>
                    <!-- Home Right Four Ads -->
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
            <!-- Home Middle Five Ads -->
            <div v-if="homeMiddleFiveAds.status === 1" class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                <AdsDesktopHomeMiddleFive :homeMiddleFiveAds="homeMiddleFiveAds" />
            </div>
            <!-- Home Middle Five Ads -->
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
        <!-- Home Middle Six Ads -->
        <div v-if="homeMiddleSixAds.status === 1" class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
            <AdsDesktopHomeMiddleSix :homeMiddleSixAds="homeMiddleSixAds" />
        </div>
        <!-- Home Middle Six Ads -->
        <!-- English Content Area -->
        <div class="english-content-except bg-[#fff4e6] my-6">
            <!-- English Component -->
            <HomeEnglishContent />
            <!-- English Component -->
        </div>
        <!-- English Content Area -->
        <!-- Home Middle Seven Ads -->
        <div v-if="homeMiddleSevenAds.status === 1" class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
            <AdsDesktopHomeMiddleSeven :homeMiddleSevenAds="homeMiddleSevenAds" />
        </div>
        <!-- Home Middle Seven Ads -->
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

            <!-- Home Middle Eight Ads -->
            <div v-if="homeMiddleEightAds.status === 1"
                class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                <AdsDesktopHomeMiddleEight :homeMiddleEightAds="homeMiddleEightAds" />
            </div>
            <!-- Home Middle Eight Ads -->
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
        <!-- Home Nine Eight Ads -->
        <div v-if="homeMiddleNineAds.status === 1" class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
            <AdsDesktopHomeMiddleNine :homeMiddleNineAds="homeMiddleNineAds" />
        </div>
        <!-- Home Nine Eight Ads -->

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

//========== Home Page Middle Top Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleAds = useState(() => '')
const { data: hmads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 1
    }
})
homeMiddleAds.value = hmads.value
//========== Home Page Middle Top Ads ==========//

//========== Home Page Middle One Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleOneAds = useState(() => '')
const { data: hmoneads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 2
    }
})
homeMiddleOneAds.value = hmoneads.value
//========== Home Page Middle One Ads ==========//

//========== Home Page Middle Two Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleTwoAds = useState(() => '')
const { data: hmtwoads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 3
    }
})
homeMiddleTwoAds.value = hmtwoads.value
//========== Home Page Middle Two Ads ==========//

//========== Home Page Middle Three Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleThreeAds = useState(() => '')
const { data: hmthreeads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 4
    }
})
homeMiddleThreeAds.value = hmthreeads.value
//========== Home Page Middle Three Ads ==========//

//========== Home Page Middle Four Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleFourAds = useState(() => '')
const { data: hmfourads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 5
    }
})
homeMiddleFourAds.value = hmfourads.value
//========== Home Page Middle Four Ads ==========//

//========== Home Page Middle Five Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleFiveAds = useState(() => '')
const { data: hmfiveads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 6
    }
})
homeMiddleFiveAds.value = hmfiveads.value
//========== Home Page Middle Five Ads ==========//

//========== Home Page Middle Six Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleSixAds = useState(() => '')
const { data: hmsixads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 7
    }
})
homeMiddleSixAds.value = hmsixads.value
//========== Home Page Middle Six Ads ==========//

//========== Home Page Middle Seven Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleSevenAds = useState(() => '')
const { data: hmsevenads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 8
    }
})
homeMiddleSevenAds.value = hmsevenads.value
//========== Home Page Middle Seven Ads ==========//

//========== Home Page Middle Eight Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleEightAds = useState(() => '')
const { data: hmeightads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 9
    }
})
homeMiddleEightAds.value = hmeightads.value
//========== Home Page Middle Seven Ads ==========//

//========== Home Page Nine Eight Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleNineAds = useState(() => '')
const { data: hmninetads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 10
    }
})
homeMiddleNineAds.value = hmninetads.value
//========== Home Page Middle Seven Ads ==========//

//========== Home Page Right One Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeRightOneAds = useState(() => '')
const { data: hmnroneads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 11
    }
})
homeRightOneAds.value = hmnroneads.value
//========== Home Page Right One Ads ==========//

//========== Home Page Right Two Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeRightTwoAds = useState(() => '')
const { data: hmnrtwoads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 12
    }
})
homeRightTwoAds.value = hmnrtwoads.value
//========== Home Page Right Two Ads ==========//

//========== Home Page Right Three Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeRightThreeAds = useState(() => '')
const { data: hmnrthreeads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 13
    }
})
homeRightThreeAds.value = hmnrthreeads.value
//========== Home Page Right Three Ads ==========//

//========== Home Page Right Four Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeRightFourAds = useState(() => '')
const { data: hmnrfourads } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 2,
        position: 14
    }
})
homeRightFourAds.value = hmnrfourads.value
//========== Home Page Right Four Ads ==========//


</script>

<style lang="scss" scoped></style>