import { Command } from 'commander';
import readFiles from '../src/parse.js';

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
        console.log('File 1 Data:', file1Data);
        console.log('File 2 Data:', file2Data);
    });
program.parse();
