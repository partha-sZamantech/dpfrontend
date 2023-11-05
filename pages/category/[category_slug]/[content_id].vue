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
        <!--========== First Details Content ============ -->
        <div class=" grid grid-cols-12 gap-4 relative d-print">
            <div class=" col-span-9">
                <div class="single-post flex flex-col gap-3">
                    <div class="singlePost-heading flex flex-col gap-2">
                        <h4 v-if="detailsContent?.content_sub_heading" class="text-[20px] text-[#ff0000]">{{
                            detailsContent?.content_sub_heading }}</h4>
                        <h2 class="md:text-[32px] md:leading-[50px]">{{ detailsContent.content_heading }}</h2>
                        <div class="h-2 w-12 rounded-md bg-[#3375af]"></div>
                    </div>

                    <div class="flex justify-between items-end border-b pb-3">
                        <div class="author-details flex flex-col gap-1" v-if="authors?.length > 0">
                            <p v-for="(author, auidx) in authors" :key="auidx">
                                <NuxtLink to="/">{{ author.author_name_bn }}</NuxtLink>
                            </p>
                            <p>প্রকাশ: <ClientOnly><span>{{ postDate }}</span></ClientOnly>
                            </p>
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
                            <div class=" cursor-pointer" @click="printArea">
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
                            </div>
                        </div>
                    </div>
                    <div class="feature-image border-b">
                        <nuxt-img :src="`${siteurl.site_url}/media/content/images/${detailsContent?.img_bg_path}`"
                            class="mx-auto w-full"
                            :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                        <p v-if="detailsContent?.img_bg_caption" class="feature-image-capture text-center py-2">{{
                            detailsContent?.img_bg_caption }}</p>
                    </div>
                    <div class="singlePost-details mx-auto w-[620px]">
                        <div class="postdetails text-[18px] text-gray-700 pb-4" v-html="detailsContent?.content_details">
                        </div>
                        <!-- Tag Area -->
                        <div class="category-tags-area flex flex-col gap-4 border-b border-t pb-4 pt-3">
                            <NuxtLink :to="`/${detailsContent?.category?.cat_slug}`" class="text-[18px] py-1"> <span
                                    class=" py-1 font-semibold border-b-2 border-[#3375af] text-[#3375af]">{{
                                        detailsContent?.category?.cat_name_bn }}</span> থেকে আরও পড়ুন</NuxtLink>
                            <ul class="flex flex-wrap gap-3 items-center" v-if="firstContentTags?.length > 0">

                                <li v-for="ftag in firstContentTags"
                                    class="text-[#337ab7] bg-[#d9edf7] rounded-sm hover:bg-[#d0e6f1]">
                                    <NuxtLink class="px-4 py-2 block" :to="`/topic/${ftag}`">{{ ftag }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <!-- Tag Area -->
                    </div> <!-- singlePost-details -->
                </div> <!-- /single-post -->

            </div>
            <div class=" col-span-3">

                <div :class="`flex flex-col gap-2 sticky ${stickyScroll ? ' top-40' : 'top-14'} duration-200`"
                    v-if="firstMoreContents?.length > 0">
                    <div class=" border-b-[3px] border-[#3375af] pb-1">
                        <h3 class="text-[#3375af] text-[18px] font-[600]">{{ detailsContent?.category?.cat_name_bn }} নিয়ে
                            আরও পড়ুন</h3>
                    </div>
                    <div class="detail-page-category-content-exept flex flex-col">
                        <!-- Loop Item -->
                        <div class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4"
                            v-for="fmoreContent in firstMoreContents" :key="fmoreContent.content_id">
                            <div class=" col-span-5 overflow-hidden">
                                <NuxtLink :to="`/category/${fmoreContent?.category?.cat_slug}/${fmoreContent?.content_id}`">
                                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${fmoreContent?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                                </NuxtLink>
                            </div>
                            <div class=" col-span-7">
                                <NuxtLink :to="`/category/${fmoreContent?.category?.cat_slug}/${fmoreContent?.content_id}`">
                                    <h4 class="text-[16px] leading-tight group-hover:text-[#ff0000]">{{
                                        fmoreContent.content_heading }}</h4>
                                </NuxtLink>
                            </div>
                        </div>
                        <!--/ Loop Item -->
                    </div>
                </div>
            </div>
            <!-- Read more first content -->
            <div class="col-span-12" v-if="fRelatedContents?.length > 0">
                <div class="read-more">
                    <div class="category-header border-b-4 border-b-[#3375af] my-3">
                        <div class="flex gap-3 items-center">
                            <span class="w-3 h-3 bg-[#3375af]"></span>
                            <h2 class="text-[#3375af] text-[18px] font-semibold">আরও পড়ুন</h2>
                        </div>
                    </div>
                    <div class=" grid grid-cols-4 gap-4">
                        <!-- Loop Item -->
                        <NuxtLink :to="`/category/${fRelatedContent?.category?.cat_slug}/${fRelatedContent?.content_id}`"
                            class="flex flex-col gap-2 group" v-for="fRelatedContent in fRelatedContents"
                            :key="fRelatedContent.content_id">
                            <div class="feature_image_readmore overflow-hidden">
                                <nuxt-img :src="`${siteurl.site_url}/media/content/images/${fRelatedContent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                            </div>
                            <h5 class="text-[18px] group-hover:text-[#ff0000]">{{ fRelatedContent?.content_heading }}</h5>
                        </NuxtLink>
                        <!-- Loop Item -->


                    </div>
                </div>
            </div>
            <!-- Read more first content -->
        </div>
        <!--========== // First Details Content ============ -->

        <!--========== <3> More Details Content ============ -->
        <div v-if="moreDetailsContents?.length > 0" v-for="(moreDetailContent, mcinx) in moreDetailsContents" :key="moreDetailContent.content_id" class="border-t pt-8  mt-10 grid grid-cols-12 gap-4 relative d-print">
            <div class=" col-span-9">
                <div class="single-post flex flex-col gap-3">
                    <div class="singlePost-heading flex flex-col gap-2">
                        <h4 v-if="moreDetailContent?.content_sub_heading" class="text-[20px] text-[#ff0000]">{{
                            moreDetailContent?.content_sub_heading }}</h4>
                        <h2 class="md:text-[32px] md:leading-[50px]">{{ moreDetailContent.content_heading }}</h2>
                        <div class="h-2 w-12 rounded-md bg-[#3375af]"></div>
                    </div>

                    <div class="flex justify-between items-end border-b pb-3">
                        <div class="author-details flex flex-col gap-1" v-if="authors?.length > 0">
                            <p v-for="(author, auidx) in authors" :key="auidx">
                                <NuxtLink to="/">{{ author.author_name_bn }}</NuxtLink>
                            </p>
                            <p>প্রকাশ: <ClientOnly><span>{{ postDate }}</span></ClientOnly>
                            </p>
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
                            <div class=" cursor-pointer" @click="printArea">
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
                            </div>
                        </div>
                    </div>
                    <div class="feature-image border-b">
                        <nuxt-img :src="`${siteurl.site_url}/media/content/images/${moreDetailContent?.img_bg_path}`"
                            class="mx-auto w-full"
                            :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                        <p v-if="moreDetailContent?.img_bg_caption" class="feature-image-capture text-center py-2">{{
                            moreDetailContent?.img_bg_caption }}</p>
                    </div>
                    <div class="singlePost-details mx-auto w-[620px]">
                        <div class="postdetails text-[18px] text-gray-700 pb-4" v-html="moreDetailContent?.content_details">
                        </div>
                        <!-- Tag Area -->
                        <div class="category-tags-area flex flex-col gap-4 border-b border-t pb-4 pt-3">
                            <NuxtLink :to="`/${moreDetailContent?.category?.cat_slug}`" class="text-[18px] py-1"> <span
                                    class=" py-1 font-semibold border-b-2 border-[#3375af] text-[#3375af]">{{
                                        moreDetailContent?.category?.cat_name_bn }}</span> থেকে আরও পড়ুন</NuxtLink>
                            <ul class="flex flex-wrap gap-3 items-center" v-if="firstContentTags?.length > 0">

                                <li v-for="ftag in firstContentTags"
                                    class="text-[#337ab7] bg-[#d9edf7] rounded-sm hover:bg-[#d0e6f1]">
                                    <NuxtLink class="px-4 py-2 block" :to="`/topic/${ftag}`">{{ ftag }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <!-- Tag Area -->
                    </div> <!-- singlePost-details -->
                </div> <!-- /single-post -->

            </div>
            <div class=" col-span-3">

                <div :class="`flex flex-col gap-2 sticky ${stickyScroll ? ' top-40' : 'top-14'} duration-200`"
                    v-if="firstMoreContents?.length > 0">
                    <div class=" border-b-[3px] border-[#3375af] pb-1">
                        <h3 class="text-[#3375af] text-[18px] font-[600]">{{ moreDetailContent?.category?.cat_name_bn }} নিয়ে
                            আরও পড়ুন</h3>
                    </div>
                    <div class="detail-page-category-content-exept flex flex-col">
                        <!-- Loop Item -->
                        <div class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4"
                            v-for="fmoreContent in firstMoreContents" :key="fmoreContent.content_id">
                            <div class=" col-span-5 overflow-hidden">
                                <NuxtLink :to="`/category/${fmoreContent?.category?.cat_slug}/${fmoreContent?.content_id}`">
                                    <nuxt-img :src="`${siteurl.site_url}/media/content/images/${fmoreContent?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                                </NuxtLink>
                            </div>
                            <div class=" col-span-7">
                                <NuxtLink :to="`/category/${fmoreContent?.category?.cat_slug}/${fmoreContent?.content_id}`">
                                    <h4 class="text-[16px] leading-tight group-hover:text-[#ff0000]">{{
                                        fmoreContent.content_heading }}</h4>
                                </NuxtLink>
                            </div>
                        </div>
                        <!--/ Loop Item -->
                    </div>
                </div>
            </div>
            <!-- Read more first content -->
            <div class="col-span-12" v-if="fRelatedContents?.length > 0">
                <div class="read-more">
                    <div class="category-header border-b-4 border-b-[#3375af] my-3">
                        <div class="flex gap-3 items-center">
                            <span class="w-3 h-3 bg-[#3375af]"></span>
                            <h2 class="text-[#3375af] text-[18px] font-semibold">আরও পড়ুন</h2>
                        </div>
                    </div>
                    <div class=" grid grid-cols-4 gap-4">
                        <!-- Loop Item -->
                        <NuxtLink :to="`/category/${fRelatedContent?.category?.cat_slug}/${fRelatedContent?.content_id}`"
                            class="flex flex-col gap-2 group" v-for="fRelatedContent in fRelatedContents"
                            :key="fRelatedContent.content_id">
                            <div class="feature_image_readmore overflow-hidden">
                                <nuxt-img :src="`${siteurl.site_url}/media/content/images/${fRelatedContent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                            </div>
                            <h5 class="text-[18px] group-hover:text-[#ff0000]">{{ fRelatedContent?.content_heading }}</h5>
                        </NuxtLink>
                        <!-- Loop Item -->


                    </div>
                </div>
            </div>
            <!-- Read more first content -->
        </div>
        <!--========== // <3> More Details Content ============ -->
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

// Category Slug & Content id pages/category/[category_slug]/[content_id].vue
const category_slug = useRoute().params.category_slug
const content_id = useRoute().params.content_id
// Category Slug & Content id pages/category/[category_slug]/[content_id].vue

// const postDetails = useState(() => [])


const { data: pdailts } = await useFetch('/api/detailpage/detail', {
    method: 'POST',
    body: {
        category_slug: category_slug,
        content_id: content_id
    }
})
// ========== First Details Content ======= // 
const detailsContent = useState(() => [])
detailsContent.value = pdailts?.value?.detailsContent
// ========== First Details Content ======= // 
// ========== First More Right Side Content ======= //
const firstMoreContents = useState(() => [])
firstMoreContents.value = pdailts?.value?.moreContents
// ========== First More Right Side Content ======= //
// ========== First Details Content Author ======= //
const authors = useState(() => [])
authors.value = pdailts?.value?.authors
// ========== First Details Content Author ======= //
// ========== More Details Contents ======= //
const moreDetailsContents = useState(() => [])
moreDetailsContents.value = pdailts?.value?.moreDetailContent
console.log(moreDetailsContents.value)
// ========== More Details Contents ======= //


// moment.locale('bn-bd')
// const date = moment(detailsContent.value.created_at).format('Y', 'bn-bd')
// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric", hour: "numeric", minute: 'numeric' })
const postDate = getDate.format(new Date(detailsContent.value.created_at)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
// ================ Get Bangla Date ============== //
// console.log(postDate.replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম'))

// ==================== First Details Tags ======================= //
const firstContentTags = useState(() => [])
const firstsplittag = detailsContent?.value?.tags?.split(',')
if (firstsplittag) {
    firstsplittag.forEach(tagval => {
        firstContentTags.value.push(tagval)
    })
    firstContentTags.value = [...new Map(firstContentTags.value.map(fvl => [fvl, fvl])).values()]
}

// ==================== First Details Tags ======================= //

// ============== First Related Content ================//
const fRelatedContents = useState(() => [])
const { data: frcontent } = await useFetch('/api/detailpage/firstrelatedcontent', {
    method: "POST",
    body: {
        content_id: content_id
    }
})
fRelatedContents.value = frcontent

// ============== First Related Content ================//

// =============== Print Script ======================= //
const printArea = () => {
    var prtContent = document.getElementsByClassName("d-print")[0];
    var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}
// =============== Print Script ===================== //


</script>

<style scoped>
p {
    line-height: 1.7 !important;
}
</style>