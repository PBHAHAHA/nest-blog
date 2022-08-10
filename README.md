# 

## 快捷键
ctrl + i ： 提示，触发建议


## Prisma的使用
npx prisma 查看prisma命令  
npx prisma init 初始化  
npx prisma migrate dev  数据库创建表 | 迁徙表
npx prisma format 创建执行关联关系
schema 更新后需要 执行 npx prisma migrate dev 
npx prisma reset 重置数据库（慎用）

## nest 命令
-d 不是真正的服务  
s 服务  
g 创建  
--no-spec  不创建测试文件  
nest g s pb --no-spec -d 创建服务(不是真的创建，会提示最终创建成的目录结果)   
--flat 不会放在单独的子目录下
nest g s pb --no-spec --flat -d   
