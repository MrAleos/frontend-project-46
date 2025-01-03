import path from 'path';
import { fileURLToPath } from 'url';
import { readFiles, gendiff } from '../src/main.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const file2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

test('reads and parses JSON file correctly', () => {
  const filePath = path.resolve(__dirname, '..', '__fixtures__', 'file1.json');
  const expectedData = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  const result = readFiles(filePath);
  expect(result).toEqual(expectedData);
});

test('reads and parses yaml file correctly', () => {
  const filePath = path.resolve(__dirname, '..', '__fixtures__', 'file1.yml');
  const expectedData = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  const result = readFiles(filePath);
  expect(result).toEqual(expectedData);
});

test('show difference between file1 and file2', () => {
  const expectedResult = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;
  expect(gendiff(file1, file2)).toEqual(expectedResult);
});
