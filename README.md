# Sistema de Gestión de Artículos

## Descripción

Proyecto de gestión de artículos desarrollado durante el curso Back End Java de Talento Tech.

La aplicación permite realizar operaciones CRUD (crear, consultar, actualizar y eliminar artículos), mediante un backend desarrollado con Java y Spring Boot, conectado a una base de datos MariaDB y un frontend web.

## Tecnologías utilizadas

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MariaDB
- Maven
- HTML
- CSS
- JavaScript
- Bootstrap

## Estructura del proyecto

- `src/main/java`: código fuente del backend.
  - `controller`: recibe las solicitudes HTTP.
  - `model`: contiene la clase Articulo.
  - `repository`: gestiona el acceso a los datos.
  - `service`: contiene la lógica de las operaciones.
- `src/main/resources`: archivos de configuración.
- `frontend`: interfaz web de la aplicación.
  - `index.html`
  - `css/styles.css`
  - `js/app.js`

## Funcionalidades

- Listar artículos.
- Consultar un artículo por su ID.
- Registrar artículos nuevos.
- Modificar artículos existentes.
- Eliminar artículos.
- Buscar artículos por ID o por nombre.
- Mostrar todos los artículos registrados.

## Validaciones del backend

Se incorporaron validaciones mediante Jakarta Bean Validation para controlar los datos recibidos por la API.

En la clase `Articulo` se utilizan las siguientes anotaciones:

- `@NotBlank`: impide registrar un nombre vacío.
- `@NotNull`: exige que el precio tenga un valor.
- `@PositiveOrZero`: impide ingresar precios negativos.

En los métodos de registro (`POST`) y actualización (`PUT`) del controlador se utiliza `@Valid` para ejecutar estas validaciones antes de procesar los datos.

Las validaciones fueron comprobadas mediante Postman. Las solicitudes con datos inválidos reciben una respuesta HTTP `400 Bad Request`.

## Endpoints de la API

| Método HTTP | Endpoint | Operación |
|---|---|---|
| GET | `/articulos` | Listar artículos |
| GET | `/articulos/{id}` | Consultar artículo |
| POST | `/articulos` | Registrar artículo |
| PUT | `/articulos/{id}` | Actualizar artículo |
| DELETE | `/articulos/{id}` | Eliminar artículo |

## Base de datos

La aplicación utiliza MariaDB mediante Spring Data JPA.

Nombre de la base de datos: `articulo_db`

La configuración de conexión se encuentra en `application.properties`.

## Ejecución del proyecto

1. Iniciar MariaDB desde XAMPP.
2. Crear la base de datos `articulo_db`.
3. Configurar la conexión en `application.properties`.
4. Ejecutar la clase principal `ArticuloPracticaApplication`.
5. Abrir el archivo `frontend/index.html` en el navegador.

El backend se ejecuta localmente en el puerto 8080.

## Autora

María Eugenia Barrena Reyes

Curso Back End Java — Talento Tech  
Comisión 26223