export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)

    const data = await $fetch(`${config.public.apiUrl}/api/tagcontents/${getBody.tag_slug}/${getBody.take}`, {
        method: 'get'
    })


    return data;
    

})