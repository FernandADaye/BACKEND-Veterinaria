const express = require('express');
const app = express();
// definir que puerto es 
const port = 3000;
// indica donde será el puerto, la funcion menciona que es lo que se hara cuendo se inice el servidor 
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
