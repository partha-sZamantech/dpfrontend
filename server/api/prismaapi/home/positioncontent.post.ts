import { Prisma, PrismaClient } from '@prisma/client'
export default defineEventHandler(async (event) => {

    // const getBody = await readBody(event)
    const prisma = new PrismaClient()
    const getBody = await readBody(event)
    const position = await prisma.bn_content_positions.findFirst({
        where: {
            cat_id: parseInt(getBody?.cat_id),
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
    const data = []
    if (position && position?.content_ids?.length > 0) {
        const positionArray = position?.content_ids?.split(',')
        const getContents = positionArray?.splice(0, getBody?.take)
        for (let i = 0; i < getContents?.length; i++) {
            const content = await prisma.bn_contents.findFirst({
                where: {
                    content_id: parseInt(getContents[i])
                }
            })

            const category = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: parseInt(content?.cat_id),
                    cat_type: 1
                }
            })
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    cat_id: parseInt(category?.cat_id)
                }
            })
            data.push({
                content_id: content?.content_id,
                img_bg_path: content?.img_bg_path,
                content_heading: content?.content_heading,
                content_details: content?.content_details,
                bn_cat_name: category?.cat_name_bn,
                cat_slug: category?.cat_slug,
                subcat_slug: subcategory?.subcat_slug
            })
        }

        return data

    }


})