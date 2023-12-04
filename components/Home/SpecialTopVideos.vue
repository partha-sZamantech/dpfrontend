<template>
    <div class="flex flex-col gap-1">
        <div>
            <iframe width="518" height="292"
                src="https://www.youtube.com/embed/rWdN3xUDdE8?enablejsapi=1&autoplay=1&mute=1&rel=0&showinfo=1&controls=1&loop=1&playlist={{$spTopFirstVideo->code}}"
                frameborder="0" allowfullscreen style="width: 100%!important;"></iframe>
            <!-- <iframe width="518" height="292" src="https://www.youtube.com/embed/{{$spTopFirstVideo->code}}?enablejsapi=1&autoplay=1&mute=1&rel=0&showinfo=1&controls=1&loop=1&playlist={{$spTopFirstVideo->code}}" frameborder="0" allowfullscreen style="width: 100%!important;"></iframe> -->

        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 md:place-items-center">
            <NuxtLink to="/" class="grid grid-cols-12 gap-4 items-center group border-b py-4 group">
                <Icon name="simple-icons:youtubemusic"
                    class=" col-span-2 md:col-span-3 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                <h4 class="text-[18px] col-span-10 md:col-span-9 group-hover:text-[#3375af]">মা দিবসের পেছনের
                    গল্প</h4>
            </NuxtLink>
            <NuxtLink to="/" class="grid grid-cols-12 gap-4 items-center group border-b py-4 group">
                <Icon name="simple-icons:youtubemusic"
                    class=" col-span-2 md:col-span-3 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                <h4 class="text-[18px] col-span-10 md:col-span-9 group-hover:text-[#3375af]">মা দিবসের পেছনের
                    গল্প</h4>
            </NuxtLink>
            <NuxtLink to="/" class="grid grid-cols-12 gap-4 items-center group border-b py-4 group">
                <Icon name="simple-icons:youtubemusic"
                    class=" col-span-2 md:col-span-3 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                <h4 class="text-[18px] col-span-10 md:col-span-9 group-hover:text-[#3375af]">মা দিবসের পেছনের
                    গল্প</h4>
            </NuxtLink>
            <NuxtLink to="/" class="grid grid-cols-12 gap-4 items-center group border-b py-4 group">
                <Icon name="simple-icons:youtubemusic"
                    class=" col-span-2 md:col-span-3 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                <h4 class="text-[18px] col-span-10 md:col-span-9 group-hover:text-[#3375af]">মা দিবসের পেছনের
                    গল্প</h4>
            </NuxtLink>

        </div>
    </div>
</template>

<script setup>
// =============== Special Top Video Fetching ====================//
    const specialVideoTop = useState(() => [])
    const {data:sptpvdo} = await useFetch('/api/home/specialvideotop', {
        method: "GET"
    })
    specialVideoTop.value = sptpvdo
    console.log(specialVideoTop.value)
// =============== Special Top Video Fetching ====================//

</script>

<style lang="scss" scoped></style>