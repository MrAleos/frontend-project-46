import fs from 'fs';
import jsYaml from 'js-yaml';

const parseJson = (filepath) => {
  const readfile = fs.readFileSync(filepath, 'utf-8');
  const jsonParseData = JSON.parse(readfile);
  return jsonParseData;
};

const parseYaml = (filepath) => {
  const readfile = fs.readFileSync(filepath, 'utf-8');
  const yamlParseData = jsYaml.load(readfile);
  return yamlParseData;
};

export { parseJson, parseYaml };
