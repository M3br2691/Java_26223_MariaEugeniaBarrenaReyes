# Sistema de Gestión de Artículos

## Descripción

Proyecto de gestión de artículos desarrollado durante el curso **Back End Java de Talento Tech**, Comisión 26223.

La aplicación permite realizar operaciones CRUD (crear, consultar, actualizar y eliminar artículos) mediante una API REST desarrollada con Java y Spring Boot, conectada a una base de datos MariaDB.

Cuenta con un frontend web que permite interactuar con el sistema desde el navegador, facilitando la gestión de los artículos mediante formularios, búsquedas y listados.

## Tecnologías utilizadas

**Backend**
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- Jakarta Bean Validation
- Maven

**Base de datos**
- MariaDB

**Frontend**
- HTML
- CSS
- JavaScript
- Bootstrap 5

**Herramientas**
- Visual Studio Code
- Postman
- XAMPP
- Git y GitHub

## Estructura del proyecto

- `src/main/java`: código fuente del backend.
  - `controller`: recibe y gestiona las solicitudes HTTP.
  - `model`: contiene la clase Articulo.
  - `repository`: gestiona el acceso a los datos.
  - `service`: contiene la lógica de las operaciones.
- `src/main/resources`: archivos de configuración.
- `frontend`: archivos de la interfaz web.
  - `index.html`: estructura de la página.
  - `css/styles.css`: estilos visuales.
  - `js/app.js`: lógica e interacción con la API.

## Funcionalidades

El sistema permite:

- Registrar artículos nuevos.
- Listar todos los artículos registrados.
- Consultar un artículo por su ID.
- Buscar artículos por nombre.
- Modificar artículos existentes.
- Eliminar artículos.
- Mostrar todos los artículos.
- Limpiar la vista de resultados sin eliminar los registros de la base de datos.

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
| GET | `/articulos/{id}` | Consultar artículo por ID |
| POST | `/articulos` | Registrar artículo |
| PUT | `/articulos/{id}` | Actualizar artículo |
| DELETE | `/articulos/{id}` | Eliminar artículo |

## Base de datos

La aplicación utiliza MariaDB mediante Spring Data JPA e Hibernate.

**Nombre de la base de datos:** `articulo_db`

La configuración de conexión se encuentra en `src/main/resources/application.properties`.

## Ejecución del proyecto

### 1. Iniciar la base de datos

- Abrir XAMPP Control Panel.
- Iniciar el servicio MySQL (MariaDB).

### 2. Configurar la base de datos

- Crear la base de datos `articulo_db` si todavía no existe.
- Verificar los datos de conexión en `application.properties`.

### 3. Ejecutar el backend

- Abrir el proyecto en Visual Studio Code.
- Ejecutar la clase principal `ArticuloPracticaApplication`.
- El backend se inicia localmente en el puerto `8080`.

La API queda disponible en:

`http://localhost:8080/articulos`

### 4. Ejecutar el frontend

- Abrir la carpeta `frontend` en Visual Studio Code.
- Abrir el archivo `index.html`.
- Ejecutarlo mediante la extensión Live Server, seleccionando **Open with Live Server**.

La interfaz web se abrirá en el navegador y podrá comunicarse con el backend mientras este se encuentre en ejecución.

**Importante:** para utilizar la aplicación deben estar funcionando tanto el servicio de base de datos como el backend.

El video explicativo se encuentra en el siguiente link: https://www.youtube.com/watch?v=GQ3haFycXC0
## Autora

**María Eugenia Barrena Reyes**

Curso Back End Java — Talento Tech  
Comisión 26223

Año 2026