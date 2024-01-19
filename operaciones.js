// app.js
const fs = require('fs');

let citas = [];

// Función para agregar una nueva cita
function agregarCita(nombre,edad,raza,color,sintoma) {
  // Leer citas existentes del archivo
 
  try {
    citas = JSON.parse(fs.readFileSync('citasVeterinarias.json', 'utf8'));
    console.log(citas)
  } catch (error) {
    // Manejar el error si el archivo no existe o no es válido
    console.error('Error al leer el archivo de citasVeterinarias.json:', error.message);
  }

  // Agregar la nueva cita al arreglo
  const nuevaCita = ({
    nombre,
    edad,
    raza,
    color,
    sintoma
  })
    
  
  citas.push(nuevaCita);

  // Escribir el arreglo actualizado en el archivo
  try {
    fs.writeFileSync('citasVeterinarias.json', JSON.stringify(citas, null,2));
    console.log('Cita agregada correctamente.');
  } catch (error) {
    console.error('Error al escribir en el archivo de citasVeterinarias.json:', error.message);
  }
}

function leer (){
  const citas = JSON.parse(fs.readFileSync('citasVeterinarias.json', 'utf8'));

  if(citas.length === 0){
    console.log('No hay citas registrados');
  } else {
    console.log('Citas registradas:');
    citas.forEach((cita, index) => {
      console.log(`${index + 1}. ${cita.nombre}, ${cita.edad}, ${cita.raza}, ${cita.color}, ${cita.sintoma}`);
    })

  }
}

// exportamos la funcion 
module.exports = {agregarCita, leer}
