export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)
    const data = await $fetch(`${config.public.apiUrl}/api/archive/post/get`, {
        method: 'POST',
        body: {
            date: getBody?.date
        }
    })


    return data;
    

})