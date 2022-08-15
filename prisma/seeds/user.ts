import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
import { create } from '../helper';

export async function user() {
  console.log("user-----start")
  create(5, async (prisma: PrismaClient) => {
    await prisma.user.create({
      data: {
        email: Random.email(),
        password: '123456',
        github: Random.url(),
        avatar: Random.image('300x300'),
        QQ: Random.string(8),
      },
    });
  });
  console.log("user-----end")
}
