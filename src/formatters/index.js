import treeFormatterStylish from './stylish.js';
import treeFormatterPlain from './plain.js';

const chooseFormatter = (tree, formatter) => {
  if (formatter === 'stylish') {
    return treeFormatterStylish(tree);
  } if (formatter === 'plain') {
    return treeFormatterPlain(tree);
  }
  return 'Error';
};

export default chooseFormatter;
