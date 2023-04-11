import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk, { ChalkInstance } from "chalk";
import fs from "fs";




yargs(hideBin(process.argv))

.command(
  "lineas",
  "Mostrar la cantidad de lineas de un fichero",
  {
    fichero: {
      description: "Fichero a leer",
      type: "string",
      demandOption: true,
    },
  },
  (argv) => {
    // let collectionPrueba = new FuncosCollection([], argv.); 
    //  
    const filename = argv.fichero;
    const filePath = `./ficheros/${filename}`;

    if (fs.existsSync(filePath)) {
      //console.log(chalk.green.bold(`El fichero ${filename} existe`));
      const file = fs.readFileSync(filePath, "utf-8");
      const lineas = file.split("\n");
      const cantidad = lineas.length;
      console.log(`El fichero ${filename} tiene chalk.green.bold(${cantidad}) lineas`);
    }else {
      console.log(chalk.red.bold(`El fichero ${filename} no existe`));
    }
  }
)
.command(
  "palabras",
  "Mostrar la cantidad de palabras de un fichero",
  {
    fichero: {
      description: "Fichero a leer",
      type: "string",
      demandOption: true,
    },
  },
  (argv) => {
    // let collectionPrueba = new FuncosCollection([], argv.); 
    //  
    const filename = argv.fichero;
    const filePath = `./ficheros/${filename}`;

    if (fs.existsSync(filePath)) {
      //console.log(chalk.green.bold(`El fichero ${filename} existe`));
      const file = fs.readFileSync(filePath, "utf-8");
      const palabras = file.split(/\s+/);
      const cantidad = palabras.length;
      console.log(chalk.green.bold(`El fichero ${filename} tiene ${cantidad} palabras`));
    }else {
      console.log(chalk.red.bold(`El fichero ${filename} no existe`));
    }
  }
)
.command(
  "caracteres",
  "Mostrar la cantidad de caracteres de un fichero",
  {
    fichero: {
      description: "Fichero a leer",
      type: "string",
      demandOption: true,
    },
  },
  (argv) => {
    // let collectionPrueba = new FuncosCollection([], argv.); 
    //  
    const filename = argv.fichero;
    const filePath = `./ficheros/${filename}`;

    if (fs.existsSync(filePath)) {
      //console.log(chalk.green.bold(`El fichero ${filename} existe`));
      const file = fs.readFileSync(filePath, "utf-8");
      const caracteres = file.split("");
      const cantidad = caracteres.length;
      console.log(chalk.green.bold(`El fichero ${filename} tiene ${cantidad} caracteres`));
    }else {
      console.log(chalk.red.bold(`El fichero ${filename} no existe`));
    }
  }
)
.command(
  "Todo",
  "Mostrar los tres comandos anteriores",
  {
    fichero: {
      description: "Fichero a leer",
      type: "string",
      demandOption: true,
    },
  },
  (argv) => {
    // let collectionPrueba = new FuncosCollection([], argv.); 
    //  
    const filename = argv.fichero;
    const filePath = `./ficheros/${filename}`;

    if (fs.existsSync(filePath)) {
      //console.log(chalk.green.bold(`El fichero ${filename} existe`));
      const file = fs.readFileSync(filePath, "utf-8");
      const caracteres = file.split("");
      const cantidad = caracteres.length;
      console.log(chalk.green.bold(`El fichero ${filename} tiene ${cantidad} caracteres`));
    }else {
      console.log(chalk.red.bold(`El fichero ${filename} no existe`));
    }
  }
)
.help().argv;
