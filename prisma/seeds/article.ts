import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
import { create } from '../helper';
import _ from 'lodash';

export async function article() {
  console.log('article-----start');
  create(5, async (prisma: PrismaClient) => {
    await prisma.article.create({
      data: {
        title: Random.ctitle(),
        content: Random.cparagraph(10, 50),
        categoryId: _.random(1, 10),
        thumb: Random.name(),
        userId: _.random(1, 10),
      },
    } as any);
  });
  console.log('article-----end');
}
