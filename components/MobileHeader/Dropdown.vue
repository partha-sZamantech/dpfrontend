<template>
    <div
        :class="`${mobileMenuStatus ? 'left-0 fixed' : 'fixed -left-[815px]'} duration-200 bg-white h-screen max-w-full md:hidden right-0 top-12 `">
        <div class="px-8 py-8 flex flex-col gap-4">
            <div class="todayDate text-sm">
                {{ todayDate }}
            </div>
            <div class="flex items-center">
                <input type="text" placeholder="যা খুঁজতে চান তা লিখুন" class=" focus:outline-none border px-2 py-2 w-full">
                <div class=" bg-gray-200 px-2 py-2  cursor-pointer">
                    <Icon class="text-2xl " name="tabler:search" />
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2 font-[400]">
                <NuxtLink to="/" class="py-2 border-b">প্রচ্ছদ</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">সর্বশেষ সংবাদ</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">বিশেষ সংবাদ</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">করোনাভাইরাস</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">রাজনীতি</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">বাংলাদেশ</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">বিশ্ব</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">বাণিজ্য</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">মতামত</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">খেলা</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">বিনোদন</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">জীবনযাপন</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">প্রযুক্তি</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">সুস্থতা</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">শিক্ষা</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">ধর্ম</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">ছবি</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">ভিডিও</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">চাকরি</NuxtLink>
                <NuxtLink to="/" class="py-2 border-b">ইপেপার</NuxtLink>
            </div>
            <div class="social_media flex flex-col gap-2 mt-10 px-8">
                <p class="text-xl text-center">অনুসরণ করুন</p>
                <div class="flex gap-6 justify-between items-center">
                    <NuxtLink to="">
                        <Icon class="text-2xl cursor-pointer" name="bi:facebook" />
                    </NuxtLink>
                    <NuxtLink to="">
                        <Icon class="text-2xl cursor-pointer" name="ri:twitter-x-fill" />
                    </NuxtLink>
                    <NuxtLink to="">
                        <Icon class="text-2xl cursor-pointer" name="bi:instagram" />
                    </NuxtLink>
                    <NuxtLink to="">
                        <Icon class="text-2xl cursor-pointer" name="bi:youtube" />
                    </NuxtLink>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { mobileMenuStatus } = defineProps(['mobileMenuStatus'])
// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
const todayDate = getDate.format(new Date())
// ================ Get Bangla Date ============== //
</script>

<style lang="scss" scoped></style>