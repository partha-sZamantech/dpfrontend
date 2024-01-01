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
            cat_id: getdetailsContent?.cat_id
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


    const detailsContent = {
        content_id: getdetailsContent?.content_id,
        content_type: getdetailsContent?.content_type,
        cat_id: getdetailsContent?.cat_id,
        subcat_id: getdetailsContent?.subcat_id,
        special_cat_id: getdetailsContent?.special_cat_id,
        country_id: getdetailsContent?.country_id,
        division_id: getdetailsContent?.division_id,
        district_id: getdetailsContent?.district_id,
        upozilla_id: getdetailsContent?.upozilla_id,
        content_heading: getdetailsContent?.content_heading,
        content_sub_heading: getdetailsContent?.content_sub_heading,
        author_slugs: getdetailsContent?.author_slugs,
        content_brief: getdetailsContent?.content_brief,
        content_details: getdetailsContent?.content_details,
        img_xs_path: getdetailsContent?.img_xs_path,
        img_sm_path: getdetailsContent?.img_sm_path,
        img_sm_caption: getdetailsContent?.img_sm_caption,
        img_bg_path: getdetailsContent?.img_bg_path,
        img_bg_caption: getdetailsContent?.img_bg_caption,
        tags: getdetailsContent?.tags,
        meta_keywords: getdetailsContent?.meta_keywords,
        created_at: getdetailsContent?.created_at,
        updated_at: getdetailsContent?.updated_at,
        category: {
            cat_name_bn: getCategory?.cat_name_bn,
            cat_id: getCategory?.cat_id,
            cat_slug: getCategory?.cat_slug
        },
        subcategory: {
            subcat_name_bn: getSubcategory?.subcat_name_bn,
            subcat_id: getSubcategory?.subcat_id,
            subcat_slug: getSubcategory?.subcat_slug
        },
        author: {
            author_id: getAuthor?.author_id,
            author_name_bn: getAuthor?.author_name_bn,
            author_slug: getAuthor?.author_slug,
        }
    }




    // =========== More 3 Three Content =========================
    const moreContents = await prisma.bn_contents.findMany({
        where: {
            NOT: {
                content_id: {
                    equals: parseInt(getBody?.content_id)
                }
            }
        },
        orderBy: {
            content_id: 'desc'
        },
        take: 3
    })

    const moreDetailContent = []

 
    for (let i = 0; i < moreContents?.length; i++) {


        const getmoreContentCategory = await prisma.bn_categories.findFirst({
            where: {
                cat_id: moreContents[i]?.cat_id
            }
        })
        const getmoreContentSubCategory = await prisma.bn_subcategories.findFirst({
            where: {
                cat_id: moreContents[i]?.cat_id
            }
        })
        const getmoreContentAuthor = await prisma.authors.findFirst({
            where: {
                author_slug: moreContents[i]?.author_slugs?.toString()
            }
        })


        // catewise content will be added 
        const catwisePosts = await prisma.bn_contents.findMany({
            where: {
                cat_id: moreContents[i]?.cat_id,
                NOT: {
                    content_id: {
                        equals: moreContents[i]?.content_id
                    }
                }
            },
            orderBy:{
                content_id: 'desc'
            },
            take: 5
        })
        const catwisePost = []
        for(let catwise = 0; catwise < catwisePosts?.length; catwise++ ){

            const catwisecategory = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: catwisePosts[catwise]?.cat_id
                }
            })
            const catwisesubcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    cat_id: catwisePosts[catwise]?.cat_id
                }
            })
            catwisePost.push({
                content_id: catwisePosts[catwise]?.content_id,
                content_heading: catwisePosts[catwise]?.content_heading,
                img_bg_path: catwisePosts[catwise]?.img_bg_path,
                category: {
                    cat_slug: catwisecategory?.cat_slug,
                    cat_name_bn: catwisecategory?.cat_name_bn
                },
                subcategory: {
                    subcat_slug: catwisesubcategory?.subcat_slug,
                    subcat_name_bn: catwisesubcategory?.subcat_name_bn
                }
            })
        }

        // catewise content will be added 

        moreDetailContent.push({
            content_id: moreContents[i]?.content_id,
            content_type: moreContents[i]?.content_type,
            cat_id: moreContents[i]?.cat_id,
            subcat_id: moreContents[i]?.subcat_id,
            special_cat_id: moreContents[i]?.special_cat_id,
            country_id: moreContents[i]?.country_id,
            division_id: moreContents[i]?.division_id,
            district_id: moreContents[i]?.district_id,
            upozilla_id: moreContents[i]?.upozilla_id,
            content_heading: moreContents[i]?.content_heading,
            content_sub_heading: moreContents[i]?.content_sub_heading,
            author_slugs: moreContents[i]?.author_slugs,
            content_brief: moreContents[i]?.content_brief,
            content_details: moreContents[i]?.content_details,
            img_xs_path: moreContents[i]?.img_xs_path,
            img_sm_path: moreContents[i]?.img_sm_path,
            img_sm_caption: moreContents[i]?.img_sm_caption,
            img_bg_path: moreContents[i]?.img_bg_path,
            img_bg_caption: moreContents[i]?.img_bg_caption,
            tags: moreContents[i]?.tags,
            meta_keywords: moreContents[i]?.meta_keywords,
            created_at: moreContents[i]?.created_at,
            updated_at: moreContents[i]?.updated_at,
            category: {
                cat_name_bn: getmoreContentCategory?.cat_name_bn,
                cat_id: getmoreContentCategory?.cat_id,
                cat_slug: getmoreContentCategory?.cat_slug
            },
            subcategory: {
                subcat_name_bn: getmoreContentSubCategory?.subcat_name_bn,
                subcat_id: getmoreContentSubCategory?.subcat_id,
                subcat_slug: getmoreContentSubCategory?.subcat_slug
            },
            author: {
                author_id: getmoreContentAuthor?.author_id,
                author_name_bn: getmoreContentAuthor?.author_name_bn,
                author_slug: getmoreContentAuthor?.author_slug,
            },
            morecatwisePost: catwisePost // cate wise post will be added
        })

        


    }
    // =========== More 3 Three Content =========================

    // ================== First Releted Bottom 4 grid Post =============== // 
        const firstRelatedContents = []
        const frelated = await prisma.bn_contents.findMany({
            where: {
                NOT: {
                    content_id: {
                        equals: detailsContent?.content_id
                    }
                }
            },
            orderBy: {
                content_id: "desc"
            },
            take: 4,
            skip:1
        })
        for(let ft = 0; ft < frelated?.length; ft++){

             
            const rfcategory = await prisma.bn_categories.findFirst({
               where: {
                cat_id: frelated[ft]?.cat_id
               }
            })

            const rfsubcategory = await prisma.bn_subcategories.findFirst({
                where: {
                 cat_id: frelated[ft]?.cat_id
                }
             })

             firstRelatedContents.push({
                content_id: frelated[ft]?.content_id,
                content_type: frelated[ft]?.content_type,
                cat_id: frelated[ft]?.cat_id,
                content_heading: frelated[ft]?.content_heading,
                content_sub_heading: frelated[ft]?.content_sub_heading,
                img_bg_path: frelated[ft]?.img_bg_path,
                category: {
                    cat_id: rfcategory?.cat_id,
                    cat_slug: rfcategory?.cat_slug
                },
                subcategory: {
                    subcat_id: rfsubcategory?.subcat_id,
                    subcat_slug: rfsubcategory?.subcat_slug
                }
            })
        }
    // ================== First Releted Bottom 4 grid Post =============== // 

    return {
        detailsContent: detailsContent,
        moreDetailContent: moreDetailContent,
        firstRelatedContents: firstRelatedContents
      
    }


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