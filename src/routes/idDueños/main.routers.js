const express = require("express");
const { dueñosRutas } = require("../idDueños/index");

const routerApi = (app) => {
    app.use("", dueñosRutas);
};


module.exports(routerApi)