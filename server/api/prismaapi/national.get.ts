import {Prisma, PrismaClient} from '@prisma/client'
export default defineEventHandler( async (event) => {

  
    const prisma = new PrismaClient()
    // const getBody = await readBody(event)
    const updateCategory = await prisma.bn_content_positions.findFirst({
        where: {
            cat_id: 1,
            status: 1,
            deletable: 1
        },
        select: {
            cat_id: true,
            position_id: true,
            position_name: true,
            special_cat_id: true,
            subcat_id: true,
            content_ids: true,
            total_content: true
        }
    })
   
    return {
        success: updateCategory
    }

})