import { edit, borrar, create, write, read } from "./CRUD/crud.js";
import { checkID } from "./utils/checkID.js";
import { checkParams } from "./utils/checkParams.js";

const dir = "./Data/data.json";
const list = read(dir);
const command = process.argv[2];
const param = process.argv.slice(3);
const id = "-" + param[0] + "-";


switch (command) {
	case "read":
		console.log(list);
		break;

	case "create":
		console.log(
			!checkID(list, id) && checkParams(param, 6)
				? write(dir, list.concat(create(...param)))
				: "error"
		);
		break;

	case "edit":
		console.log(
			checkParams(param, 7) && checkID(list, param[0]) 
				? write(dir,edit(list, param[0], create(...param.slice(1))))
				: "error"
		);
		break;
    case "delete":
        console.log(
            checkParams(param, 1) && checkID(list, param[0])
            ? write(dir, borrar(param[0], list))
            : "error"
        );
        break;

	default:
		console.log("comando incorrecto");
		break;
}
