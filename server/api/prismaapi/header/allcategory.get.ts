import { Prisma, PrismaClient } from '@prisma/client'
export default defineEventHandler(async (event) => {

    const prisma = new PrismaClient()
    // const getBody = await readBody(event)
    const data = await prisma.bn_categories.findMany({
        where: {
            cat_type: 1,
            top_menu: 1,
            status: 1,
            deletable: 1
        },
        orderBy: {
            cat_position: "asc"
        }
    })

    return data
   
})