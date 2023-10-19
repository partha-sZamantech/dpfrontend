export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()

    const data = await $fetch(`${config.public.apiUrl}/api/religioncontent`, {
        method: 'GET'
    })


    return data;
    

})