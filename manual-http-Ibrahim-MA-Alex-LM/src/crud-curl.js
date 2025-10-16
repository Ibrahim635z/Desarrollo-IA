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
  console.log('### COMANDO PARA CREAR UN ESTUDIANTE (CREATE) ###');
  const dataString = JSON.stringify(studentData);
  const command = `curl -X POST -H "Content-Type: application/json" -d '${dataString}' ${BASE_URL}/students`;
  console.log(command + '\n');
};

/**
 * Imprime por consola el comando cURL para obtener todos los estudiantes.
 */
const readAllStudents = () => {
  console.log('### COMANDO PARA LEER TODOS LOS ESTUDIANTES (READ ALL) ###');
  const command = `curl -X GET ${BASE_URL}/students`;
  console.log(command + '\n');
};

/**
 * Imprime por consola el comando cURL para leer un estudiante por su ID.
 * @param {string|number} id - El ID del estudiante que se quiere leer.
 */
const readStudentById = (id) => {
  console.log(`### COMANDO PARA LEER EL ESTUDIANTE CON ID ${id} (READ BY ID) ###`);
  const command = `curl -X GET ${BASE_URL}/students/${id}`;
  console.log(command + '\n');
};


/**
 * Imprime por consola el comando cURL para actualizar un estudiante completamente (PUT).
 * @param {string|number} id - El ID del estudiante a actualizar.
 * @param {object} studentData - El objeto con los datos completos del estudiante.
 */
const updateStudent = (id, studentData) => {
  console.log(`### COMANDO PARA ACTUALIZAR (PUT) EL ESTUDIANTE CON ID ${id} ###`);
  const dataString = JSON.stringify(studentData);
  const command = `curl -X PUT -H "Content-Type: application/json" -d '${dataString}' ${BASE_URL}/students/${id}`;
  console.log(command + '\n');
};

/**
 * Imprime por consola el comando cURL para actualizar parcialmente un estudiante (PATCH).
 * @param {string|number} id - El ID del estudiante a actualizar.
 * @param {object} partialData - El objeto con los campos a modificar.
 */
const patchStudent = (id, partialData) => {
  console.log(`### COMANDO PARA ACTUALIZAR PARCIALMENTE (PATCH) EL ESTUDIANTE CON ID ${id} ###`);
  const dataString = JSON.stringify(partialData);
  const command = `curl -X PATCH -H "Content-Type: application/json" -d '${dataString}' ${BASE_URL}/students/${id}`;
  console.log(command + '\n');
};

/**
 * Imprime por consola el comando cURL para eliminar un estudiante por su ID.
 * @param {string|number} id - El ID del estudiante a eliminar.
 */
const deleteStudent = (id) => {
  console.log(`### COMANDO PARA ELIMINAR (DELETE) EL ESTUDIANTE CON ID ${id} ###`);
  const command = `curl -X DELETE ${BASE_URL}/students/${id}`;
  console.log(command + '\n');
};



// --- ZONA DE EJECUCIÓN DEL SCRIPT ---



console.log('--- INICIO DE LA EJECUCIÓN DEL SCRIPT CRUD ---');
console.log('A continuación se mostrarán los comandos cURL para cada operación CRUD:\n');

// Datos de ejemplo
const nuevoEstudiante = {
  name: "Carlos",
  lastname: "Santana",
  email: "carlos.santana@test.com",
  level: "Intermedio",
  active: true
};

const datosCompletosUpdate = {
  name: "Carlos",
  lastname: "Santana",
  email: "carlos.santana.updated@test.com",
  level: "Avanzado",
  active: true
};

const datosParcialesPatch = {
  email: "carlos.new.email@test.com"
};

// Llamada a todas las funciones
// NOTA: Usamos el ID 8 como ejemplo, ya que tu db.json tiene 7 estudiantes. El próximo que se cree tendrá el ID 8.
createStudent(nuevoEstudiante);
readAllStudents();
readStudentById(8);
updateStudent(8, datosCompletosUpdate);
patchStudent(8, datosParcialesPatch);
deleteStudent(8);

console.log('--- FIN DE LA EJECUCIÓN DEL SCRIPT CRUD ---');