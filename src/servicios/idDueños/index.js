// aqui es donde comienza la estructura buena 
const conect = require ('../../db/connection')

class idDueños {
    constructor () {
        this.idDueños = []
        
    }

    // aqui se encontraran todos los endpoints que se usarán  (un poco diferentes, pero hacen lo mismmo )
// en este caso, como es un array, los metodos que se usan para sacar, meter, medificar o borrar informacion son diferentes a como se usaría realmente en una BD
    //💜 get 
        async getDueños (){
            const queryStrings= `
            SELECT * FROM idDueños 
            `
            const resultado= await conect.query(queryStrings);
            console.log(resultado);
        }

    //💜 post
        crearnuevaInfo (nuevaInfo){
            this.idDueños.push(nuevaInfo);
        }

    //💜 patch  
        modificacion (idModificado,nuevaInfo ){
            const posicion = this.idDueños.findIndex(idDueño=> idDueño.id===parseInt(idModificado));
            this.idDueños[posicion] = { ...this.idDueños[posicion], ...nuevaInfo };
        }

    //💜 delete
        borrarInfo (idBorrado){
            const posicion = this.idDueños.findIndex(idDueño=> idDueño.id===parseInt(idBorrado));
            this.idDueños.splice(posicion, 1);
        }
    }

    module.exports = { idDueños }


    // los servicios manejan los datos 