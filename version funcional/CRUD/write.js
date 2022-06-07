import fs from "fs";

const write = dir => list => fs.writeFileSync(dir, JSON.stringify(list, null, 2));

export { write };
