import prisma from "./prismaClient";

export const queryData = async (query) => {
  try {
    const res = await prisma.Concert.findMany({
      select:{
      name:true,
      venue:true,
  }});
    const l=JSON.parse(JSON.stringify(res));
    console.log(res)
    return res;
    
  }
    catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}


export const queryData2 = async (query) => {
  try {
    const res = await prisma.Concert.findMany();
    const l=JSON.parse(JSON.stringify(res));
    console.log(res)
    return res;
    
  }
    catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}


