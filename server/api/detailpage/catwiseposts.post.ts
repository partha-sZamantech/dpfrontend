export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)

    const data = await $fetch(`${config.public.apiUrl}/api/dtpost/catws/${getBody.cat_id}/${getBody.content_id}`, {
        method: 'get'
    })


    return data;
    

})