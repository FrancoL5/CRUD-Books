import { findID } from "./findID.js";

const generateID = list => object =>
  findID(list, "-" + object.title + "-").length === 0
    ? { ...object, id: "-" + object.title + "-" }
    : null;

export { generateID };
