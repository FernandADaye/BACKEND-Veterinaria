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
            try {
                const queryStrings= `
                SELECT * FROM idDueños 
                `
                const resultado= await conect.query(queryStrings);
                // console.log(resultado);
                return resultado.rows;
                
            } catch (error) {
                throw new Error(error)
            }
            
            
        }

    //💜 post
    async crearnuevaInfo (nuevaInfo){
        const {
        nombre,
        mascota
        }= nuevaInfo

            try {
                const queryStrings= `
                INSERT INTO idDueños( nombre, mascota) VALUES ( $1, $2 )
                `;
                const params = [nombre, mascota];
                const resultado= await conect.query(queryStrings, params);


                
                
            } catch (error) {
                throw new Error(error)
            }
        }

    //💜 patch  
        async modificacion (idModificado,nuevaInfo ){
            const{
                nombre,
                mascota
            }=nuevaInfo
            try {
                const queryStrings= `
                UPDATE idDueños SET nombre = $1, mascota = $2 WHERE iddueño = $3
                `;
                const posicion = this.idDueños.findIndex(idDueño=> idDueño.id===parseInt(idModificado));
                this.idDueños[posicion] = { ...this.idDueños[posicion], ...nuevaInfo };
                const params = [nombre, mascota,idModificado];
                const resultado= await conect.query
            (queryStrings, params);
                console.log(resultado);
                
                
            } catch (error) {
                throw new Error(error)
            }

        }

    //💜 delete
        async borrarInfo (idBorrado){
            const posicion = this.idDueños.findIndex(idDueño=> idDueño.id===parseInt(idBorrado));
            this.idDueños.splice(posicion, 1);
            try {
                const queryStrings= `
                DELETE FROM idDueños WHERE iddueño = $1
                `;
                const params = [idBorrado];
                const resultado= await conect.query(queryStrings, params);
                
            } catch (error) {
                throw new Error(error)
            }
        }
    }

    module.exports = { idDueños }


    // los servicios manejan los datos 