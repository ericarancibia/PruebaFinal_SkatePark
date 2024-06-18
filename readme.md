# Prueba Final, Módulo VIII - Skate Park

## Descripción del proyecto

- Habilidades a evaluar:
    - Crear una API REST con el Framework Express.
    - Servir contenido dinámico con express-handlebars.
    - Ofrecer la funcionalidad Upload File con express-fileupload.
    - Implementar seguridad y restricción de recursos o contenido con JWT.
    - Descripción

La Municipalidad de Santiago, ha organizado una competencia de Skate para impulsar el nivel deportivo de los jóvenes que desean representar a Chile en los X Games del próximo año, y han iniciado con la gestión para desarrollar la plataforma web en la que los participantes se podrán registrar y revisar el estado de su solicitud.

En esta prueba deberás ocupar todos tus conocimientos para desarrollar un sistema que involucre tus habilidades como Full Stack Developer consolidando tus competencias en el frontend y backend.

Las tecnologías y herramientas que deberás ocupar son las siguientes:
- Express
- Handlebars
- PostgreSQL
- JWT
- Express-fileupload

## Prerrequisitos o Dependencias
- Windows, Mac, Linux.
- Visual Studio Code.
- Javascript, Node.js, GitHub.
- pgAdmin. 
- Postman.

### Para inicializar el programa se requiere:

- Instalar las dependencias dotenv, express, express-fileupload, express-handlebars, jsonwebtoken y pg e instalarlas con el comando `npm i dotenv express express-fileupload express-handlebars jsonwebtoken pg`.

### Instrucciones de uso:

- Crear un archivo .env:

    - DB_HOST=localhost
    - DB_DATABASE=skatepark
    - DB_USER=postgres
    - DB_PASSWORD=
    - DB_PORT=

    - SECRET_KEY=



- Ruta para la página Principal: http://localhost:3000/ 

![Imagen](/public/assets/img/inicio.png)


- Ingreso; hacer click en `Registrarme`, ingresar los datos, elegir fotografía y hacer click en `Registrarme`:

![Imagen](/public/assets/img/agregar.png)
![Imagen](/public/assets/img/agregar2.png)


- Editar Perfil; hacer Login ingresando las credenciales y haciendo click en `Ingresar`. Luego Editar datos a elección y hacer click en `Actualizar`:

![Imagen](/public/assets/img/editar1.png)
![Imagen](/public/assets/img/editar2.png)


- Eliminar Cuenta; Hacer Login y hacer click en `Eliminar Cuenta`:

![Imagen](/public/assets/img/eliminar.png)
![Imagen](/public/assets/img/eliminar2.png)


- Ruta para acceder a Página de Admin:  http://localhost:3000/admin/

- Modidicar Estado Cuenta; hacer click en casilla correspondiente para dejar "En Revisión" o "Aprobado":

![Imagen](/public/assets/img/admin.png)
![Imagen](/public/assets/img/admin2.png)


## Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE.md](LICENSE) para detalles

------------------------------------------------------------------------------------------------------------------------------------

## Eric Arancibia (https://github.com/ericarancibia) - G68 Desarrollo Aplicaciones Full Stack JavaScript. Talento Digital - Academia Desafío Latam