export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)
    const data = await $fetch(`${config.public.apiUrl}/api/collection/latest`, {
        method: 'POST',
        body: {
            take: getBody?.take
        }
    })

    return data;

})