#!/bin/bash

# Colores para la salida
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Contador de errores
errors=0

# Función para imprimir validaciones
check() {
    if [ "$?" -eq 0 ]; then
        echo -e "  ${GREEN}✓${NC} $1"
    else
        echo -e "  ${RED}✗${NC} $1"
        errors=$((errors + 1))
    fi
}

echo "--- Iniciando validación del proyecto ---"

# 1. Validación de existencia de archivos y carpetas
echo "1. Verificando estructura de archivos y carpetas..."
[ -d "src" ]
check "Existe la carpeta 'src'"
[ -d "src/db" ]
check "Existe la carpeta 'src/db'"
[ -f "src/db/db.json" ]
check "Existe el archivo 'src/db/db.json'"
[ -f "src/crud-curl.js" ]
check "Existe el archivo 'src/crud-curl.js'"
[ -d "images" ]
check "Existe la carpeta 'images'"
[ -d "scripts" ]
check "Existe la carpeta 'scripts'"
[ -f "package.json" ]
check "Existe el archivo 'package.json'"
[ -f ".gitignore" ]
check "Existe el archivo '.gitignore'"
[ -f ".env.example" ]
check "Existe el archivo '.env.example'"
[ -f "README.md" ]
check "Existe el archivo 'README.md'"
[ -f "checklist.md" ]
check "Existe el archivo 'checklist.md'"
[ -f "peticiones-crud.http" ]
check "Existe el archivo 'peticiones-crud.http'"

# 2. Validación de contenido en package.json
echo -e "\n2. Verificando contenido de package.json..."
grep -q '"type": "module"' package.json
check 'El proyecto está configurado como ESM ("type": "module")'
grep -q '"json-server":' package.json
check 'Dependencia "json-server" está instalada'
grep -q '"dotenv":' package.json
check 'Dependencia "dotenv" está instalada'
grep -q '"server:up":' package.json
check 'Existe el script "server:up"'
grep -q '"crud:curl":' package.json
check 'Existe el script "crud:curl"'

# 3. Validación de capturas de Thunder Client
echo -e "\n3. Verificando capturas de pantalla..."
num_images=$(find images/ -type f | wc -l)
[ $num_images -ge 6 ]
check "Existen al menos 6 capturas en la carpeta 'images' (encontradas: $num_images)"

# --- Conclusión ---
echo -e "\n--- Validación Finalizada ---"
if [ "$errors" -eq 0 ]; then
    echo -e "${GREEN}¡Felicidades! Todas las validaciones pasaron correctamente.${NC}"
else
    echo -e "${RED}Se encontraron $errors errores. Por favor, revisa los puntos marcados con ✗.${NC}"
    exit 1
fi