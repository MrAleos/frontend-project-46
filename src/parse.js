import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readFiles = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const readfile = fs.readFileSync(absolutePath, 'utf-8');
  const jsonParseData = JSON.parse(readfile);
  return jsonParseData;
};

const gendiff = (file1, file2) => {
  const file1KeysArray = Object.keys(file1);
  const file2KeysArray = Object.keys(file2);
  const allKeysArray = _.uniq(file1KeysArray
    .concat(file2KeysArray))
    .sort();
  const resultArray = [];
  allKeysArray.map((key) => {
    if (file1.hasOwnProperty(key) && file2.hasOwnProperty(key)) {
      if (file1[key] === file2[key]) {
        resultArray.push(`   ${key}: ${file1[key]}`);
      } else {
        resultArray.push(` - ${key}: ${file1[key]}`);
        resultArray.push(` + ${key}: ${file2[key]}`);
      }
    } else if (file1.hasOwnProperty(key) && !file2.hasOwnProperty(key)) {
      resultArray.push(` - ${key}: ${file1[key]}`);
    } else if (file2.hasOwnProperty(key) && !file1.hasOwnProperty(key)) {
      resultArray.push(` + ${key}: ${file2[key]}`);
    }
  });
  let resultString = '{\n';
  for (let i = 0; i < resultArray.length; i += 1) {
    resultString += `${resultArray[i]}\n`;
  }
  resultString += '}';
  return resultString;
};

export { readFiles, gendiff };
