# DOTImages | API

Proyecto de Node, donde se creó la api que se utiliza, [en la aplicación de Next](https://github.com/Leonardo-G/dotimage-back), para la creación de nuevos usuarios y guardar a favoritos.

### Instalación

Una vez clonado el repositorio o descargado el los archivos del repositorio, para poder iniciar la aplicación en tu entorno local, hay que instalar las dependencias necesarias con:

```
npm install
```
Una vez instalado, crear el archivo .ENV y luego crear la variable PALABRA_SECRET= y completar con la palabra secreta para eñ JWT. Ahora si, podemos correr la aplicación en un servidor local con:
```
node app
```

### Herramientas utilizadas para crear este proyecto.
- bcryptjs: Hasheo de contraseñas: V2.4.3
- cors:     Middleware para habilitar CORS. V2.8.5
- dotenv:   Permitir el uso de variables de entorno en la aplicación: V16.0.3
- express:  Marco de NodeJS facilitando el desarrollo. V4.18.2
- express-validator: Middleware que valida el dato expecificado: V6.14.2
- jsonwebtoken: Creacion de tokens: V8.5.1
- mysql2:   Mysql con Node.
- sequelzie: Herramienta ORM Node: V6.25.3

