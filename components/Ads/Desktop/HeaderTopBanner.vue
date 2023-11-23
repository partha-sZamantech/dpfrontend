<template>
    <div class="ad-container py-2 border-b ">
        <div class="ad-img bg-[#f7f7f7]">
            <a href="http://www.facebook.com" target="_blank">
                <img class="mx-auto" src="/assets/img/bar-ads.gif" />
            </a>
        </div>
    </div>
</template>

<script setup>
    const {data:topbA} = await useFetch('/api/adsmanagement/getads', {
        method: "POST",
        body: {
            page: 1,
            position: 1
        }
    })
    console.log(topbA.value)
</script>

<style lang="scss" scoped>

</style>