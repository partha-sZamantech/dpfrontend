export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)
    const data = await $fetch(`${config.public.apiUrl}/api/author/contents`, {
        method: 'POST',
        body: {
            take: getBody?.take,
            author_slug: getBody?.author_slug
        }
    })


    return data;
    
})