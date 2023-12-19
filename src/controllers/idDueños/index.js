// este funciona para mandar a llamar mis servicios de IdDueño (la BD y endpoints estan ahí)
const { idDueños} = require ('../../servicios/idDueños/index')
//para sacar tosidDueñosdo lo que se encuentra en ese objeto (idDueño)
const objetoIdDueño = new idDueños();

// ⬜⬜⬜⬜ metodo get ⬜⬜⬜⬜ //
const get = (req, res) => {
    try{
        const idDueños = objetoIdDueño.getDueños();
        res.status(200).json(idDueños);
    } catch(error) {
        //lo siguiente es para hacer una gestion de errores en el caso de que algo no salga bien 
    res.status(500).json({ message: 'todo mal ' });
    }
}

// ⬜⬜⬜⬜ metodo post ⬜⬜⬜⬜ //
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

// ⬜⬜⬜⬜ metodo patch ⬜⬜⬜⬜ //
const patch = (req, res) => {
    try{
        const idDueños = objetoIdDueño.getDueños();
        res.status(200).json(idDueños);
    } catch(error) {
        //lo siguiente es para hacer una gestion de errores en el caso de que algo no sa
    res.status(500).json({ message: 'todo mal ' });
    }
}

// ⬜⬜⬜⬜ metodo delete ⬜⬜⬜⬜ //
    const delet = (req, res) => {
    try{
        const idDueños = objetoIdDueño.getDueños();
        res.status(200).json(idDueños);
    } catch(error) {
        //lo siguiente es para hacer una gestion de errores en el caso de que algo no sa
    res.status(500).json({ message: 'todo mal ' });
    }


};