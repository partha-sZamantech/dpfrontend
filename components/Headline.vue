<template>
    <ClientOnly>
        <div class=" border border-red-900">

            <div class="flex items-center gap-1">
                <div class="bg-red-900 md:w-[130px] w-[100px] px-2 border border-red-900 py-1">
                    <h2 class="text-[12px] md:text-[16px] text-white">প্রধান শিরোনাম </h2>
                </div>

                <marquee-text :duration="5" :paused="false" :reverse="false" class="flex-1" :repeat="1">
                    <div class="flex items-center gap-3">
                        <div class="breaking-headline flex items-center">
                            <span class="relative flex h-2 w-2">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span>Loream ip </span>
                        </div>
                        <div class="breaking-headline flex gap-1 items-center">
                            <span class="relative flex h-2 w-2">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span>Loream ip </span>
                        </div>
                    </div>
                </marquee-text>


            </div>


        </div>
    </ClientOnly>
</template>

<script setup>
import MarqueeText from 'vue-marquee-text-component'
// const {data:Headline} = await useFetch(`${config.public.apiUrl}/breaking-news`,{
//     method: 'GET'
// })

</script>

<style lang="scss" scoped></style>