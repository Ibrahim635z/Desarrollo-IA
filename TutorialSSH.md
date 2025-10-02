# Tutorial de Conexión SSH

---

## 1. Comandos SSH

-   `pwd`: Te dice dónde estás.
-   `ls ~/.ssh`: Para ver si ya tienes una conexión SSH configurada.
-   `ssh-keygen -t ed25519 -C "imohahm635z@g.educaand.es"`: Genera la clave pública y privada SSH.
-   `eval "$(ssh-agent -s)"`: Inicia el servidor SSH.
-   `ssh-add ~/.ssh/id_ed25519`: Añade la clave privada a tu sistema (la clave pública termina en `.pub`).
-   `cat ~/.ssh/id_ed25519.pub`: Muestra el contenido de la clave pública para que puedas copiarla y añadirla a GitHub.

---

## 2. Comandos Git

-   `mkdir carpeta`: Crea una carpeta.
-   `cd carpeta`: Entra en la carpeta.
-   `git init`: Inicializa el seguimiento de la carpeta.
-   `git config --global --list`: Muestra tu identificación de usuario y correo.
-   `git config --global user.name Ibrahim635z`: Configura tu nombre de usuario de GitHub.
-   `git config --global user.email imohahm635z@g.educaand.es`: Configura tu correo electrónico.
-   `echo "# Configurando SSH" > README.md`: Crea un archivo README.md.

---

## 3. Seguimiento y Commits

-   `git status -s`: Muestra el estado de los archivos.
    -   `??`: El archivo no tiene seguimiento.
    -   `A`: El archivo está en el área de seguimiento (stage).
    -   Si no sale nada de lo anterior, el archivo ya ha sido "committed".
-   `git add .`: Añade todos los archivos del directorio raíz al área de seguimiento.
-   `git add nombredelfichero`: Añade un archivo específico.
-   `git commit -m "Created: README.md"`: Crea un commit con un mensaje riguroso.
-   `git log --oneline`: Muestra información resumida sobre los commits.
-   `git log`: Muestra información más detallada.

---

## 4. Conexión y Sincronización

-   `git remote add origin git@github.com:Ibrahim635z/test-ssh-2.git`: Añade el repositorio remoto (la palabra `origin` es un alias para la ruta).
-   `git remote -v`: Comprueba la conexión con el repositorio remoto.
-   `pull`: Se usa para traer los cambios del repositorio remoto a tu máquina.
-   `push`: Se usa para subir tus cambios.
-   `git push origin master`: Sube los cambios a la rama `master` del repositorio remoto.