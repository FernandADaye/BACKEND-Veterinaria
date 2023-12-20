// este funciona para mandar a llamar mis servicios de IdDueño (la BD y endpoints estan ahí)
const { idDueños} = require ('../../servicios/idDueños/index')
//para sacar tosidDueñosdo lo que se encuentra en ese objeto (idDueño)
const objetoIdDueño = new idDueños();

// ⬜⬜⬜⬜ metodo get ⬜⬜⬜⬜🟩 //
const traer = (req, res) => {
    try{
        const idDueños = objetoIdDueño.getDueños();
        res.status(200).json(idDueños);
    } catch(error) {
        //lo siguiente es para hacer una gestion de errores en el caso de que algo no salga bien 
    res.status(500).json({ message: 'todo mal ' });
    }
}

// ⬜⬜⬜⬜ metodo post ⬜⬜⬜⬜🟩 //
    const crear = (req, res) => {
    try{
        const nuevaInfo = req.body;
        objetoIdDueño.crearnuevaInfo(nuevaInfo);
        res.status(201).json({ message: 'todo bien', data: nuevaInfo });
    } catch(error) {
        //lo siguiente es para hacer una gestion de errores en el caso de que algo no sa
    res.status(500).json({ message: 'todo mal ' });
    }
};

// ⬜⬜⬜⬜ metodo patch ⬜⬜⬜⬜🟥//
const editarInfo = (req, res) => {
    try{
        const idModificado = req.params.id;
        const nuevaInfo = req.body;
        objetoIdDueño.modificacion(idModificado, nuevaInfo);
        res.status(200).json({message:'Todo salío bien', id: idModificado});
    } catch(error) {
        //lo siguiente es para hacer una gestion de errores en el caso de que algo no sa
    res.status(500).json({ message: 'todo mal ' });
    }
}

// ⬜⬜⬜⬜ metodo delete ⬜⬜⬜⬜🟥 //
    const eliminar  = (req, res) => {
    try{
        const idBorrado = req.params.id;
        objetoIdDueño.borrarInfo(idBorrado)
        idDueños.splice(posicion, 1);
        res.status(200).json({ message: 'Enemigo abatido ', id: idBorrado });
    } catch(error) {
        //lo siguiente es para hacer una gestion de errores en el caso de que algo no sa
    res.status(500).json({ message: 'todo mal ' });
    }


};

module.exports = {
    traer,
    crear, 
    editarInfo,
    eliminar
}

// esto funciona para manejar las entradas y salidas de los servicios 