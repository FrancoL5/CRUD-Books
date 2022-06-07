// Forma de los objetos a guardar
// title (título)
// author (autor)
// genre (género)
// year (año de publicación)
// cost (precio de compra)
// price (precio de venta)

const create = arr => ({title: arr[0], author: arr[1] , genre: arr[2], year: arr[3], cost: arr[4], price: arr[5]})
export { create };