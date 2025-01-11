import fs from 'fs';
import path from 'path';
import jsYaml from 'js-yaml';

const parseJson = (value) => {
  const readfile = fs.readFileSync(value, 'utf-8');
  const jsonParseData = JSON.parse(readfile);
  return jsonParseData;
};

const parseYaml = (value) => {
  const readfile = fs.readFileSync(value, 'utf-8');
  const yamlParseData = jsYaml.load(readfile);
  return yamlParseData;
};

const parse = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const format = path.extname(absolutePath);
  if (format === '.json') {
    return parseJson(absolutePath);
  } if (format === '.yml' || format === '.yaml') {
    return parseYaml(absolutePath);
  }
  return 'Not support format';
};

export default parse;
