Descripción

Este proyecto implementa una API backend construida con Node.js, Express y MongoDB que permite gestionar recursos (usuarios, productos, pedidos) empleando persistencia de datos, rutas REST-ful, middleware personalizado y buenas prácticas de desarrollo.

Tecnologías utilizadas

Node.Js - Express - MongoDB - Mongoose - Handlebars.

Funcionalidades principales

Registro, autenticación y gestión de usuarios.

Operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre recursos definidos

Validaciones de datos de entrada

Manejo de errores centralizado

Persistencia en base de datos MongoDB

Uso de variables de entorno para configuración (por ejemplo, URI de base de datos, puerto HTTP)

Instalación y puesta en marcha

1. Clona el repositorio:

git clone https://github.com/AgustinAlvarez04/Proyecto-Backend-1-Agustin-Alvarez.git


2. Entra al directorio del proyecto:

cd Proyecto-Backend-1-Agustin-Alvarez


3. Instala dependencias:

npm install


4. Configura variables de entorno en un archivo .env (por ejemplo):

PORT=3000
MONGODB_URI=mongodb://localhost:27017/nombreBaseDatos


5. Inicia la aplicación:

npm start


6. La API estará disponible en http://localhost:<PORT> (por defecto 3000).

