<template>
    <div>

        <Head>
            <Title>Dhaka Prokash</Title>
            <Meta content="500" http-equiv="refresh" />
        </Head>

        <div :class="`${LogoHeaderScollUp ? 'fixed  top-0 left-0 right-0' : '' } logoHeader duration-300`">
            <div class="header-container max-w-[1280px] mx-auto ">
                <!-- Top Header -->
                <HeaderTop :scrollDown="scrollDown" :LogoHeaderScollUp="LogoHeaderScollUp" />
                <!-- Mobile Header -->
                <!-- Top Header -->
                <HeaderTopMenu :scrollDown="scrollDown" :counter="counter" />
            </div>
        </div>
        <MobileHeaderTop />
        <div class="main-container max-w-[1280px] mx-auto ">

            <slot />

        </div>
        <FooterContent />
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

            // Scroll down
            LogoHeaderScollUp.value = false
            // const classes = document.getElementsByClassName("logoHeader")[0].style.display = "none";
            const classes = document.getElementsByClassName("logoHeader")[0]
            classes.classList.add('fixed', '-top-[117px]', 'left-0', 'right-0')
        }
        prevScrollPosition.value = currentScrollPosition.value

    })
    // ============= Scolling =============== //




})




</script>

<style lang="scss" scoped></style>