import path from 'path';
import { parseJson, parseYaml } from './parsers.js';
import buildTreeDiff from './ast.js';
import treeFormatter from './formatters/stylish.js';

const readFiles = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const format = path.extname(absolutePath);
  if (format === '.json') {
    return parseJson(absolutePath);
  }
  return parseYaml(absolutePath);
};

const gendiff = (file1, file2, formatter = 'stylish') => {
  const ast = buildTreeDiff(file1, file2, formatter);
  const formatAST = treeFormatter(ast);
  return formatAST;
};

export { readFiles, gendiff };
