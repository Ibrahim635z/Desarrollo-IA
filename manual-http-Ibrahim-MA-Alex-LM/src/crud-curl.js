import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 4000;
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost';

const BASE_URL = `${API_BASE_URL}:${PORT}`;


/**
 * Imprime por consola el comando cURL para crear un nuevo estudiante.
 * @param {object} studentData - Objeto con los datos del nuevo estudiante.
 */

const createStudent = (studentData) => {
  console.log(' COMANDO PARA CREAR UN ESTUDIANTE (CREATE)');
  const dataString = JSON.stringify(studentData);
  const comando = `curl -X POST -H "Content-Type: application/json" -d '${dataString}' ${BASE_URL}/students`;
  console.log(comando + '\n');
};

/**
 * Imprime por consola el comando cURL para obtener todos los estudiantes.
 */

const readAllStudents = () => {
  console.log('COMANDO PARA LEER TODOS LOS ESTUDIANTES (READ ALL)');
  const comando = `curl -X GET ${BASE_URL}/students`;
  console.log(comando + '\n');
};

/**
 * Imprime por consola el comando cURL para leer un estudiante por su ID.
 * @param {string|number} id - El ID del estudiante.
 */

const readStudentById = (id) => {
  console.log(`COMANDO PARA LEER EL ESTUDIANTE CON ID ${id} (READ BY ID)`);
  const comando = `curl -X GET ${BASE_URL}/students/${id}`;
  console.log(comando + '\n');
};


/**
 * Imprime por consola el comando cURL para actualizar un estudiante completamente (PUT).
 * @param {string|number} id - El ID del estudiante a actualizar.
 * @param {object} studentData - El objeto con los datos completos del estudiante.
 */

const updateStudent = (id, studentData) => {
  console.log(`COMANDO PARA ACTUALIZAR (PUT) EL ESTUDIANTE CON ID ${id}`);
  const dataString = JSON.stringify(studentData);
  const comando = `curl -X PUT -H "Content-Type: application/json" -d '${dataString}' ${BASE_URL}/students/${id}`;
  console.log(comando + '\n');
};

/**
 * Imprime por consola el comando cURL para actualizar parcialmente un estudiante (PATCH).
 * @param {string|number} id - El ID del estudiante a actualizar.
 * @param {object} partialData - El objeto con los campos a modificar.
 */

const patchStudent = (id, partialData) => {
  console.log(`COMANDO PARA ACTUALIZAR PARCIALMENTE (PATCH) EL ESTUDIANTE CON ID ${id} `);
  const dataString = JSON.stringify(partialData);
  const comando = `curl -X PATCH -H "Content-Type: application/json" -d '${dataString}' ${BASE_URL}/students/${id}`;
  console.log(comando + '\n');
};

/**
 * Imprime por consola el comando cURL para eliminar un estudiante por su ID.
 * @param {string|number} id - El ID del estudiante a eliminar.
 */

const deleteStudent = (id) => {
  console.log(`COMANDO PARA ELIMINAR (DELETE) EL ESTUDIANTE CON ID ${id}`);
  const comando = `curl -X DELETE ${BASE_URL}/students/${id}`;
  console.log(comando + '\n');
};



console.log('INICIO DE LA EJECUCION DEL SCRIPT CRUD');
console.log('A continuación se mostrarán los comandos cURL para cada operación CRUD:\n');

const nuevoEstudiante = {
  name: "Alberto",
  lastname: "Martinez",
  email: "alberto53@test.com",
  level: "Intermedio",
  active: true
};

const datosCompletosUpdate = {
  name: "Alberto",
  lastname: "Martinez",
  email: "alberto.actualizado@test.com",
  level: "Avanzado",
  active: true
};

const datosParcialesPatch = {
  email: "Alberto.nuevoEmail@test.com"
};

// Llamo a todas las funciones

createStudent(nuevoEstudiante);
readAllStudents();
readStudentById(8);
updateStudent(8, datosCompletosUpdate);
patchStudent(8, datosParcialesPatch);
deleteStudent(8);

console.log('FINALIZADA LA EJECUCION');