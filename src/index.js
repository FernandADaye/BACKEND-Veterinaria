// esto es para llamar express
const express = require("express");

// esto es para llamar al servidor
const app = express();

// esto es para hacer la parte de frontend (cors)
const cors = require("cors");

// definir que puerto es
const PORT = 3000;

// lo siguiente es para que pueda recibir json
app.use(express.json());

// importar las rutas
const { routerApi } = require("./routes/idDueños/main.routers");
//de aqui bienen las rutas
routerApi(app);
// este dice  donde será el puerto, y la funcion menciona que es lo que se hará cuando se inice el servidor
app.listen(PORT, () => {
    console.log(`Jaló en el puerto ${PORT}`);
});

//ejemplo de montoya de como usar cors correctamente
// los dos enlaces que aparecen son los unicos frontend que pueden acceder a la app 
const whitelist = ["http://127.0.0.1:5500", "http://example2.com"];
const corsOptions = {
    origin: function (origin, callback) {
    console.log(origin, whitelist.includes(origin));
    if (whitelist.includes(origin) || !origin) {
        callback(null, true);
    } else {
        callback(new Error("No permitido por CORS"));
    }
},
};
app.use(cors(corsOptions));

// levanta el servido

//
// es necesario hacer una prueva para que se vea reflejado en el servidor
// primero menciona que endpoint es (get )
// segundo, la dirección en donde se verá (path)
// lo demas es la function que contendrá la lógica
// app.get("/", (req, res) => {
// console.log("req", req);
// res.send("ya funciona o no?");
// });
//
// const idDueños = [
// { id: 1, nombre: "Dayé", mascota: "gato" },
// { id: 2, nombre: "Azul ", mascota: "ratón" },
// { id: 3, nombre: "Erika ", mascota: "perro" },
// { id: 4, nombre: "Leyla", mascota: "mapache " },
// { id: 5, nombre: "Levi ", mascota: "conejo " },
// ];
//
// ahora si, los verdaderos endpoints/ recursos que usaré :
//
// get 🟢
// app.get('/d', (req, res) => {
// res.json(idDueños)
// })
//
// post 🟢
// app.post('/d', (req, res) => {
// const nuevaInfo = req.body;
// idDueños.push(nuevaInfo);
// res.status(201).json({ message: 'todo bien ', data: nuevaInfo });
// });
//
// patch 🟢
// app.patch('/d/:id', (req, res) => {
// const idModificado = req.params.id;
// const nuevaInfo = req.body;
// const posicion = idDueños.findIndex(idDueño=> idDueño.id===parseInt(idModificado));
// idDueños[posicion] = { ...idDueños[posicion], ...nuevaInfo };
// res.status(200).json({ message: 'Cambio hecho 😎', id: idModificado });
// });
//
//
// delete 🟢
// app.delete('/d/:id', (req, res) => {
// const idBorrado = req.params.id;
// const posicion = idDueños.findIndex(idDueño=> idDueño.id===parseInt(idBorrado));
// idDueños.splice(posicion, 1);
// res.status(200).json({ message: 'Enemigo abatido ', id: idBorrado });
// });
//
//
