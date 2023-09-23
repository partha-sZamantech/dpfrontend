<template>
    <div :class="`${globalPopupStatus ? 'fixed items-center justify-center inset-0 flex flex-col' : 'hidden'}}  bg-black bg-opacity-25`">
        <div :class="`${globalPopupStatus ? ' top-0' : '-top-32'} popup relative px-2 duration-300`">
            <div @click="globalPopupCloseHandler" class="absolute right-2 cursor-pointer bg-red-700 h-7 rounded-full bottom-0 -top-4">
                <Icon name="material-symbols:close" class="text-3xl px-1 text-white" />
            </div>
            <img src="/assets/img/popup.png" class="max-w-full" />
        </div>
    </div>
</template>

<script setup>
//==== Global Ads Popup State =====//
const globalPopupStatus = globalPopupState()

const globalPopupCloseHandler = () => {
    globalPopupStatus.value = false
}

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

    //======= Global Popup Open After page load ========//
    setTimeout(() => {
        globalPopupStatus.value = true
    }, 1);
    //======= Global Popup Close After 5 second ========//
    setTimeout(() => {
        if(globalPopupStatus.value === true){
            globalPopupStatus.value = false
        }
    }, 5000);

    
})
</script>

<style lang="scss" scoped>

</style>