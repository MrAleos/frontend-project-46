import path from 'path';
import { parseJson, parseYaml } from './parsers.js';
import buildTreeDiff from './ast.js';
import chooseFormatter from './formatters/index.js';

const readFiles = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const format = path.extname(absolutePath);
  if (format === '.json') {
    return parseJson(absolutePath);
  } if (format === '.yml' || format === '.yaml') {
    return parseYaml(absolutePath);
  }
  return 'Not support format';
};

const gendiff = (file1, file2, formatName = 'stylish') => {
  const ast = buildTreeDiff(file1, file2);
  const formatAST = chooseFormatter(ast, formatName);
  return formatAST;
};

export { readFiles, gendiff };
