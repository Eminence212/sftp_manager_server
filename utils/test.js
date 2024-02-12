
require("dotenv").config();
const { criptString, decriptString } = require("./criptograph");

// console.log({
//   BD_password: decriptString(process.env.DB_PASSWORD),
//   SFTP_password: decriptString(process.env.SFTP_PASSWORD),
// });

console.log({
  BD: process.env.DB_USER,
});
