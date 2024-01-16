// import moment from "moment"

export default defineEventHandler( async (event) => {
       
    const config = useRuntimeConfig()
    const getBody = await readBody(event)
    const data = await $fetch(`${config.public.apiUrl}/api/ogimage/get/${getBody?.cat_slug}?imgPath=${getBody?.img_bg_path}`, {
        method: 'GET'
    })


    return data;
    

})