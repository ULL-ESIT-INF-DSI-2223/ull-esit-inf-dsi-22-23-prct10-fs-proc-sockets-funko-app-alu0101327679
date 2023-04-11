import * as fs from 'fs';
import * as yargs from 'yargs';

const argv = yargs
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

if (argv._.length !== 1) {
  console.log('Por favor, especifique un archivo');
  process.exit(1);
}

const filePath = argv._[0];

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
  if (argv.lines) {
    console.log(`Líneas: ${lines}`);
  }

  if (argv.words) {
    console.log(`Palabras: ${words}`);
  }

  if (argv.characters) {
    console.log(`Caracteres: ${characters}`);
  }

  if (!argv.lines && !argv.words && !argv.characters) {
    console.log(`Líneas: ${lines}`);
    console.log(`Palabras: ${words}`);
    console.log(`Caracteres: ${characters}`);
  }
});
