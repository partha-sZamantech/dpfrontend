<template>
    <div>
        <img class="ok" :src="newss" alt="">
    </div>
</template>

<script setup>

import { ImageWatermark } from 'watermark-js-plus' // import watermark plugin
const newss = ref('')
const {data:ok} = await useFetch('/api/prismaapi/ogimage/ogimage', {
    method:"GET"
})
newss.value = ok.value


// onBeforeMount(() => {
//     const imgDom = document.querySelector('.ok');

//     const watermark = new ImageWatermark({
//         contentType: 'image',
//         image: '/assets/img/og-common.png',
//         imageWidth: imgDom.width,
//         width: imgDom.width,
//         height: imgDom.height,
//         dom: imgDom,
//         rotate: 0,
//         translatePlacement: 'bottom-end'
//     }).create()
//     console.log(watermark)

// })

</script>

<style lang="scss" scoped></style>