export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()

    const data = await $fetch(`${config.public.apiUrl}/api/tabpopularposts`, {
        method: 'GET'
    })


    return data;
    

})