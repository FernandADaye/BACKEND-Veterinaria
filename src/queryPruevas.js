const express = require("express");
const app = express();
// indica donde será el puerto, la funcion menciona que es lo que se hara cuendo se inice el servidor 
app.listen("PORT", () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
