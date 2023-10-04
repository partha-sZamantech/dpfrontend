<template>
    <div
        :class="`${mobileMenuStatus ? 'left-0 fixed' : 'fixed -left-[815px]'} duration-200 bg-white max-w-full md:hidden right-0 top-12`">
        <div class="px-8 py-8 flex flex-col gap-4  overflow-y-scroll h-screen">
            <div class="todayDate text-sm">
                {{ todayDate }}
            </div>
            <div class="flex items-center">
                <input type="text" placeholder="যা খুঁজতে চান তা লিখুন" class=" focus:outline-none border px-2 py-2 w-full">
                <div class=" bg-gray-200 px-2 py-2  cursor-pointer">
                    <Icon class="text-2xl " name="tabler:search" />
                </div>
            </div>
            <div class="">
                <div class="grid grid-cols-2 gap-2 font-[400]">
                    <NuxtLink v-for="(cat, cindex) in allCats" :key="cindex" :to="`/category/${cat?.cat_slug}`"
                        class="py-2 border-b">{{ cat?.cat_name_bn }}</NuxtLink>

                    <NuxtLink to="/" class="py-2 border-b">ইপেপার</NuxtLink>
                </div>
            </div>
            <div class="social_media flex flex-col gap-2 mt-3 pb-12 px-8">
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

const allCats = allCategoryState()

</script>

<style lang="scss" scoped></style>