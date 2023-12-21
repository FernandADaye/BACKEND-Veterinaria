const { Pool} = require ('pg')
const {config } = require ('../config/index')

// hacer una destructuracion de config, se simplifica 
const {
    hostDB,
    portDB, 
    nameDB,
    userDB,
    passwordDB
} = config;

new Pool ({
    user:userDB,
    password:passwordDB,
    host:hostDB,
    port:portDB ,
    database:nameDB
})