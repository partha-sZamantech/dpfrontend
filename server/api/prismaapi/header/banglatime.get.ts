// import { Prisma, PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {

    const data = await $fetch("https://admin.dhakaprokash24.com/api/get-bangla-time",{
        method: 'GET'
    })

    return data;
   
})