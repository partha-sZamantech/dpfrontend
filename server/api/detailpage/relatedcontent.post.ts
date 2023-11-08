export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)

    const data = await $fetch(`${config.public.apiUrl}/api/relatedcontdetl`, {
        method: 'POST',
        body: {
            readedIds: getBody?.readedIds,
            detailId: getBody?.detailId
        }
    })


    return data;
    

})