// recorre los parametros (array) hasta el limite que se pase por parametros
// se fija si alguno es undefined o null o el tamaño de params es distinto al limite

const checkParams = (params, limit) => {
	for (let i = 0; i < limit; i++) {
		if (!params[i] || params.length !== limit) {
			return false;
		}
	}
	return true;
};

export { checkParams };
