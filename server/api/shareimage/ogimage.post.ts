import moment from "moment"

export default defineEventHandler( async (event) => {
       
    const config = useRuntimeConfig()
    const getBody = await readBody(event)
    const data = await $fetch(`${config.public.apiUrl}/api/share-image/${getBody?.cat_slug}?t=${moment().format('Ymdhi')}&imgPath=${getBody?.img_bg_path}`, {
        method: 'GET'
    })


    return data;
    

})