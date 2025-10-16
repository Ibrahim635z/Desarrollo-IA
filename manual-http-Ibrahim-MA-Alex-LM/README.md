# CRUD de Estudiantes con cURL

En esta sección se documentan todas las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) realizadas mediante comandos cURL sobre la API de estudiantes.

---

### 1. CREATE - Crear un nuevo estudiante (POST)

**Descripción:**
Este comando envía una petición `POST` al endpoint `/students` para añadir un nuevo estudiante a la base de datos. El cuerpo de la petición (`-d`) contiene un objeto JSON con los datos del estudiante.

**Comando cURL:**
```bash
curl -i -X POST -H "Content-Type: application/json" -d '{"name":"Carlos","lastname":"Santana","email":"carlos.santana@test.com","level":"Intermedio","active":true}' http://localhost:4000/students

```

**Respuesta HTTP obtenida**

```bash

HTTP/1.1 201 Created
X-Powered-By: tinyhttp
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE
Access-Control-Allow-Headers: content-type
Content-Type: application/json
Date: Wed, 15 Oct 2025 16:30:10 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 144

{
  "id": "305d",
  "name": "Carlos",
  "lastname": "Santana",
  "email": "carlos.santana@test.com",
  "level": "Intermedio",
  "active": true
}

```

### 2. READ ALL - Leer todos los estudiantes (GET)

**Descripción:**
Este comando envía una petición `GET` al endpoint `/students` para solicitar una lista de todos los estudiantes existentes en la base de datos.

**Comando cURL:**
```bash
curl -i -X GET http://localhost:4000/students

```

**Respuesta HTTP obtenida**

```bash

HTTP/1.1 200 OK
X-Powered-By: tinyhttp
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE
Access-Control-Allow-Headers: content-type
Content-Type: application/json
Date: Wed, 15 Oct 2025 16:34:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 1604

[
  {
    "id": "1",
    "name": "María García López",
    "email": "maria.garcia@email.com",
    "enrollmentDate": "2024-09-15",
    "active": true,
    "level": "intermediate"
  },
  {
    "id": "2",
    "name": "Carlos Rodríguez Martín",
    "email": "carlos.rodriguez@email.com",
    "enrollmentDate": "2024-10-01",
    "active": true,
    "level": "beginner"
  },
  {
    "id": "3",
    "name": "Ana Fernández Silva",
    "email": "ana.fernandez@email.com",
    "enrollmentDate": "2024-08-20",
    "active": false,
    "level": "advanced"
  },
  {
    "id": "4",
    "name": "David Sánchez Torres",
    "email": "david.sanchez@email.com",
    "enrollmentDate": "2024-09-10",
    "active": true,
    "level": "intermediate"
  },
  {
    "id": "5",
    "name": "Laura Martínez Ruiz",
    "email": "laura.martinez@email.com",
    "enrollmentDate": "2024-09-25",
    "active": true,
    "level": "beginner"
  },
  {
    "id": "6",
    "name": "Javier López Gómez",
    "email": "javier.lopez@email.com",
    "enrollmentDate": "2024-07-15",
    "active": true,
    "level": "advanced"
  },
  {
    "id": "7",
    "name": "Elena Díaz Moreno",
    "email": "elena.diaz@email.com",
    "enrollmentDate": "2024-09-05",
    "active": false,
    "level": "intermediate"
  },
  {
    "id": "1006",
    "name": "Carlos",
    "lastname": "Santana",
    "email": "carlos.santana@test.com",
    "level": "Intermedio",
    "active": true
  },
  {
    "id": "305d",
    "name": "Carlos",
    "lastname": "Santana",
    "email": "carlos.santana@test.com",
    "level": "Intermedio",
    "active": true
  }
]

```


### 3. READ BY ID - Leer un estudiante específico (GET)

**Descripción:**
Este comando envía una petición `GET` a un endpoint específico, `/students/{id}`, para recuperar los datos de un único estudiante identificado por su id

