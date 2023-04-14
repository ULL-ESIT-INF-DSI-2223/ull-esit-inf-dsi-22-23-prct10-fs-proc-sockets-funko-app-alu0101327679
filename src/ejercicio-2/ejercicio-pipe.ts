import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk, { ChalkInstance } from "chalk";
import fs from "fs";
import { SiPipe } from "./Sipipe.js";


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
    new SiPipe().contarLineas(argv.fichero);
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
    new SiPipe().contarPalabras(argv.fichero);
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
    new SiPipe().contarCaracteres(argv.fichero);
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
    new SiPipe().contarTodo(argv.fichero);
  }
)
.command(
  "combinatoria",
  "Mostrar los tres comandos anteriores",
  {
    fichero: {
      description: "Fichero a leer",
      type: "string",
      demandOption: true,
    },
    lineas: {
      description: "Opcion de contar lineas",
      type: "string",
      demandOption: false,
    },
    palabras: {
      description: "Opcion de contar palabras",
      type: "string",
      demandOption: false,
    },
    caracteres: {
      description: "Opcion de contar caracteres",
      type: "string",
      demandOption: false,
    },
  },

  (argv) => {
    if(argv.lineas !== undefined){
      new SiPipe().contarLineas(argv.fichero)
    }
    if(argv.palabras !== undefined){
      new SiPipe().contarPalabras(argv.fichero)
    }
    if(argv.caracteres !== undefined){
      new SiPipe().contarCaracteres(argv.fichero)
    }
  }
)

.help().argv;
