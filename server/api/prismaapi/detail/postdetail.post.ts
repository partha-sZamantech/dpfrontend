import { Prisma, PrismaClient } from "@prisma/client"
export default defineEventHandler(async (event) => {

    const prisma = new PrismaClient()
    const getBody = await readBody(event)

    // Get Content Detail
    const detailsContent = await prisma.bn_contents.findFirst({
        where: {
            content_id: parseInt(getBody?.content_id),
            status: 1,
            deletable: 1
        }
    })

    // Increment Hit
    const hit = await prisma.bn_contents.update({
        where: {
            content_id: parseInt(getBody?.content_id)
        },
        data: {
            total_hit: {
                increment: 1
            }
        }
    })

    // Get Category
    const getCategory = await prisma.bn_categories.findFirst({
        where: {
            cat_slug: getBody?.cat_slug
        }
    })


    // Inside More News Get 5 Content

    const getInsideMoreNews = await prisma.bn_contents.findMany({
        where: {
            cat_id: getCategory?.cat_id
        },
        orderBy: {
            content_id: "desc"
        },
        take: 7
    })


    // First Detail Inside Content exept ====
    const insideMoreNews = []
    for (let i = 0; i < 6; i++) {

        if (getInsideMoreNews[i].content_id !== parseInt(getBody?.content_id)) {

            // Category
            const category = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: getInsideMoreNews[i]?.cat_id, // Assign Category ID 
                }
            })

            // Subcategory
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    cat_id: getInsideMoreNews[i]?.cat_id, // Assign Category ID 
                }
            })

            insideMoreNews.push({
                content_id: getInsideMoreNews[i]?.content_id,
                img_bg_path: getInsideMoreNews[i]?.img_bg_path,
                content_heading: getInsideMoreNews[i]?.content_heading,
                cat_slug: category?.cat_slug,
                cat_id: category?.cat_id,
                subcat_slug: subcategory?.subcat_slug,
                subcat_id: subcategory?.subcat_id
            })

        } // End if

    }
    // First Detail Inside Content exept ====

    // First Content Right Side CategoryContent
    const getmoreContents = await prisma.bn_contents.findMany({
        where: {
            cat_id: detailsContent?.cat_id,
            status: 1,
            deletable: 1,
        },
        orderBy: {
            content_id: 'desc'
        },
        take: 7
    })

    const moreContents = []
    for (let i = 0; i < 5; i++) {

        if (getmoreContents[i].content_id !== parseInt(getBody?.content_id)) {

            // Category
            const category = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: getmoreContents[i]?.cat_id, // Assign Category ID 
                }
            })

            // Subcategory
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    cat_id: getmoreContents[i]?.cat_id, // Assign Category ID 
                }
            })

            moreContents.push({
                content_id: getmoreContents[i]?.content_id,
                img_bg_path: getmoreContents[i]?.img_bg_path,
                content_heading: getmoreContents[i]?.content_heading,
                cat_slug: category?.cat_slug,
                cat_id: category?.cat_id,
                subcat_slug: subcategory?.subcat_slug,
                subcat_id: subcategory?.subcat_id
            })

        } // End if

    }


    return moreContents
})