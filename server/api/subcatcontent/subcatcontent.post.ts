export default defineEventHandler( async (event) => {
    
    const config = useRuntimeConfig()
    const getBody = await readBody(event)
    const data = await $fetch(`${config.public.apiUrl}/api/catcontent/${getBody?.cat_slug}/${getBody?.subcat_slug}/${getBody?.take}`, {
        method: 'GET'
    })


    return data;
    

})