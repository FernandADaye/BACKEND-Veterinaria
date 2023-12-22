//este archivo funciona como intermediario a otros archivos, pues es el unico que tiene el acceso directo de .env(1️⃣2️⃣)
require ('dotenv').config();//1️⃣
const config = {
    // Para saber en que servidor se subio, es un proceso de dotenv 
    env: process.env.NODE_ENV,//2️⃣
    // a leer todos los datos de env, este si se lo asignamos nosotros 
    port: process.env.PORT,
    hostDB:process.env.DB_HOST,
    portDB:process.env.DB_PORT,
    nameDB: process.env.DB_NAME,
    userDB: process.env.DB_USER,
    passwordDB:process.env.DB_PASS
}

module.exports = { config }