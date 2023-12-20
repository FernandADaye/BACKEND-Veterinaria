const express = require("express");
const { dueñosRutas } = require("../idDueños/index");
//se enlaza con el servidor y las rutas, asi nadmas mando a llamar un archivo que contega todas las rutas 
const routerApi = (app) => {
    app.use("/", dueñosRutas);
};
//obvio que es para exportar 
module.exports = { routerApi };


// se podria decir que envuelve a todas las rutas 