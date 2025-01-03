#!/usr/bin/env node
/* eslint-disable max-len */

import { Command } from 'commander';
import * as functions from '../src/main.js';

const { readFiles, gendiff } = functions;
const program = new Command();
program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const file1Data = readFiles(filepath1);
    const file2Data = readFiles(filepath2);
    const diff = gendiff(file1Data, file2Data);
    console.log(diff);
  });
program.parse();

/* gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json */
/* gendiff ./__fixtures__/file1.json ./__fixtures__/file2.yaml */
/* gendiff /home/mraleo/frontend-project-46/__fixtures__/file1.json /home/mraleo/frontend-project-46/__fixtures__/file2.json */
