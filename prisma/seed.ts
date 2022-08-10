import { Prisma, PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
//  title: "用哪个框架好？",
// content: "hahahahaha",

const prisma = new PrismaClient();
async function run() {
  for (let i = 0; i < 5; i++) {
    await prisma.user.create({
      data: {
        email: Random.email(),
        password: '123456',
        github: Random.url(),
        avatar: Random.image('300x300'),
        QQ: Random.string(8),
      },
    });
  }
}

run();
