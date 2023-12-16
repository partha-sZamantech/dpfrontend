import { Prisma, PrismaClient } from "@prisma/client"
export default defineEventHandler(async (event) => {

    const prisma = new PrismaClient()
    const getBody = await readBody(event)
    // const detailsContent = []
    // Get Content Detail
    const getdetailsContent = await prisma.bn_contents.findFirst({
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
    const getSubcategory = await prisma.bn_subcategories.findFirst({
        where: {
            cat_id: getCategory?.cat_id
        }
    })
    const getAuthor = await prisma.authors.findFirst({
        where: {
            author_slug: getdetailsContent?.author_slugs?.toString()
        }
    })

    const data = {
        detailsContent: getdetailsContent,
        category: {
            cat_name_bn: getCategory?.cat_name_bn,
            cat_id: getCategory?.cat_id,
            cat_slug: getCategory?.cat_slug
        },
        subcategory:{
            subcat_name_bn: getSubcategory?.subcat_name_bn,
            subcat_id: getSubcategory?.subcat_id,
            subcat_slug: getSubcategory?.subcat_slug
        } ,
        author: {
            author_id: getAuthor?.author_id,
            author_name_bn: getAuthor?.author_name_bn,
            author_slug: getAuthor?.author_slug,
        }
    }

    return data


    //=============== First Detail Inside Content exept ==================//
    // Inside More News Get 5 Content

    // const getInsideMoreNews = await prisma.bn_contents.findMany({
    //     where: {
    //         cat_id: getCategory?.cat_id
    //     },
    //     orderBy: {
    //         content_id: "desc"
    //     },
    //     take: 7
    // })

    // const insideMoreNews = []
    // for (let i = 0; i < 6; i++) {

    //     if (getInsideMoreNews[i].content_id !== parseInt(getBody?.content_id)) {

    //         // Category
    //         const category = await prisma.bn_categories.findFirst({
    //             where: {
    //                 cat_id: getInsideMoreNews[i]?.cat_id, // Assign Category ID 
    //             }
    //         })

    //         // Subcategory
    //         const subcategory = await prisma.bn_subcategories.findFirst({
    //             where: {
    //                 cat_id: getInsideMoreNews[i]?.cat_id, // Assign Category ID 
    //             }
    //         })

    //         insideMoreNews.push({
    //             content_id: getInsideMoreNews[i]?.content_id,
    //             img_bg_path: getInsideMoreNews[i]?.img_bg_path,
    //             content_heading: getInsideMoreNews[i]?.content_heading,
    //             cat_slug: category?.cat_slug,
    //             cat_id: category?.cat_id,
    //             subcat_slug: subcategory?.subcat_slug,
    //             subcat_id: subcategory?.subcat_id
    //         })

    //     } 

    // }
    //=============== First Detail Inside Content exept ==================//

    //============ First Content Right Side CategoryContent =================//
    // const getmoreContents = await prisma.bn_contents.findMany({
    //     where: {
    //         cat_id: getdetailsContent?.cat_id,
    //         status: 1,
    //         deletable: 1,
    //     },
    //     orderBy: {
    //         content_id: 'desc'
    //     },
    //     take: 7
    // })

    // const moreContents = []
    // for (let i = 0; i < 6; i++) {

    //     if (getmoreContents[i].content_id !== parseInt(getBody?.content_id)) {

    //         // Category
    //         const category = await prisma.bn_categories.findFirst({
    //             where: {
    //                 cat_id: getmoreContents[i]?.cat_id, // Assign Category ID 
    //             }
    //         })

    //         // Subcategory
    //         const subcategory = await prisma.bn_subcategories.findFirst({
    //             where: {
    //                 cat_id: getmoreContents[i]?.cat_id, // Assign Category ID 
    //             }
    //         })

    //         moreContents.push({
    //             content_id: getmoreContents[i]?.content_id,
    //             img_bg_path: getmoreContents[i]?.img_bg_path,
    //             content_heading: getmoreContents[i]?.content_heading,
    //             cat_slug: category?.cat_slug,
    //             cat_id: category?.cat_id,
    //             subcat_slug: subcategory?.subcat_slug,
    //             subcat_id: subcategory?.subcat_id
    //         })

    //     } // End if

    // }
    //============ First Content Right Side CategoryContent =================//

    // return {
    //     detailsContent: {
    //         content_id:getc
    //     },
    //     author: getAuthor,
    //     category: getCategory,
    //     subcategory: getSubcategory,
    //     insideMoreNews: insideMoreNews,
    //     moreContents: moreContents

    // }
    // const moreDetailContent = []
    // const getmoreDetailContent = await prisma.bn_contents.findMany({
    //     where: {
    //         status: 1,
    //         deletable: 1,
    //     },
    //     orderBy: {
    //         content_id: 'desc'
    //     },
    //     take: 4
    // })

    // for (let i = 0; i < 4; i++) {
    //     if (getmoreDetailContent[i].content_id !== parseInt(getBody?.content)) {
    //         // Category
    //         const category = await prisma.bn_categories.findFirst({
    //             where: {
    //                 cat_id: getmoreDetailContent[i]?.cat_id, // Assign Category ID 
    //             }
    //         })

    //         // Subcategory
    //         const subcategory = await prisma.bn_subcategories.findFirst({
    //             where: {
    //                 cat_id: getmoreDetailContent[i]?.cat_id, // Assign Category ID 
    //             }
    //         })

    //         // Author
    //         const author = await prisma.authors.findFirst({
    //             where: {
    //                 author_slug: getmoreDetailContent[i]?.author_slugs?.toString()
    //             }
    //         })

    //         moreDetailContent.push({
    //             content_id: getmoreDetailContent[i]?.content_id,
    //             img_bg_path: getmoreDetailContent[i]?.img_bg_path,
    //             content_heading: getmoreDetailContent[i]?.content_heading,
    //             cat_slug: category?.cat_slug,
    //             cat_id: category?.cat_id,
    //             subcat_slug: subcategory?.subcat_slug,
    //             subcat_id: subcategory?.subcat_id,
    //             author: author
    //         })
    //     }
    // }

    // $moreDetailContent = BnContent::with('category', 'subcategory', 'author')
    // ->where('content_id', '<>', $contentId)
    // ->where('status', 1)
    // ->where('deletable', 1)
    // ->orderBy('content_id', 'DESC')
    // ->take(3)
    // ->get();

})