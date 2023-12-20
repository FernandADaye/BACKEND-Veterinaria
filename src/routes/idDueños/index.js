const express = require('express')
const dueñosRutas = express.Router()

const{
    traer,
    crear,
    editarInfo,
    eliminar
}= require('../../controllers/idDueños/index')

dueñosRutas.get('/', traer)
dueñosRutas.post('/', crear )
dueñosRutas.patch('/:id', editarInfo )
dueñosRutas.delete('/:id', eliminar )

module.exports = {dueñosRutas};