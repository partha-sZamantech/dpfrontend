<template>
    <div>

        <Head>
            <Title>Dhaka Prokash</Title>
            <Meta content="500" http-equiv="refresh" />
        </Head>
        <div class="main-container max-w-[1280px] mx-auto ">


            <!-- Top Header -->
            <HeaderTop :scrollDown="scrollDown" :LogoHeaderScollUp="LogoHeaderScollUp" />
            <!-- Mobile Header -->
            <MobileHeaderTop />

            <!-- Top Header -->
            <HeaderTopMenu :scrollDown="scrollDown" :counter="counter" />
            <slot />
            <FooterContent />

        </div>
        <!-- Footer Ads Sticky -->
        <AdverstmentFooterStickyAds />
        <!-- Footer Ads Sticky -->
    </div>
    <!-- Global Popup -->
    <PopupGlobal />
    <!-- Global Popup -->
</template>

<script setup>
useHead({
    bodyAttrs: {
        id: "bodyWrapper"
    }
})

const prevScrollPosition = ref(0)
const currentScrollPosition = ref(0)
const LogoHeaderScollUp = ref(false)
const scrollDown = ref(false)
const scrollPostion = ref(120)


onMounted(() => {
    // counter.value = document.getElementsByTagName('body')[0].scrollHeight 

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
        
        } else {
            scrollDown.value = true
            // Scroll down
            LogoHeaderScollUp.value = false
        }
        prevScrollPosition.value = currentScrollPosition.value

    })
    // ============= Scolling =============== //




})




</script>

<style lang="scss" scoped></style>