import { createList, editList, deleteBook } from "./functions.js";
import { read, write } from "./CRUD/crud.js";
import { check } from "./util/checkParm.js";
import { findID } from "./util/findID.js";

// Forma de los objetos a guardar en orden de ingreso en argv
// title (título)
// author (autor)
// genre (género)
// year (año de publicación)
// cost (precio de compra)
// price (precio de venta)

const list = read("./data/data.json");
const writeList = write("./data/data.json");
const comand = process.argv[2];
const parametros = process.argv.slice(3);

if (check(parametros)){
    switch (comand) {
        case "new":
            const libro = createList(parametros);
             libro 
             ? writeList(list.concat(libro)) 
             : console.log("el libro que se intenta guardar ya existe")
            break;

        case "read":
            console.log(list);
            break;

        case "edit":
            findID(list, parametros[0]).length !== 0 
            ? writeList(editList(parametros)) 
            : console.log("id no encontrado")
            break;

        case "delete":
            findID(list, parametros[0]).length !== 0
            ? writeList(deleteBook(parametros[0]))
            : console.log("id no encontrado");
            break;
        default:
            console.log("comando inválido");
            break;
    }
}else {
    console.log("faltan parametros válidos")
}