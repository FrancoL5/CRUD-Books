import fs from "fs";

const read = (dir) => JSON.parse(fs.readFileSync(dir));

export { read };
