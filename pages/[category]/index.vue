<template>
    <div class="category-page">
        <!-- Space For Ads -->
        <div class="category-ads-section border-b py-4 ">
            <div class="bg-[#f7f7f7]">
                <a target="_blank" href="/">
                    <img class="mx-auto" src="/assets/img/bar-ads.gif" alt="">
                </a>
            </div>
        </div>
        <!-- Space For Ads -->
        <div class=" max-w-[1280px] mx-auto category-content px-4 md:px-2 py-4">
            <div class="breadcrump border-b pb-1 mb-5">
                <div class="flex gap-1 justify-start items-center">

                    <NuxtLink to="/">
                        <Icon class="text-xl" name="material-symbols:house-rounded" />
                    </NuxtLink>
                    <Icon name="ic:outline-keyboard-arrow-right" />
                    <NuxtLink :to="`/`">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        {{cat_slug}}
                    </NuxtLink>

                    <!-- <Icon v-if="detailsContent?.subcategory" name="ic:outline-keyboard-arrow-right" />
                    <NuxtLink v-if="detailsContent?.subcategory" :to="`/`">
                        {{ detailsContent?.subcategory?.subcat_name_bn }}
                    </NuxtLink> -->

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const cat_slug = useRoute().params.category
</script>

<style lang="scss" scoped></style>