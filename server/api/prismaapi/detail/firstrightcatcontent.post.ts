// import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    //=============== First Detail Inside Content exept ==================//
    // Inside More News Get 5 Content

    const getContents = await prisma.bn_contents.findMany({
        where: {
            cat_id: parseInt(getBody?.cat_id),
            status: 1,
            deletable: 1
        },
        orderBy: {
            content_id: "desc"
        },
        take: 6
    })

    const category = await prisma.bn_categories.findFirst({
        where: {
            cat_id: parseInt(getBody?.cat_id) 
        },
        select: {
            cat_id: true,
            cat_name_bn: true,
            cat_slug: true
        }
    })

    const data = []
    for (let i = 0; i < 6; i++) {

        if (getContents[i].content_id !== parseInt(getBody?.content_id)) {

            // Category
            // const category = await prisma.bn_categories.findFirst({
            //     where: {
            //         cat_id: getContents[i]?.cat_id, // Assign Category ID 
            //     }
            // })

            // Subcategory
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    subcat_id: getContents[i]?.subcat_id
                }
            })

            data.push({
                content_id: getContents[i]?.content_id,
                content_type: getContents[i]?.content_type,
                img_bg_path: getContents[i]?.img_bg_path,
                content_heading: getContents[i]?.content_heading,
                cat_slug: category?.cat_slug,
                cat_id: category?.cat_id,
                subcat_slug: subcategory?.subcat_slug,
                subcat_id: subcategory?.subcat_id
            })

        } // End if

    }
    //=============== First Detail Inside Content exept ==================//

    return {
        cat_name_bn: category?.cat_name_bn,
        cat_slug: category?.cat_slug,
        contents: data
    };


})