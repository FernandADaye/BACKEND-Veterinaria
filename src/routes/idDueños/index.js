// uso de express
const express = require('express')
const dueñosRutas = express.Router()

// aqui es de donde se enlaza con controllers (get, patch, post, delete)
const{
    traer,
    crear,
    editarInfo,
    eliminar
}= require('../../controllers/idDueños/index')

//estas como tal son las rutas para cada endpoint junto con su funcion 
dueñosRutas.get('/', traer)
dueñosRutas.post('/', crear )
dueñosRutas.patch('/:id', editarInfo )
dueñosRutas.delete('/:id', eliminar )

//obvio que es para exportar 
module.exports = {dueñosRutas};