<template>
    <div class="specialContent py-3">
        <div class=" grid md:grid-cols-12 gap-2">
            <div class="col-span-12 md:col-span-7">
                <div class="grid md:grid-cols-12 gap-1">
                    <div class="col-span-12 md:col-span-7">
                        <div class="flex flex-col gap-3">
                            <nuxt-img
                                src="https://www.dhakaprokash24.com/media/content/images/2023October/nobel-20231005171906.jpg"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                            <h2 class="text-[#ff0000] text-[32px] leading-tight">ইসরাইলের পাশে থাকার ঘোষণা নরেন্দ্র মোদির
                            </h2>
                            <p class="text-[18px]">ফিলিস্তিনি সশস্ত্র গোষ্ঠী হামাসের আকস্মিক হামলায় বিপর্যস্ত হয়ে পড়েছে
                                ইসরাইল। মাত্র ২০ মিনিটে দেশটিতে পাঁচ হাজার রকেট ছুড়েছে ফিলিস্তিনের স্বাধীনতাকামী সংগঠন
                                হামাস। এ অবস্থায় ইসরাইলের...</p>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-5">

                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-5">
                dfjdsf
            </div>
        </div>
    </div>
</template>

<script setup>
const img = useImage()
</script>

<style lang="scss" scoped></style>