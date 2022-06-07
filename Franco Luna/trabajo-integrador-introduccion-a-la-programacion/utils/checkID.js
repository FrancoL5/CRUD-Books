// Checkea si en la lista está la ID que se pasa por parametro
// si está suma 1 al check, sino devuelve el check sin modificar

const checkID = (list, id) =>
	list.reduce((check, elem) => (elem.id === id ? ++check : check), 0);

export { checkID };
