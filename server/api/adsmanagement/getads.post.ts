export default defineEventHandler( async (event) => {

    // 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
    const config = useRuntimeConfig()
    const getBody = await readBody(event)
    const data = await $fetch(`${config.public.apiUrl}/api/common/get/ads`, {
        method: 'POST',
        body: {
            page: getBody?.page,
            position: getBody?.position

        }
    })


    return data;
    

})