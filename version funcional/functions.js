import { create, read, borrar, edit } from "./CRUD/crud.js";
import { generateID } from "./util/generateID.js";
import { compose } from "./util/compose.js";
// import { findID } from "./util/findID.js";

const list = read("./data/data.json")
// const peek = x => console.log(x) || x
const createList = compose(
    generateID(list),
    // peek,
    create
);
const editList = edit(list);
const deleteBook = borrar(list);

export { editList, createList, deleteBook }