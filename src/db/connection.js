const { Pool} = require ('pg')
const {config } = require ('../config/index');
// const { text } = require('express');

// hacer una destructuracion de config, se simplifica 
const {
    hostDB,
    portDB, 
    nameDB,
    userDB,
    passwordDB
} = config;

const pool = new Pool ({
    user:userDB,
    password:passwordDB,
    host:hostDB,
    port:portDB ,
    database:nameDB
})

module.exports = {
    query: (queryStrings, arrayparams) => pool.query(queryStrings, arrayparams),
    close: () => Pool.end()
}