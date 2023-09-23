<template>
    <div>
        <Head>
            <Title>Dhaka Prokash</Title>
            <Meta content="500" http-equiv="refresh" />
        </Head>
        <div class="main-container max-w-[1280px] mx-auto ">

            <!-- Top Header -->
            <HeaderTop :scrollDown="scrollDown" />
            <!-- Mobile Header -->
            <MobileHeaderTop />

            <!-- Top Header -->
            <HeaderTopMenu :scrollDown="scrollDown" />
            <slot />
            <FooterContent />
            
        </div>
        <AdverstmentFooterStickyAds/>
    </div>
</template>

<script setup>
useHead({
    bodyAttrs: {
        id: "bodyWrapper"
    }
})

const scrollDown = ref(false)
const scrollPostion = ref(120)

onMounted(() => {
    // ============= Scolling ===============
    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop >= scrollPostion.value) {
            scrollDown.value = true
            adsBottomStatus.value = true
        }
        else {
            scrollDown.value = false
            // const adsBottomStatus = ref(false)
        }
    })
    // ============= Scolling ===============
})


</script>

<style lang="scss" scoped></style>