<template>
    <div
        :class="`${globalPopupStatus ? 'fixed items-center justify-center inset-0 flex flex-col' : 'hidden'}}  bg-black bg-opacity-25`">
        <div :class="`${globalPopupStatus ? 'relative top-0' : 'relative -top-32'}  px-2 duration-300 globalPopup`">
            <div @click="globalPopupCloseHandler"
                class="absolute right-2 cursor-pointer bg-red-700 h-7 rounded-full bottom-0 -top-4">
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
    document.getElementsByClassName("globalPopup")[0].style.display = "none";
}
onMounted(() => {
    //======= Global Popup Open After page load ========//
    setTimeout(() => {
        globalPopupStatus.value = true
    }, 1);
    //======= Global Popup Close After 5 second ========//
    setTimeout(() => {
        if (globalPopupStatus.value === true) {
            globalPopupStatus.value = false
            document.getElementsByClassName("globalPopup")[0].style.display = "none";
        }

    }, 5000);
})
</script>

<style lang="scss" scoped></style>