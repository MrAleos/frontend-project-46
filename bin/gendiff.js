import { program } from 'commander';

program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, format [type]', 'output format')
    .helpOption('-h, --help', 'output usage information');
program.parse();
