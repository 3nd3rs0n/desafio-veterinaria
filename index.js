const {agregarCita,leer} = require('./operaciones')

/* const [, , nombre, edad, raza, color, sintoma] = process.argv */
const [, , operaciones, nombre, edad, raza, color, sintoma] = process.argv

if(operaciones === "registrar"){
    agregarCita(nombre, edad, raza, color, sintoma)
    
}else if(operaciones === "leer"){
    leer()
}
    


