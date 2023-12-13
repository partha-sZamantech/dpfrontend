import { Prisma, PrismaClient } from '@prisma/client'
export default defineEventHandler(async (event) => {

    // const getBody = await readBody(event)
    const prisma = new PrismaClient()

    const position = await prisma.p_album_positions.findFirst({
        where: {
            position_id: 1,
            status: 1,
            deletable: 1
        },
        select: {
            position_id: true,
            position_name: true,
            cat_id: true,
            special_cat_id: true,
            subcat_id: true,
            content_ids: true,
            total_content: true
        }
    })

    const data = []
    const positionArray = position?.content_ids?.split(',')
    const getVideoIds = positionArray?.slice(0, 9)

    for(let i = 0; i < getVideoIds?.length; i++){
        const video =  await prisma.p_albums.findFirst({
            where: {
                album_id: parseInt(getVideoIds[i]),
                deletable: 1
            }
        })
        const category =  await prisma.p_categories.findFirst({
            where: {
                cat_id: video?.cat_id
            }
        })


        data.push({
            album_name: video?.album_name,
            album_id: video?.album_id,
            cat_slug: category?.cat_slug,
            album_detailsss: video?.album_details,
            album_details: video?.album_details
        })
    }

    return data;
    
})