<template>
    <div>
        <Head>
            <Title>{{dsiteSetting?.title}}</Title>
            <Meta name="description" content="ঢাকা প্রকাশ বাংলাদেশসহ বিশ্বের সর্বশেষ সংবাদ শিরোনাম, প্রতিবেদন, বিশ্লেষণ, খেলা, বিনোদন, চাকরি, রাজনীতি ও বাণিজ্যের বাংলা নিউজ পড়তে ভিজিট করুন।" />
            <Meta name="Developed By" content="Dhaka Prokash Developer" />
            <Meta name="keywords" content="Dhaka Prokash, bangla news, current News, bangla newspaper, bangladesh newspaper, online paper, bangladeshi newspaper, bangla news paper, bangladesh newspapers, newspaper, all bangla news paper, bd news paper, news paper, bangladesh news paper, daily, bangla newspaper, daily news paper, bangladeshi news paper, bangla paper, all bangla newspaper, bangladesh news, daily newspaper, অনলাইন, পত্রিকা, বাংলাদেশ, আজকের পত্রিকা, আন্তর্জাতিক, অর্থনীতি, খেলা, বিনোদন, ফিচার, বিজ্ঞান ও প্রযুক্তি, চলচ্চিত্র, ঢালিউড, বলিউড, হলিউড, বাংলা গান, মঞ্চ, টেলিভিশন, নকশা, রস+আলো, ছুটির দিনে, অধুনা, স্বপ্ন নিয়ে, আনন্দ, অন্য আলো, সাহিত্য, গোল্লাছুট, প্রজন্ম ডট কম, বন্ধুসভা,কম্পিউটার, মোবাইল ফোন, অটোমোবাইল, মহাকাশ, গেমস, মাল্টিমিডিয়া, রাজনীতি, সরকার, অপরাধ, দুর্নীতি, আইন ও বিচার, পরিবেশ, দুর্ঘটনা, সংসদ, রাজধানী, শেয়ার বাজার, বাণিজ্য, পোশাক শিল্প, ক্রিকেট, ফুটবল, লাইভ স্কোর" />
            <Meta name="distribution" content="Global" />
            <Meta property="og:type" content="website" />
            <Meta property="og:site_name" content="ঢাকা প্রকাশ" />
            <Meta property="og:title" content="ঢাকা প্রকাশ | বাংলা নিউজ পেপার" />
            <Meta property="og:description" content="ঢাকা প্রকাশ বাংলাদেশসহ বিশ্বের সর্বশেষ সংবাদ শিরোনাম, প্রতিবেদন, বিশ্লেষণ, খেলা, বিনোদন, চাকরি, রাজনীতি ও বাণিজ্যের বাংলা নিউজ পড়তে ভিজিট করুন।" />
            <Meta name="twitter:title" content="ঢাকা প্রকাশ | বাংলা নিউজ পেপার" />
            <Meta name="twitter:description" content="ঢাকা প্রকাশ বাংলাদেশসহ বিশ্বের সর্বশেষ সংবাদ শিরোনাম, প্রতিবেদন, বিশ্লেষণ, খেলা, বিনোদন, চাকরি, রাজনীতি ও বাণিজ্যের বাংলা নিউজ পড়তে ভিজিট করুন।" />
            <Meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:domain" content="https://www.dhakaprokash24.com">
            <Meta name="twitter:site" content="@dhakaprokash24" />
            <Meta name="twitter:creator" content="ঢাকা প্রকাশ | বাংলা নিউজ পেপার" />
            <Meta property="fb:app_id" content="270848064771492" />
            <Meta property="fb:pages" content="100063660752112" />
            <Meta name="googlebot" content="index, follow" />
            <Meta name="robots" content="index, follow" />
            <Meta content="ALL" name="robots" />
            <!-- <Meta content="500" http-equiv="refresh" /> -->
            <!-- <Meta name="robots" content="index, follow" /> -->

        </Head>
        <!-- Header Top Ads Page=1, Position=1 -->
        <AdsDesktopCommonHeaderBannerTop v-if="topBannerAd?.status === 1" :topBannerAd="topBannerAd" />
        <div :class="`logoHeader duration-300 z-50`">
        <!-- <div :class="`${LogoHeaderScollUp ? 'fixed  top-0 left-0 right-0' : '' } logoHeader duration-300`"> -->
            <!-- <div class="header-container max-w-[1280px] mx-auto "> -->
                <!-- Top Header -->
                <HeaderTop :scrollDown="scrollDown" :LogoHeaderScollUp="LogoHeaderScollUp" />
                <!-- Mobile Header -->
                <!-- Top Header -->
                <HeaderTopMenu :scrollDown="scrollDown"  />
            <!-- </div> -->
        </div>
        <MobileHeaderTop />
        <div class="main-container duration-900 mt-4 md:mt-0">

            <slot />
            <FooterContent />
        </div>
       
        <!-- Footer Ads Sticky -->
    <AdsDesktopCommonFooterStickyAds v-if="footerAds?.status === 1" :footerAds="footerAds" />
        <!-- Footer Ads Sticky -->
    </div>
    <!-- Global Popup -->
    <!-- <PopupGlobal /> -->
    <!-- Global Popup -->
