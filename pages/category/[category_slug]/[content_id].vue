<template>
    <div class=" max-w-[1280px] mx-auto detail-page px-2 py-4">
        <div class="breadcrump border-b pb-1 mb-5">
            <div class="flex gap-1 justify-start items-center">

                <NuxtLink to="/">
                    <Icon class="text-xl" name="material-symbols:house-rounded" />
                </NuxtLink>
                <Icon name="ic:outline-keyboard-arrow-right" />
                <NuxtLink :to="`/${detailsContent?.category?.cat_slug}`">
                    {{ detailsContent?.category?.cat_name_bn }}
                </NuxtLink>

                <Icon v-if="detailsContent?.subcategory" name="ic:outline-keyboard-arrow-right" />
                <NuxtLink v-if="detailsContent?.subcategory" :to="`/`">
                    {{ detailsContent?.subcategory?.subcat_name_bn }}
                </NuxtLink>

            </div>
        </div>
        <div class=" grid grid-cols-12 gap-4 relative">
            <div class=" col-span-9">
                <div class="single-post flex flex-col gap-3">
                    <div class="singlePost-heading flex flex-col gap-2">
                        <h4 v-if="detailsContent?.content_sub_heading" class="text-[20px] text-[#ff0000]">{{ detailsContent?.content_sub_heading }}</h4>
                        <h2 class="md:text-[32px] md:leading-[50px]">{{ detailsContent.content_heading }}</h2>
                        <div class="h-2 w-12 rounded-md bg-[#3375af]"></div>
                    </div>

                    <div class="flex justify-between items-end border-b pb-3">
                        <div class="author-details flex flex-col gap-1" v-if="authors?.length > 0">
                            <p v-for="(author, auidx) in authors" :key="auidx">
                                <NuxtLink to="/">{{author.author_name_bn}}</NuxtLink>
                            </p>
                            <p>প্রকাশ: <ClientOnly><span>{{ postDate }}</span></ClientOnly></p>
                        </div>
                        <div class="social-item flex gap-2 items-start justify-center">
                            <NuxtLink to="/">
                                <svg class=" hover:scale-125 duration-200" xmlns="http://www.w3.org/2000/svg" height="28"
                                    width="28" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                                    <path fill="#1877F2"
                                        d="M16,0L16,0c8.837,0,16,7.163,16,16l0,0c0,8.837-7.163,16-16,16l0,0C7.163,32,0,24.837,0,16l0,0 C0,7.163,7.163,0,16,0z">
                                    </path>
                                    <path fill="#FFFFFF"
                                        d="M18,17.5h2.5l1-4H18v-2c0-1.03,0-2,2-2h1.5V6.14C21.174,6.097,19.943,6,18.643,6C15.928,6,14,7.657,14,10.7 v2.8h-3v4h3V26h4V17.5z">
                                    </path>
                                </svg>
                            </NuxtLink>
                            <NuxtLink to="/">
                                <svg class=" hover:scale-125 duration-200" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" height="28"
                                    width="28">
                                    <circle fill="#0F1419" cx="12" cy="12" r="12"></circle>
                                    <path fill="#FFFFFF" d="M15.531,7h1.662l-3.63,4.236L17.833,17h-3.343l-2.62-3.495L8.876,17H7.212l3.882-4.531L7,7h3.427
