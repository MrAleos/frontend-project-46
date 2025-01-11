import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFiles, gendiff } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(fixturePath(filename), 'utf-8');

const file1 = readFiles(fixturePath('file1.json'));
const file2 = readFiles(fixturePath('file2.yaml'));
const expectJson = readFile(fixturePath('expectJson.txt'));
const expectStylish = readFile(fixturePath('expectStylish.txt'));
const expectPlain = readFile(fixturePath('expectPlain.txt'));

test('Stylish builder', () => {
  expect(gendiff(file1, file2)).toEqual(expectStylish);
});

test('Plain builder', () => {
  expect(gendiff(file1, file2, 'plain')).toEqual(expectPlain);
});

test('Json builder', () => {
  expect(gendiff(file1, file2, 'json')).toEqual(expectJson);
});
