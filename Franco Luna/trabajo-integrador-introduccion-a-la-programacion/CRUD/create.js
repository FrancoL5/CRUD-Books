// title (título)
// author (autor)
// genre (género)
// year (año de publicación)
// cost (precio de compra)
// price (precio de venta)

const create = (title, author, genre, year, cost, price) => ({
	title,
	author,
	genre,
	year,
	cost,
	price,
	id: "-" + title + "-",
});

export { create };
