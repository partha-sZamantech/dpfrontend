export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()

    const data = await $fetch(`${config.public.apiUrl}/api/artscontent`, {
        method: 'GET'
    })


    return data;
    

})