l2.366,3.195L15.531,7z M14.947,15.986h0.92L9.926,7.962H8.937L14.947,15.986z"></path>
                                </svg>
                            </NuxtLink>
                            <NuxtLink to="/">
                                <svg class=" hover:scale-125 duration-200" height="28" width="28"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"
                                    xml:space="preserve">
                                    <path fill="#595959"
                                        d="M16,0L16,0c8.837,0,16,7.163,16,16l0,0c0,8.837-7.163,16-16,16l0,0C7.163,32,0,24.837,0,16l0,0 C0,7.163,7.163,0,16,0z">
                                    </path>
                                    <path fill="#FFFFFF"
                                        d="M12,20h8v4h-8V20z M21.6,22.4v-4H10.4v4H8.8c-0.212,0-0.416-0.084-0.566-0.234C8.084,22.016,8,21.812,8,21.6 v-8c0-0.212,0.084-0.416,0.234-0.566C8.384,12.884,8.588,12.8,8.8,12.8h14.4c0.212,0,0.416,0.084,0.566,0.234 C23.916,13.184,24,13.388,24,13.6v8c0,0.212-0.084,0.416-0.234,0.566c-0.15,0.15-0.353,0.234-0.566,0.234H21.6z M10.4,14.4V16h2.4 v-1.6H10.4z M12,8h8c0.212,0,0.416,0.084,0.566,0.234C20.716,8.384,20.8,8.588,20.8,8.8v2.4h-9.6V8.8 c0-0.212,0.084-0.416,0.234-0.566C11.584,8.084,11.788,8,12,8z">
                                    </path>
                                </svg>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="feature-image border-b">
                        <nuxt-img
                            :src="`${siteurl.site_url}/media/content/images/${detailsContent?.img_bg_path}`"
                            class="mx-auto w-full"
                            :placeholder="img('https://www.dhaka prokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                        <p v-if="detailsContent?.img_bg_caption" class="feature-image-capture text-center py-2">{{ detailsContent?.img_bg_caption }}</p>
                    </div>
                    <div class="singlePost-details mx-auto w-[620px]">
                        <div class="postdetails text-[18px] text-gray-700" v-html="detailsContent?.content_details"></div>
                    </div>
                </div>
            </div>
            <div class=" col-span-3">

                <div :class="`flex flex-col gap-2 sticky ${stickyScroll ? ' top-40' : 'top-14'} `">
                    <div class=" border-b-[3px] border-[#3375af] pb-1">
                        <h3 class="text-[#3375af] text-[18px] font-[600]">এই বিভাগের আরও</h3>
                    </div>
                    <div class="detail-page-category-content-exept flex flex-col">
                        <!-- Loop Item -->
                        <div class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4">
                            <div class=" col-span-5 overflow-hidden">
                                <NuxtLink to="/">
                                    <nuxt-img
                                        :src="`http://127.0.0.1:8000/media/content/images/2023September/indiavspakistan-dp-20230902133542.jpg`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                </NuxtLink>
                            </div>
                            <div class=" col-span-7">
                                <NuxtLink :to="`/`">
                                    <h4 class="text-[16px] leading-tight group-hover:text-[#ff0000]">এশিয়া কাপের হাই ভোল্টেজ
                                        ম্যাচে ভারত-পাকিস্তান মহারণ আজ</h4>
                                </NuxtLink>
                            </div>
                        </div>
                        <!--/ Loop Item -->

                        <!-- Loop Item -->
                        <div class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4">
                            <div class=" col-span-5 overflow-hidden">
                                <NuxtLink to="/">
                                    <nuxt-img
                                        :src="`http://127.0.0.1:8000/media/content/images/2023September/indiavspakistan-dp-20230902133542.jpg`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                </NuxtLink>
                            </div>
                            <div class=" col-span-7">
                                <NuxtLink :to="`/`">
                                    <h4 class="text-[16px] leading-tight group-hover:text-[#ff0000]">এশিয়া কাপের হাই ভোল্টেজ
                                        ম্যাচে ভারত-পাকিস্তান মহারণ আজ</h4>
                                </NuxtLink>
                            </div>
                        </div>
                        <!--/ Loop Item -->

                        <!-- Loop Item -->
                        <div class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4">
                            <div class=" col-span-5 overflow-hidden">
                                <NuxtLink to="/">
                                    <nuxt-img
                                        :src="`http://127.0.0.1:8000/media/content/images/2023September/indiavspakistan-dp-20230902133542.jpg`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img('https://www.dhaka prokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                                </NuxtLink>
                            </div>
                            <div class=" col-span-7">
                                <NuxtLink :to="`/`">
                                    <h4 class="text-[16px] leading-tight group-hover:text-[#ff0000]">এশিয়া কাপের হাই ভোল্টেজ
                                        ম্যাচে ভারত-পাকিস্তান মহারণ আজ</h4>
                                </NuxtLink>
                            </div>
                        </div>
                        <!--/ Loop Item -->

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
// import moment from 'moment';
const siteurl = siteUrlState()
const img = useImage()
const singlePageSticky = singlePageStickyState()
const stickyScroll = computed(() =>
    singlePageSticky.value
)
const category_slug = useRoute().params.category_slug
const content_id = useRoute().params.content_id
// const postDetails = useState(() => [])
const detailsContent = useState(() => [])
const authors = useState(() => [])
const {data:pdailts} = await useFetch('/api/detailpage/detail', {
    method: 'POST',
    body: {
        category_slug: category_slug,
        content_id: content_id
    }
})
detailsContent.value = pdailts.value.detailsContent
authors.value = pdailts.value.authors
// moment.locale('bn-bd')
// const date = moment(detailsContent.value.created_at).format('Y', 'bn-bd')
// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric", hour: "numeric", minute: 'numeric'})
const postDate = getDate.format(new Date(detailsContent.value.created_at)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
// ================ Get Bangla Date ============== //
// console.log(postDate.replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম'))
</script>

<style scoped>
    p{
        line-height: 1.7 !important;
    }
   
</style>