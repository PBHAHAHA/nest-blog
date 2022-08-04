import { Prisma, PrismaClient } from "@prisma/client";
//  title: "用哪个框架好？",
// content: "hahahahaha",
        
const prisma = new PrismaClient()
async function run() {
    await prisma.user.create({
        data: {
           email: "3147091923@qq.com"
        }
    })
}

run()