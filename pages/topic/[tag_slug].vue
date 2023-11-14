<template>
   <div class="category-page">

      <Head>
         <Title>{{ tag_slug.replaceAll('-', ' ') }}</Title>
      </Head>
      <!-- Space For Ads -->
      <div class="category-ads-section border-b border-b-[#dee2e6] py-4 ">
         <div class="bg-[#f7f7f7]">
            <a target="_blank" href="/">
               <img class="mx-auto" src="/assets/img/bar-ads.gif" alt="">
            </a>
         </div>
      </div>
      <!-- Space For Ads -->
      <div class=" max-w-[1280px] mx-auto category-content px-4 md:px-2 py-4 relative">
         <!-- Breadcrump Section -->
         <div class="breadcrump border-b border-b-[#dee2e6] pb-2 mb-5 flex flex-col gap-2 md:gap-4">

            <div class="tag-title md:py-6 flex gap-3 items-center">
               <Icon name="bi:tags-fill" class="text-[#3375af] text-3xl" />
               <h1 class="text-xl md:text-3xl text-[#3375af] font-semibold">{{ tag_slug.replaceAll('-', ' ') }}</h1>
            </div>

         </div>
         <!--/ Breadcrump Section -->

         <div class="grid grid-cols-12 gap-8 md:gap-3">
            <div class="col-span-12 md:col-span-9 md:border-r md:pr-3">

               <!-- Loop Category Post Section -->
               <div class="category-post-list grid grid-cols-12">
                  <div class="col-span-2 hidden md:block"></div>
                  <div class="col-span-12 md:col-span-8">
                     <!-- Loop Item -->

                     <div class="cat-post-item py-4 border-b" v-for="(tagContent, cpInx) in tagContents" :key="cpInx">

                        <NuxtLink :to="`/category/${tagContent?.category?.cat_slug}/${tagContent?.content_id}`"
                           class=" grid grid-cols-12 gap-3 group">
                           <h3 class="cat-title col-span-12 text-[20px] group-hover:text-[#ff0000]">{{
                              tagContent?.content_heading }}</h3>
                           <div class=" col-span-7 flex flex-col gap-3">
                              <ClientOnly>
                                 <div class="cat-desc text-[#555555] text-[15px] font-[300]"
                                    v-html="`${tagContent?.content_details.substring(0, 160)}...`"></div>
                              </ClientOnly>

                              <span class="post-date flex flex-col gap-1">
                                 <small class="text-[#555555]">আপডেট: {{
                                    postCreatedDate(tagContent?.updated_at) }}</small>
                                 <small class="text-[#555555]">প্রকাশ: {{
                                    postCreatedDate(tagContent?.created_at) }}</small>
                              </span>
                           </div>
                           <div class=" col-span-5 category-post-image overflow-hidden">
                              <!-- <nuxt-img :src="`${siteurl.site_url}/media/content/images/${tagContent?.img_bg_path}`"
                                 class="mx-auto w-full group-hover:scale-110 duration-300"
                                 :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" /> -->
                              <nuxt-img :src="`${siteurl.site_url}/media/content/images/${tagContent?.img_bg_path}`"
                                 class="mx-auto w-full group-hover:scale-110 duration-300"
                                 :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />

                           </div>
                        </NuxtLink>
                     </div>

                     <!--/ Loop Item -->

                  </div>
                  <div class="col-span-2 hidden md:block"></div>
               </div>
               <div class="flex justify-center items-center" v-if="tagContents?.length > 9">
                  <button @click="loadMoreButtonHandler"
                     class="border border-[#dee2e6] text-[#3375af] px-8 py-2 rounded-sm mt-5 hover:border-[#3375af]"><b>আরও</b></button>
               </div>
               <!-- Loop Category Post Section -->
            </div>
            <div class=" col-span-12 md:col-span-3">
               <Tabs :class="`sticky ${stickyScroll ? ' top-44' : 'top-16'}`" />
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>

const img = useImage()
const siteurl = siteUrlState()

// Sticky Status
const singlePageSticky = singlePageStickyState()
const stickyScroll = computed(() =>
   singlePageSticky.value
)
// Get Tag Slug
const tag_slug = useRoute().params.tag_slug

// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric", hour: "numeric", minute: 'numeric' })
// const postDate = getDate.format(new Date(detailsContent.value.created_at)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
const postCreatedDate = (date) => {
    // If date value has
    if(date){
        return getDate.format(new Date(date)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
    }
}
// ================ Get Bangla Date ============== //

//================== Tag Content fetching =============== //

//Tag Content State
const tagContents = useState(() => [])
const take = ref(10)
const { data: tgcont } = await useFetch('/api/tag/tagcontent', {
   method: "POST",
   body: {
      tag_slug: tag_slug,
      take: take.value
   }
})
// Tag Content Assign
tagContents.value = tgcont
// console.log(tagContents.value)

//================== Tag Content fetching =============== //

//================ Load More Tag Content Button =================//
const loadMoreButtonHandler = async () => {
   take.value += 10
   const { data: tgMorecont } = await useFetch('/api/tag/tagcontent', {
      method: "POST",
      body: {
         tag_slug: tag_slug,
         take: take.value
      }
   })
   tagContents.value = tgMorecont
}
//================ Load More Tag Content Button =================//


</script>

<style scoped></style>