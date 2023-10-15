export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()

    const data = await $fetch(`${config.public.apiUrl}/api/nationalhome`, {
        method: 'GET'
    })


    return data;
    

})