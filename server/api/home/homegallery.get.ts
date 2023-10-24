export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()

    const data = await $fetch(`${config.public.apiUrl}/api/homegallery`, {
        method: 'GET'
    })


    return data;
    

})