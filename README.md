# DOTImages | API

Proyecto de NEST.js con Mongo, donde se creó la api que se utiliza, [en la aplicación de Next](https://github.com/Leonardo-G/dotimage-back), para la creación de nuevos usuarios y guardar a favoritos.

### Instalación
Una vez clonado el repositorio o descargado el los archivos del repositorio, para poder iniciar la aplicación en tu entorno local, hay que instalar las dependencias necesarias con:

```
npm install
```

Una vez instalado, crear el archivo .ENV y luego crear la variable PALABRA_SECRET= y completar con la palabra secreta para eñ JWT. Ahora si, podemos correr la aplicación en un servidor local con:

```
nest start
```

### Herramientas utilizadas para crear este proyecto.
- nestjs: v9.0.0
- bcrypt: v5.1.0
- dotenv: v16.3.1
- mysql2: v3.4.3
- @nestjs/mongoose: v10.0.0