**Comando cURL:**
```bash
curl -i -X GET http://localhost:4000/students/3

```

**Respuesta HTTP obtenida**

```bash

HTTP/1.1 200 OK
X-Powered-By: tinyhttp
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE
Access-Control-Allow-Headers: content-type
Content-Type: application/json
Date: Wed, 15 Oct 2025 16:36:45 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 163

{
  "id": "3",
  "name": "Ana Fernández Silva",
  "email": "ana.fernandez@email.com",
  "enrollmentDate": "2024-08-20",
  "active": false,
  "level": "advanced"
}

```


### 4. UPDATE - Actualizar un estudiante (PUT)

**Descripción:**
Este comando usa el método `PUT` para reemplazar completamente los datos de un estudiante existente, identificado por su id en la URL.

**Comando cURL:**
```bash
curl -i -X PUT -H "Content-Type: application/json" -d '{"name":"Carlos","lastname":"Santana","email":"carlos.santana.updated@test.com","level":"Avanzado","active":true}' http://localhost:4000/students/3

```

**Respuesta HTTP obtenida**

```bash

HTTP/1.1 200 OK
X-Powered-By: tinyhttp
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE
Access-Control-Allow-Headers: content-type
Content-Type: application/json
Date: Wed, 15 Oct 2025 16:38:24 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 147

{
  "name": "Carlos",
  "lastname": "Santana",
  "email": "carlos.santana.updated@test.com",
  "level": "Avanzado",
  "active": true,
  "id": "3"
}

```

### 5. PARTIAL UPDATE - Actualizar parcialmente un estudiante (PATCH)

**Descripción:**
Este comando usa el método `PATCH` para modificar uno o más campos de un estudiante existente sin afectar a los demás.
**Comando cURL:**
```bash
curl -i -X PATCH -H "Content-Type: application/json" -d '{"email":"carlos.new.email@test.com"}' http://localhost:4000/students/3

```

**Respuesta HTTP obtenida**

```bash

HTTP/1.1 200 OK
X-Powered-By: tinyhttp
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE
Access-Control-Allow-Headers: content-type
Content-Type: application/json
Date: Wed, 15 Oct 2025 16:39:46 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 141

{
  "name": "Carlos",
  "lastname": "Santana",
  "email": "carlos.new.email@test.com",
  "level": "Avanzado",
  "active": true,
  "id": "3"
}

```

### 6. DELETE - Eliminar un estudiante (DELETE)

**Descripción:**
Este comando envía una petición `DELETE` a un endpoint específico `/students/{id}` para eliminar permanentemente a un estudiante de la base de datos.
**Comando cURL:**
```bash
curl -i -X DELETE http://localhost:4000/students/3

```

**Respuesta HTTP obtenida**

```bash

HTTP/1.1 200 OK
X-Powered-By: tinyhttp
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE
Access-Control-Allow-Headers: content-type
Content-Type: application/json
Date: Wed, 15 Oct 2025 16:41:14 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 141

{
  "name": "Carlos",
  "lastname": "Santana",
  "email": "carlos.new.email@test.com",
  "level": "Avanzado",
  "active": true,
  "id": "3"
}

```

---

## Pruebas con Thunder Client

A continuación se muestran las capturas de las peticiones CRUD realizadas con la extensión Thunder Client.

### CREATE Student (POST)
![Crear estudiante con Thunder Client](images/CREATE%20STUDENT.png)

### GET All Students (GET)
![Obtener todos los estudiantes con Thunder Client](images/GET%20STUDENTS.png)

### Get Student By ID
![Obtener estudiantes por ID con thunder client](images/GET%20STUDENT%20BY%20ID.png)

### UPDATE Student
![Actualizar estudiante con thunder client](images/UPDATE%20STUDENT.png)

### PATCH STUDENT
![Añadir un parametro al estudiante con thunder client](images/PATCH%20STUDENT.png)

### DELETE STUDENT
![Borrar estudiante con thunder client](images/DELETE%20STUDENT.png)


