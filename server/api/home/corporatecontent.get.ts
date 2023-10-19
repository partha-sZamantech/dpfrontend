export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()

    const data = await $fetch(`${config.public.apiUrl}/api/corporatecontent`, {
        method: 'GET'
    })


    return data;
    

})