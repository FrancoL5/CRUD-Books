const edit = (list, id, newBook) =>
	list.filter(elem => elem.id !== id).concat(newBook);

export { edit };
