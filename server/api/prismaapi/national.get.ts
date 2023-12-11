import {Prisma, PrismaClient} from '@prisma/client'
export default defineEventHandler( async (event) => {

  
    const prisma = new PrismaClient()
    // const getBody = await readBody(event)
    const position = await prisma.bn_content_positions.findFirst({
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
    const data = []
    if(position && position?.content_ids?.length > 0){
        const positionArray =  position?.content_ids?.split(',')
        const getArray =  positionArray?.splice(0,5)
       for(let i = 0; i< getArray?.length; i++){
            const content = await prisma.bn_contents.findFirst({
                where:{
                    content_id: parseInt(getArray[i])
                } 
            })
            data.push(content)
       }
        return [{
            id : getArray,
            data: data

        }]
        
    }else{
        return 'nai'
    }
   
    
})