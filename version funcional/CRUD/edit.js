// Forma de los objetos a guardar
// title (título)
// author (autor)
// genre (género)
// year (año de publicación)
// cost (precio de compra)
// price (precio de venta)

const edit = list => param => list
.filter(elem => elem.id !== param[0])
.concat({id:"-"+ param[1] + "-",title: param[1], author: param[2], genre: param[3], year:param[4], cost:param[5], price:param[6]})

export { edit };