// import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    //=============== First Detail Inside Content exept ==================//
    // Inside More News Get 5 Content

    const getContents = await prisma.bn_contents.findMany({
        where: {
            cat_id: parseInt(getBody?.cat_id)
        },
        orderBy: {
            content_id: "desc"
        },
        take: 6
    })

    const data = []
    for (let i = 0; i < 6; i++) {

        if (getContents[i].content_id !== parseInt(getBody?.content_id)) {

            // Category
            const category = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: getContents[i]?.cat_id, // Assign Category ID 
                }
            })

            // Subcategory
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    cat_id: getContents[i]?.cat_id, // Assign Category ID 
                }
            })

            data.push({
                content_id: getContents[i]?.content_id,
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

    return data;


})