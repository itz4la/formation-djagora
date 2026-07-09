nest new project-name

npm i -D prisma@6.3.1
npm install @prisma/client@6.3.1
npx prisma init

npm i --save @nestjs/config

npm i --save class-validator class-transformer



npx prisma generate // to validate changes in schema.prisma
npx prisma db push // to generate models or fields in db