import fs from "fs";
import path from "path";

const readFiles = (filepath) => {
    const absolutePath = path.resolve(filepath);
    const readfile = fs.readFileSync(absolutePath, 'utf-8');
    const jsonParseData = JSON.parse(readfile);
    return jsonParseData;
};

export default readFiles;