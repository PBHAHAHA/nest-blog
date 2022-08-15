import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
import { create } from '../helper';

const prisma = new PrismaClient();

export async function category() {
  console.log("category-----start")
  create(5, async (prisma: PrismaClient) => {
    await prisma.category.create({
      data: {
        ctitle: Random.ctitle(),
      },
    });
  });
  console.log("category-----end")
}
