import * as fs from 'fs';
import yargs from "yargs";
import path from "path";
import chalk, { ChalkInstance } from "chalk";
import { hideBin } from "yargs/helpers";


yargs(hideBin(process.argv))
  .option('lines', {
    alias: 'l',
    describe: 'Mostrar número de líneas',
    type: 'boolean',
  })
  .option('words', {
    alias: 'w',
    describe: 'Mostrar número de palabras',
    type: 'boolean',
  })
  .option('characters', {
    alias: 'c',
    describe: 'Mostrar número de caracteres',
    type: 'boolean',
  })
  .help()
  .alias('help', 'h').argv;

console.log(process.argv);

if (process.argv.length !== 1) {
  console.log('Por favor, especifique un archivo');
  process.exit(1);
}

const filePath = process.argv[0];

if (!fs.existsSync(filePath)) {
  console.log(`El archivo ${filePath} no existe`);
  process.exit(1);
}

const stream = fs.createReadStream(filePath, { encoding: 'utf8' });

let lines = 0;
let words = 0;
let characters = 0;

stream.on('data', (data: string) => {
  const dataLines = data.split('\n').length - 1;
  const dataWords = data.split(' ').length;
  const dataCharacters = data.length;

  lines += dataLines;
  words += dataWords;
  characters += dataCharacters;
});

stream.on('end', () => {
  if (lines) {
    console.log(`Líneas: ${lines}`);
  }

  if (words) {
    console.log(`Palabras: ${words}`);
  }

  if (characters) {
    console.log(`Caracteres: ${characters}`);
  }

  if (!lines && !words && !characters) {
    console.log(`Líneas: ${lines}`);
    console.log(`Palabras: ${words}`);
    console.log(`Caracteres: ${characters}`);
  }
});
