import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk, { ChalkInstance } from "chalk";
import fs from "fs";
import { NoPipe } from "./Nopipe.js";





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
    new NoPipe().contarLineas(argv.fichero);
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
    new NoPipe().contarPalabras(argv.fichero);
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
    new NoPipe().contarCaracteres(argv.fichero);
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
    new NoPipe().contarLineas(argv.fichero);
    new NoPipe().contarPalabras(argv.fichero);
    new NoPipe().contarCaracteres(argv.fichero);
  }
)
.command(
  "combinatoria",
  "Combinatoria de comandos",
  {
    fichero: {
      description: "Fichero a leer",
      type: "string",
      demandOption: true,
    },
    lineas: {
      description: "Fichero a leer",
      type: "string",
      demandOption: false,
    },
    palabras: {
      description: "Fichero a leer",
      type: "string",
      demandOption: false,
    },
    caracteres: {
      description: "Fichero a leer",
      type: "string",
      demandOption: false,
    },
  },
  (argv) => {
    if(argv.lineas !== undefined){
      new NoPipe().contarLineas(argv.fichero)
    }
    if(argv.palabras !== undefined){
      new NoPipe().contarPalabras(argv.fichero)
    }
    if(argv.caracteres !== undefined){
      new NoPipe().contarCaracteres(argv.fichero)
    }
  }
)
.help().argv;
