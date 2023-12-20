const express = require("express");
const { dueñosRutas } = require("../idDueños/index");
//se enlaza con el servidor y las rutas 
const routerApi = (app) => {
    app.use("", dueñosRutas);
};

//obvio que es para exportar 
module.exports = { routerApi };