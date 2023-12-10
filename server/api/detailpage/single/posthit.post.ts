export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)

    const data = await $fetch(`${config.public.apiUrl}/api/detail/hit/${getBody?.content_id}`, {
        method: 'get'
    })


    return data;
    

})