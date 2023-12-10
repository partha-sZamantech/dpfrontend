export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)

    const data = await $fetch(`${config.public.apiUrl}/api/detail/getcat/${getBody?.category_slug}`, {
        method: 'get'
    })


    return data;
    

})