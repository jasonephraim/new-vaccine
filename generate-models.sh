npx sequelize-cli model:generate --name Guarantee --attributes userId:string,locationId:string,isExpired:boolean
npx sequelize-cli model:generate --name Location --attributes name:string,address:string
npx sequelize-cli model:generate --name Slot --attributes locationId:string,isReserved:boolean,userId:string
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,age:integer,password:string,phoneNumber:string
npx sequelize-cli model:generate --name Waitlist --attributes userId:string,day:date,locationId:string