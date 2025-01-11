import parse from './parse.js';
import buildTreeDiff from './ast.js';
import chooseFormatter from './formatters/index.js';

const gendiff = (filePath1, filePath2, formatName = 'stylish') => {
  const file1 = parse(filePath1);
  const file2 = parse(filePath2);
  const ast = buildTreeDiff(file1, file2);
  const formatAST = chooseFormatter(ast, formatName);
  return formatAST;
};

export default gendiff;
