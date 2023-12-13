<template>
    <div class="max-w-[1280px] mx-auto py-4 px-4 md:px-2">
        <div class="home-photo-gallery mb-4">
            <div class="category-header border-b-4 border-b-white">
                <NuxtLink to="/photo" class="flex gap-3 items-center">
                    <span class="w-4 h-4 bg-white"></span>
                    <h2 class="text-white text-[26px] font-semibold">ফটো গ্যালারি</h2>
                   
                </NuxtLink>
            </div>
        </div>
        <div class=" grid grid-cols-12 md:grid-rows-2 gap-4 md:gap-2 mb-6">
            <!-- First Item -->
            <div class="col-span-12 md:row-span-2 md:col-span-6 group image-box">
                <div class=" overflow-hidden">
                    <NuxtLink :to="`/photo/${gallerContents[0].category.cat_slug}/${gallerContents[0].album_id}`" class=" relative">
                        <nuxt-img
                            :src="`${siteurl.site_url}/media/photoAlbum/${gallerContents[0].album_details[0].img}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300 "
                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        <div class="overlay">
                            <b><p class="img-title text-white group-hover:text-[#ff0000] text-[30px]">{{ gallerContents[0].album_name }}</p></b>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <!-- First Item -->

            <!-- Looping -->
            <div class="col-span-12 md:col-span-3  group image-box" v-for="(gallerContent, aidx) in gallerContents.slice(1, 9)" :key="gallerContent.album_id">
                <div class=" overflow-hidden">
                    <NuxtLink :to="`/photo/${gallerContent.category.cat_slug}/${gallerContent.album_id}`" class=" relative">
                        <nuxt-img
                        :src="`${siteurl.site_url}/media/photoAlbum/${gallerContent.album_details[0].img}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300 "
                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        <div class="overlay">
                            <b><p class="img-title text-white group-hover:text-[#ff0000] text-[19px]">{{ gallerContent.album_name }}</p></b>
                        </div>
                    </NuxtLink>
                  
                </div>
            </div>
            <!-- Looping -->
           
          

        </div>
    </div>
</template>

<script setup>

const img = useImage()
const siteurl = siteUrlState()

// ======== Gallery Content =============== //
const gallerContents = useState(() => [])
const { data: hmgallery } = await useFetch("/api/home/homegallery", {
    method: 'GET'
})
// const { data: okss } = await useFetch("/api/prismaapi/home/gallery", {
//     method: 'GET'
// })
gallerContents.value = hmgallery


// ======== Gallery Content =============== //



</script>

<style scoped>
.overlay {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,rgba(255, 255, 255, 0) 40%, rgba(0, 0, 0, 0.7) 70%,rgba(0, 0, 0, 1) 100%);
    opacity: 0.9;
    top: 0;
}
.img-title {
    position: absolute;
    bottom: 10px;
    color: white;
    margin-left: 5%;
    margin-right: 5%;
}
.image-box:hover .overlay {
    background: linear-gradient(to bottom,rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.5) 70%,rgba(255, 255, 255, 1) 100%);
}
</style>