import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk, { ChalkInstance } from "chalk";
import fs from "fs";
import { SiPipe } from "./Sipipe.js";


yargs(hideBin(process.argv))

// .command(
//   "lineas",
//   "Mostrar la cantidad de lineas de un fichero",
//   {
//     fichero: {
//       description: "Fichero a leer",
//       type: "string",
//       demandOption: true,
//     },
//   },
//   (argv) => {
//     const contador = new SiPipe().contarLineas(argv.fichero);

//     contador.on('lineas', (lineas) => {
//       console.log(`El archivo tiene ${lineas} líneas`);
//     });

//     contador.on('error', (error) => {
//       console.error(`Ocurrió un error: ${error}`);
//     });
//   }
// )
// .command(
//   "palabras",
//   "Mostrar la cantidad de palabras de un fichero",
//   {
//     fichero: {
//       description: "Fichero a leer",
//       type: "string",
//       demandOption: true,
//     },
//   },
//   (argv) => {
//     const contador = new SiPipe().contarPalabras(argv.fichero);

//     contador.on('palabras', (palabras) => {
//       console.log(`El archivo tiene ${palabras} palabras`);
//     });

//     contador.on('error', (error) => {
//       console.error(`Ocurrió un error: ${error}`);
//     });
//   }
// )
// .command(
//   "caracteres",
//   "Mostrar la cantidad de caracteres de un fichero",
//   {
//     fichero: {
//       description: "Fichero a leer",
//       type: "string",
//       demandOption: true,     
//     },
//   },
//   (argv) => {
//     const contador = new SiPipe().contarCaracteres(argv.fichero);

//     contador.on('caracteres', (caracteres) => {
//       console.log(`El archivo tiene ${caracteres} caracteres`);
//     });

//     contador.on('error', (error) => {
//       console.error(`Ocurrió un error: ${error}`);
//     });
//   }
// )
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
      const contador = new SiPipe().contarLineas(argv.fichero);

      contador.on('lineas', (lineas) => {
        console.log(`El archivo tiene ${lineas} líneas`);
      });
  
      contador.on('error', (error) => {
        console.error(`Ocurrió un error: ${error}`);
      });
    }
    if(argv.palabras !== undefined){
      const contador = new SiPipe().contarPalabras(argv.fichero);

      contador.on('palabras', (palabras) => {
        console.log(`El archivo tiene ${palabras} palabras`);
      });
  
      contador.on('error', (error) => {
        console.error(`Ocurrió un error: ${error}`);
      });    }
    if(argv.caracteres !== undefined){
      const contador = new SiPipe().contarCaracteres(argv.fichero);

      contador.on('caracteres', (caracteres) => {
        console.log(`El archivo tiene ${caracteres} caracteres`);
      });
  
      contador.on('error', (error) => {
        console.error(`Ocurrió un error: ${error}`);
      });
    }
  }
)

.help().argv;
