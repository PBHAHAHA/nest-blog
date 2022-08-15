import { Prisma, PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
import { article } from './seeds/article';
import { category } from './seeds/category';
import { user } from './seeds/user';
//  title: "用哪个框架好？",
// content: "hahahahaha",

const prisma = new PrismaClient();
async function run() {
  user();
  category();
  article()
}

run();
