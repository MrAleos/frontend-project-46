import path from 'path';
import _ from 'lodash';
import { parseJson, parseYaml } from './parsers.js';

const readFiles = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const format = path.extname(absolutePath);
  if (format === '.json') {
    return parseJson(absolutePath);
  }
  return parseYaml(absolutePath);
};

const gendiff = (file1, file2) => {
  const file1KeysArray = Object.keys(file1);
  const file2KeysArray = Object.keys(file2);
  const allKeysArray = _.uniq(file1KeysArray
    .concat(file2KeysArray))
    .sort();
  const resultArray = [];

  allKeysArray.map((key) => {
    if (Object.hasOwn(file1, key) && Object.hasOwn(file2, key)) {
      if (file1[key] === file2[key]) {
        resultArray.push(`   ${key}: ${file1[key]}`);
      } else {
        resultArray.push(` - ${key}: ${file1[key]}`);
        resultArray.push(` + ${key}: ${file2[key]}`);
      }
    } else if (Object.hasOwn(file1, key) && !Object.hasOwn(file2, key)) {
      resultArray.push(` - ${key}: ${file1[key]}`);
    } else if (Object.hasOwn(file2, key) && !Object.hasOwn(file1, key)) {
      resultArray.push(` + ${key}: ${file2[key]}`);
    }
    return null;
  });

  let resultString = '{\n';
  for (let i = 0; i < resultArray.length; i += 1) {
    resultString += `${resultArray[i]}\n`;
  }
  resultString += '}';
  return resultString;
};

export { readFiles, gendiff };
