# Checklist de Progreso del Ejercicio

## Fase 1: Configuración Inicial
- [x] Carpeta del proyecto creada.
- [x] `npm init` ejecutado y `package.json` completado.
- [x] Dependencias `json-server` y `dotenv` instaladas.
- [x] `package.json` configurado con `"type": "module"` y los scripts `server:up`, `crud:curl` y `validate`.
- [x] Archivos `.env` y `.env.example` creados con las variables correctas.
- [x] Archivo `.gitignore` creado e ignora `node_modules` y `.env`.
- [x] Archivo `src/db/db.json` creado con los datos iniciales.

## Fase 2: Script CRUD con cURL
- [x] Archivo `src/crud-curl.js` creado.
- [x] `dotenv` configurado correctamente al inicio del script.
- [x] Función `createStudent` implementada.
- [x] Función `readAllStudents` implementada.
- [x] Función `readStudentById` implementada.
- [x] Función `updateStudent` (PUT) implementada.
- [x] Función `patchStudent` (PATCH) implementada.
- [x] Función `deleteStudent` implementada.
- [x] Todas las funciones se ejecutan al final del script.

## Fase 3: Documentación
- [x] Documentación de cURL para CREATE en `README.md`.
- [x] Documentación de cURL para READ ALL en `README.md`.
- [x] Documentación de cURL para READ BY ID en `README.md`.
- [x] Documentación de cURL para UPDATE (PUT) en `README.md`.
- [x] Documentación de cURL para PATCH en `README.md`.
- [x] Documentación de cURL para DELETE en `README.md`.

## Fase 4: Thunder Client
- [x] Peticiones CRUD creadas en una colección.
- [x] 6 capturas de pantalla guardadas en `images/`.
- [x] Capturas de pantalla incluidas y descritas en `README.md`.

## Fase 5: REST Client
- [x] Archivo `peticiones-crud.http` creado con variables.
- [x] Todas las peticiones CRUD y con filtros implementadas.
- [x] Todas las peticiones probadas y funcionando.

## Fase 6: Validación
- [x] Script `scripts/validate.sh` creado y funcional.
- [x] El script `npm run validate` pasa sin errores.

## Fase 7: Git y Entrega
- [x] Repositorio Git inicializado y conectado a GitHub.
- [ ] Rama `m1/http-request-response` creada.
- [ ] Commits incrementales realizados con mensajes descriptivos.
- [ ] Rama subida al repositorio remoto.
- [ ] Pull Request creado con título y descripción detallada.