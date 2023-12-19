// esto es para express
const express = require("express");
const app = express();
// lo siguiente es para que funcione un metodo post
app.use(express.json());
// definir que puerto es
const PORT = 3000;

// es necesario hacer una prueva para que se vea reflejado en el servidor
app.get("/", (req, res) => {
    console.log("req", req);
    res.send("ya funciona o no?");
});

const idDueños = [
    { id: 1, nombre: "Dayé", mascota: "gato" },
    { id: 2, nombre: "Azul ", mascota: "ratón" },
    { id: 3, nombre: "Erika ", mascota: "perro" },
    { id: 4, nombre: "Leyla", mascota: "mapache " },
    { id: 5, nombre: "Levi ", mascota: "conejo " },
];

// ahora si, los verdaderos endpoints/ recursos que usaré :

//get 🟢
app.get('/d', (req, res) => {
    res.json(idDueños)
})

//post 🟢
app.post('/d', (req, res) => {
    const nuevaInfo = req.body;
    idDueños.push(nuevaInfo);
    res.status(201).json({ message: 'todo bien ', data: nuevaInfo });
});

// indica donde será el puerto, la funcion menciona que es lo que se hara cuando se inice el servidor
app.listen(PORT, () => {
    console.log(`Jaló en el puerto ${PORT}`);
});
