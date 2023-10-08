<template>
    <div class=" grid grid-cols-12">
        <div class=" col-span-9">
            <div class="grid grid-cols-3">
                <div class="flex flex-col gap-3 group">
                    <div class=" overflow-hidden">
                        <nuxt-img
                            src="https://www.dhakaprokash24.com/media/content/images/2023October/SM/gaja-2-20231008122635.jpg"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" />
                    </div>
                    
                </div>
            </div>
        </div>
        <div class=" col-span-3">
        </div>
    </div>
</template>

<script setup>
const img = useImage()
</script>

<style lang="scss" scoped></style>