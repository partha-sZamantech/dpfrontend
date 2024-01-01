import { Prisma, PrismaClient } from '@prisma/client'
export default defineEventHandler(async (event) => {

    const prisma = new PrismaClient()
    const getBody = await readBody(event)

    const ads = await prisma.bn_ads.findFirst({

        where: {
            page: parseInt(getBody?.page),
            position: parseInt(getBody?.position),
        },
        select: {
            id: true,
            type: true,
            page: true,
            status: true,
            position: true,
            dfp_header_code: true,
            code: true,
            desktop_image_path: true,
            mobile_image_path: true,
            external_link: true,
            start_time: true,
            end_time: true
        }
    })


    return ads

})