</template>

<script setup>

// ==================== Title & Favicon ====================
const DsiteConfig = useRuntimeConfig()
const dsiteSetting = useState(() => [])
//============ Header Top Advertisement

const {data:dsiteSet} = await useFetch(`${DsiteConfig.public.apiUrl}/api/site-setting`,{
    method: 'GET'
})
dsiteSetting.value = dsiteSet
// ==================== Title & Favicon ====================

useHead({
    bodyAttrs: {
        id: "bodyWrapper"
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: DsiteConfig.public.apiUrl+'/media/common/favicon.png'
        }
    ]
})
const { isDesktop } = useDevice();
const prevScrollPosition = ref(0)
const currentScrollPosition = ref(0)
const LogoHeaderScollUp = ref(false)
const scrollDown = ref(false)
const scrollPostion = ref(120)

 const detailPageSticky = singlePageStickyState()


onMounted(() => {
    // counter.value = document.getElementsByTagName('body')[0].scrollHeight 

    if(isDesktop){

        // ============== Desktop ===================
        prevScrollPosition.value = window.scrollY
        // ============= Scolling ===============
        window.addEventListener("scroll", function () {
            // counter.value = document.documentElement.clientHeight - document.documentElement.scrollTop
            // counter.value = counter.value - document.documentElement.scrollTop

            currentScrollPosition.value = window.scrollY

            if (document.documentElement.scrollTop >= scrollPostion.value) {
                scrollDown.value = true

            } else {
                scrollDown.value = false
                // const adsBottomStatus = ref(false)
            }

            if (prevScrollPosition.value > currentScrollPosition.value) {
                // Scroll Up
                scrollDown.value = false
                LogoHeaderScollUp.value = true
                // const classes = document.getElementsByClassName("logoHeader")[0].style.display = "none";
                const classes = document.getElementsByClassName("logoHeader")[0]
                classes.classList.remove('fixed', '-top-[117px]', 'left-0', 'right-0')
                classes.classList.add('fixed', '-top-0', 'left-0', 'right-0')
                

                // Blog Detail page
                detailPageSticky.value = true

            } else {
                
                // Scroll down
                LogoHeaderScollUp.value = false
                // const classes = document.getElementsByClassName("logoHeader")[0].style.display = "none";
                const classes = document.getElementsByClassName("logoHeader")[0]
                classes.classList.add('fixed', '-top-[117px]', 'left-0', 'right-0')

                document.getElementsByClassName("main-container")[0].style.marginTop  = "160px";

                // Blog Detail page
                detailPageSticky.value = false
                
            }
            prevScrollPosition.value = currentScrollPosition.value
           
        
        })
        // ============= Scolling =============== //
        // ============== Desktop ===================

    }

})

// ==================== All Category ====================
const catConfig = useRuntimeConfig()
const allCategory = allCategoryState()
const {data:cats} = await useFetch(`${catConfig.public.apiUrl}/api/allcat`,{
    method: 'GET'
})
allCategory.value = cats
// ==================== Logo ====================

//============= Header Banner Top Ads ===========//
const topBannerAd = ref(null)
const { data: topbA } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 1,
        position: 1
    }
})
topBannerAd.value = topbA.value
//============= Header Banner Top Ads ===========//
//============= Header Banner Top Ads ===========//
const footerAds = ref(null)
const { data: fAds } = await useFetch('/api/adsmanagement/getads', {
    method: "POST",
    body: {
        page: 1,
        position: 3
    }
})
footerAds.value = fAds.value
//============= Header Banner Top Ads ===========//


</script>

<style lang="scss" scoped></style>