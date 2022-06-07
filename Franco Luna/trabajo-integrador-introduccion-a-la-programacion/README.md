# ICARO - INTRODUCCIÓN A LA PROGRAMACIÓN
## Trabajo Integrador
#### Aquí están las consignas planteadas para la entrega del Trabajo Integrador de Introducción a la Programación para la Diplomatura Universitaria en Programación Web Full Stack de Icaro.

---
## Modo de Uso
los comandos toman una cantidad fija de parametros
  - `new` toma 6 parámetros
  - `edit` toma 7, primero el id, que se escriben como el título del libro con "-" adelante y atrás. Ej: "-Elantris-" y los 6 campos obligatorios a cambiar
  - `read` no toma parámetros
  - `delete` toma el id
  
Los parámetros no pueden ser comillas vacías, "", pero pueden tener un espacio.
Si se escriben más o menos parámetros de los que son esperados da error.

---

## Aplicación de Tienda de Libros 📚
Se deberá crear una aplicación de consola que permita la carga, lectura, edición y borrado de distintos libros a una pequeña "base de datos" de una tienda de libros.

Deberá contar con una "base de datos" 📜, que será un archivo JSON con un array de Objetos Literales que representará el inventario de nuestra tienda (al menos 4 libros).

Todo el código deberá escribirse con la sintaxis moderna que se ha visto en clases. 💻

- Carga ➕ 👉 Deberá tomar por consola el comando `new` seguido de otros comandos basados en los siguientes campos:
  - **_title_** (título)
  - **_author_** (autor)
  - **_genre_** (género)
  - **_year_** (año de publicación)
  - **_cost_** (precio de compra)
  - **_price_** (precio de venta)
  
  Aquí se deberán cargar strings para cada uno de esos campos.
  Luego deberá tomar esos datos y agregar un nuevo Objeto Literal con los mismos a la base de datos, tener en cuenta que se deberá agregar un campo ***id*** (con los cálculos correspondientes para que siempre se le agregue un **_id_** no existente) como identificador.

- Lectura 🤓 👉 Deberá tomar por consola el comando ```read``` y se deberá visualizar por consola el array completo de los libros disponibles.

- Edición 📝 👉 Deberá tomar por consola el comando `edit` seguido del **_id_** del libro a modificar y de los mismos campos que en la carga (con los datos finales del libro).

- Borrado 🗑 👉 Deberá tomar por consola el comando `delete` seguido del **_id_** del libro a eliminar.

---

## Entrega 📬
El formato de entrega será en este mismo repositorio, a través de una rama personalizada que se deberá llamar con el apellido del/los alumno/s. Ej: **aguirre** o **aguirre-gomez-lopez**.

*Se deberá clonar este repositorio en su entorno local así se tiene la consigna disponible y ya queda seteado el remoto para empujar los cambios a medida que se vaya trabajando. Luego de clonarlo, se deberá crear inmediatamente la rama propia y desde allí comenzar a trabajar.*

## IMPORTANTE 
**Tener cuidado de no modificar o editar la rama master, y de hacerlo, descartar los cambios en la misma para que a la hora de empujar los cambios no se envíen hacia aquí, para que la rama master quede limpia y solamente contenga el readme.md.**
