export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)

    const data = await $fetch(`${config.public.apiUrl}/api/insidemoreexceptpost`, {
        method: 'POST',
        body: {
            currentPostDetailId: getBody?.currentPostDetailId,
            morePostId: getBody?.morePostId,
            cat_id: getBody?.cat_id
        }
    })


    return data;
    

})