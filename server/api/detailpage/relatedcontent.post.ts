export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)

    const data = await $fetch(`${config.public.apiUrl}/relatedcontdetl`, {
        method: 'POST',
        body: {
            readedIds: getBody?.detailId,
            detailId: getBody?.detailId
        }
    })


    return data;
    

})