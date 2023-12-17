### Características

- Uso de MySQL database
- Uso de OMR Sequelize

### Tecnologías

- Node.js: Es un entorno en tiempo de ejecución de JavaScript integrado en el motor JavaScript V8 de Chrome.
- Express.js: Es un framework de aplicación web para Node.js.
- MySQL: Sistema de gestión de bases de datos relacionales

###  Ejecución

1- Clonar el repositorio
2- Instalar dependencias usando el comando `npm install` o `npm i`
3- Crear la base de datos haciendo uso del script MySQL ubicado en la carpeta de "DB_Script"
4- Crear un archivo `.env`con la siguiente información:
```javascript
#Las variables pueden ser modificadas según se vea necesario

DB_NAME: 'prueba'
DB_USER: 'root'
DB_PASS: ''
DB_HOST: 'localhost'
DB_DIALECT: 'mysql'
DB_PORT: '3306'
```
5- Ejecutar el servidor `npm run dev`
