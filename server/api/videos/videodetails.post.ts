export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)
    const data = await $fetch(`${config.public.apiUrl}/api/video/${getBody?.videocat_slug}/${getBody?.video_id}`, {
        method: 'GET'
    })


    return data;
    

})