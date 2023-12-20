// aqui es donde comienza la estructura buena 
class idDueños {
    constructor () {
        this.idDueños = []
        this.generadorData();
        
    }
    //❌⭕❌⭕❌⭕❌⭕❌⭕❌⭕ es como si aquí estubierá la BD (sigamos fingiendo )❌⭕❌⭕❌⭕❌⭕❌⭕❌⭕❌⭕❌⭕
    generadorData() {
            this.idDueños = [
                { id: 1, nombre: "Dayé", mascota: "gato" },
                { id: 2, nombre: "Azul ", mascota: "ratón" },
                { id: 3, nombre: "Erika ", mascota: "perro" },
                { id: 4, nombre: "Leyla", mascota: "mapache " },
                { id: 5, nombre: "Levi ", mascota: "conejo " },
            ];
        }

    // aqui se encontraran todos los endpoints que se usarán  (un poco diferentes, pero hacen lo mismmo )
// en este caso, como es un array, los metodos que se usan para sacar, meter, medificar o borrar informacion son diferentes a como se usaría realmente en una BD
    //💜 get 
        getDueños (){
            return this.idDueños
            
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