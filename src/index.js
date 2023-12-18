// esto es para express 
const express = require('express');
const app = express();

// definir que puerto es 
const PORT = 3000;

// es necesario hacer una prueva para que se vea reflejado en el servidor 
app.get('/', (req, res) => {
    console.log('req', req);
    res.send('ya funciona o no?');
});







// indica donde será el puerto, la funcion menciona que es lo que se hara cuando se inice el servidor 
app.listen(PORT, () => {
    console.log(`Jaló en el puerto ${PORT}`);
});
