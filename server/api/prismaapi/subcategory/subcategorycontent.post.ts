import { Prisma, PrismaClient } from '@prisma/client'
export default defineEventHandler(async (event) => {

    const prisma = new PrismaClient()
    const getBody = await readBody(event)

    // Get Category
    const getCategory = await prisma.bn_categories.findFirst({
        where: {
            cat_slug: getBody?.cat_slug, // Assign Cat slug
            status: 1,
            deletable: 1
        }
    })

    const getsubCatId = await prisma.bn_subcategories.findFirst({
        where: {
            cat_id: getCategory?.cat_id,
            subcat_slug: getBody?.subcat_slug,
            status: 1,
            deletable: 1
        }
    })
    const subcategory = await prisma.bn_subcategories.findMany({
        where: {
            cat_id: getCategory?.cat_id,
            status: 1,
            deletable: 1
        }
    })
    // Get Category Contents
    const getSubCategoryContents = await prisma.bn_contents.findMany({
        where: {
            cat_id: getCategory?.cat_id,
            subcat_id: getsubCatId?.subcat_id,
            status: 1,
            deletable: 1,
        },
        orderBy: {
            content_id: "desc"
        },
        take: getBody?.take, // Assign how many content you want to get
        skip: getBody?.skip
    })

    const data = []
    if (getSubCategoryContents && getSubCategoryContents?.length > 0) {

        for (let i = 0; i < getSubCategoryContents?.length; i++) {

            // Get Category
            const category = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: getSubCategoryContents[i]?.cat_id, // Assign Category ID 
                }
            })
            // Subcategory
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    cat_id: getSubCategoryContents[i]?.cat_id, // Assign Category ID 
                }
            })

            // Push Data
            data.push({
                content_id: getSubCategoryContents[i]?.content_id,
                img_bg_path: getSubCategoryContents[i]?.img_bg_path,
                content_heading: getSubCategoryContents[i]?.content_heading,
                content_details: getSubCategoryContents[i]?.content_details,
                created_at: getSubCategoryContents[i]?.created_at,
                updated_at: getSubCategoryContents[i]?.updated_at,
                bn_cat_name: category?.cat_name_bn,
                cat_slug: category?.cat_slug,
                subcat_slug: subcategory?.subcat_slug
            })
        }

    }

    return {
        category: {
            cat_name_bn: getCategory?.cat_name_bn,
            cat_slug: getCategory?.cat_slug,
            subcat_name_bn: getsubCatId?.subcat_name_bn,
            subcat_slug: getsubCatId?.subcat_slug
        },
        subcat: subcategory,
        contents: data
    }
})