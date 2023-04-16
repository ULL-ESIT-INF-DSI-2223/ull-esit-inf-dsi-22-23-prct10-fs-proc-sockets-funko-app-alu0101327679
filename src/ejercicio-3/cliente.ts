import net from "net";

import { Funko } from "./Funko Pops/funco.js";
// import { FuncosCollection } from "./Funko Pops/funkoCollection.js";
import { Tipo } from "./Funko Pops/tipo.js";
import { Genero } from "./Funko Pops/genero.js";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk, { ChalkInstance } from "chalk";
// import { argv } from "process";

export type RequestType = {
  type: "add" | "update" | "remove" | "read" | "list";
  funkoPop?: Funko[];
};

const client = net.connect({ port: 60300 });

/**
 * Se utiliza el paquete yargs para definir comandos y opciones y que permite
 * interactuar con una coleccion de Funkos de un usuario
 */
yargs(hideBin(process.argv))
  /**
   * Comando para mostrar un Funko en la coleccion de un usuario
   */
  .command(
    "mostrar",
    "Mostrar información de un Funko concreto",
    {
      usuario: {
        description: "Propietario del Funko",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID del Funko",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      // let collectionPrueba = new FuncosCollection([], argv.);
      client.write(
        JSON.stringify({
          type: "read",
          funkoPop: argv.id,
          usuario: argv.usuario,
        })
      );
      // new FuncosCollection().mostrarFunkoUsuario(argv.id, argv.usuario);
    }
  )
  /**
   * Comando para listar los Funkos de un usuario
   */
  .command(
    "listar",
    "Mostrar información de un Funko concreto",
    {
      usuario: {
        description: "Propietario del Funko",
        type: "string",
        demandOption: true,
      },
    },
    (argv) => {
      // let collectionPrueba = new FuncosCollection([], argv.);
      client.write(JSON.stringify({ type: "list", nombre: argv.usuario }));
      // new FuncosCollection().listarFunkosUsuario(argv.usuario);
    }
  )
  /**
   * Comando para modificar un Funko de un usuario
   */
  .command(
    "modificar",
    "Mostrar información de un Funko concreto",
    {
      usuario: {
        description: "Propietario del Funko",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID del Funko",
        type: "number",
        demand: true,
      },
      nombre: {
        description: "Nombre del Funko",
        type: "string",
        demandOption: true,
      },
      descripcion: {
        description: "Descripción del Funko",
        type: "string",
        demandOption: true,
      },
      tipo: {
        description: "Tipo del Funko",
        type: "string",
        choices: Object.values(Tipo),
        demandOption: true,
      },
      genero: {
        description: "Género del Funko",
        type: "string",
        choices: Object.values(Genero),
        demandOption: true,
      },
      franquicia: {
        description: "Franquicia del Funko",
        type: "string",
        demandOption: true,
      },
      numero: {
        description: "Número del Funko",
        type: "number",
        demandOption: true,
      },
      exclusivo: {
        description: "¿Es exclusivo?",
        type: "boolean",
        default: false,
      },
      caracteristicasEspeciales: {
        description: "Características especiales del Funko",
        type: "string",
        demandOption: true,
      },
      valorDeMercado: {
        description: "Valor de mercado del Funko",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      // let collectionPrueba = new FuncosCollection([], argv.);
      // new FuncosCollection().modificarFunkoUsuario(
      //   argv.id,
      //   new Funko(
      //     argv.id,
      //     argv.nombre,
      //     argv.descripcion,
      //     argv.tipo,
      //     argv.genero,
      //     argv.franquicia,
      //     argv.numero,
      //     argv.exclusivo,
      //     argv.caracteristicasEspeciales,
      //     argv.valorDeMercado
      //   ),
      //   argv.usuario
      // );
      client.write(
        JSON.stringify({
          type: "update",
          id: argv.id,
          funkoPop: new Funko(
            argv.id,
            argv.nombre,
            argv.descripcion,
            argv.tipo,
            argv.genero,
            argv.franquicia,
            argv.numero,
            argv.exclusivo,
            argv.caracteristicasEspeciales,
            argv.valorDeMercado
          ),
          usuario: argv.usuario,
        })
      );
    }
  )
  /**
   * Comando para eliminar un Funko de un usuario
   */
  .command(
    "eliminar",
    "Mostrar información de un Funko concreto",
    {
      usuario: {
        description: "Propietario del Funko",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID del Funko",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      client.write(
        JSON.stringify({
          type: "remove",
          funkoPop: argv.id,
          usuario: argv.usuario,
        })
      );
    }
  )
  /**
   * Comando para añadir un Funko a la coleccion de un usuario
   */
  .command(
    "add",
    "Añadir un nuevo Funko a la lista",
    {
      usuario: {
        description: "Propietario del Funko",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID del Funko",
        type: "number",
        demand: true,
      },
      nombre: {
        description: "Nombre del Funko",
        type: "string",
        demandOption: true,
      },
      descripcion: {
        description: "Descripción del Funko",
        type: "string",
        demandOption: true,
      },
      tipo: {
        description: "Tipo del Funko",
        type: "string",
        choices: Object.values(Tipo),
        demandOption: true,
      },
      genero: {
        description: "Género del Funko",
        type: "string",
        choices: Object.values(Genero),
        demandOption: true,
      },
      franquicia: {
        description: "Franquicia del Funko",
        type: "string",
        demandOption: true,
      },
      numero: {
        description: "Número del Funko",
        type: "number",
        demandOption: true,
      },
      exclusivo: {
        description: "¿Es exclusivo?",
        type: "boolean",
        default: false,
      },
      caracteristicasEspeciales: {
        description: "Características especiales del Funko",
        type: "string",
        demandOption: true,
      },
      valorDeMercado: {
        description: "Valor de mercado del Funko",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      //   const nuevoFunko = new Funko(
      //     argv.id,
      //     argv.nombre,
      //     argv.descripcion,
      //     argv.tipo,
      //     argv.genero,
      //     argv.franquicia,
      //     argv.numero,
      //     argv.exclusivo,
      //     argv.caracteristicasEspeciales,
      //     argv.valorDeMercado
      //   );
      //   new FuncosCollection().almacenarFunkoUsuario(nuevoFunko, argv.usuario);
      // }
      client.write(
        JSON.stringify({
          type: "add",
          funkoPop: new Funko(
            argv.id,
            argv.nombre,
            argv.descripcion,
            argv.tipo,
            argv.genero,
            argv.franquicia,
            argv.numero,
            argv.exclusivo,
            argv.caracteristicasEspeciales,
            argv.valorDeMercado
          ),
          usuario: argv.usuario,
        })
      );
    }
  )
  .help().argv;

client.on("data", (dataJSON) => {
  const message = JSON.parse(dataJSON.toString());

  switch (message.type) {
    case "add":
      //node dist/ejercicio-3/cliente.js add --usuario "javier" --id 1 --nombre "paco" --descripcion "no hay" --tipo "Pop!" --genero "Animación" --franquicia "canarias" --numero 4 --exclusivo false --caracteristicasEspeciales "no hay" --valorDeMercado 25
      if (message.success) {
        console.log(chalk.bold.green(`Funko añadido correctamente`));
      } else {
        console.log(
          chalk.bold.red(
            `Ya existe un Funko con el nombre ${message.nonbre} en el directorio ${__dirname}`
          )
        );
      }
      break;
    case "update":
      if (message.success) {
        console.log(
          chalk.bold.green(
            `Funko "${message.id}" modificado correctamente`
          )
        );
      } else {
        console.log(
          chalk.bold.red(
            `No existe un Funko con el nombre ${message.funkoPop} en el directorio ${__dirname}`
          )
        );
      }
      break;
    case "remove":
      if (message.success) {
        console.log(
          chalk.bold.green(
            `El Funko "${message.id}" fue eliminado correctamente.`
          )
        );
      } else {
        console.log(
          chalk.bold.red(
            `No existe un Funko con el nombre ${message.id} en el directorio ${__dirname}`
          )
        );
      }
      break;
    case "list":
      if (message.success) {
        console.log(chalk.bold.green(`Funkos del usuario ${message.usuario}`));
        const valorBajo = 100;
        const valorMedio = 150;
        const valorAlto = 200;

        if(message.funko.length === 0){
          console.log(chalk.bold.red("No hay Funkos en la colección"));
        }
      
        console.log(chalk.bold("Funkos existentes:"));
        // const funkos = JSON.parse(message.funko);
        message.funko.forEach((elemento: string ) => {
          let valorColoreado: string;
          let FunkoVariable = JSON.parse(elemento)
          
          if (FunkoVariable.valorDeMercado >= valorAlto) {
            valorColoreado = chalk.green.bold(FunkoVariable.valorDeMercado.toFixed(2));
          } else if (FunkoVariable.valorDeMercado >= valorMedio) {
            valorColoreado = chalk.yellow.bold(FunkoVariable.valorDeMercado.toFixed(2));
          }
          else if (FunkoVariable.valorDeMercado >= valorBajo) {
            valorColoreado = chalk.blue.bold(FunkoVariable.valorDeMercado.toFixed(2));
          } else {
            valorColoreado = chalk.red.bold(FunkoVariable.valorDeMercado.toFixed(2));
          }
          console.log(`Nombre: ${FunkoVariable.nombre} - Valor de mercado: ${valorColoreado}`);

          
        })
        

        // if(funkos.length === 0){
        //   console.log(chalk.bold.red("No hay Funkos en la colección"));
        // }
        // let valorColoreado = "";
        // funkos.forEach((funko: { valorDeMercado: number; nombre: string; }) => {
        //   if (funko.valorDeMercado >= valorAlto) {
        //     valorColoreado = chalk.green.bold(message.funko.valorDeMercado.toFixed(2));
        //   } else if (funko.valorDeMercado >= valorMedio) {
        //     valorColoreado = chalk.yellow.bold(message.funko.valorDeMercado.toFixed(2));
        //   }
        //   else if (funko.valorDeMercado >= valorBajo) {
        //     valorColoreado = chalk.blue.bold(message.funko.valorDeMercado.toFixed(2));
        //   } else {
        //     valorColoreado = chalk.red.bold(message.funko.valorDeMercado.toFixed(2));
        //   }
        //   console.log(`Nombre: ${funko.nombre} - Valor de mercado: ${valorColoreado}`);

        // });
    
        // console.log(message.funkos);
      } else {
        console.log(
          chalk.bold.red(
            `No existe un usuario con el nombre ${message.usuario}`
          )
        );
      }
      break;
    case "read":
      if (message.success) {
        console.log(chalk.bold.green(`Funko del usuario ${message.usuario}`));
        const funko = JSON.parse(message.funko);
        console.log(
          chalk.magenta.bold(`Información del Funko con ID ${message.id}:`)
        );
        console.log(`Nombre: ${funko.nombre}`);
        console.log(`Descripción: ${funko.descripcion}`);
        console.log(`Tipo: ${funko.tipo}`);
        console.log(`Género: ${funko.genero}`);
        console.log(`Franquicia: ${funko.franquicia}`);
        console.log(`Número: ${funko.numero}`);
        console.log(`Exclusivo: ${funko.exclusivo ? "Sí" : "No"}`);
        console.log(
          `Características especiales: ${funko.caracteristicasEspeciales}`
        );
        const valor = funko.valorDeMercado;
        let color: ChalkInstance;
        if (valor > 200) {
          color = chalk.green;
        } else if (valor >= 150) {
          color = chalk.yellow;
        } else if (valor >= 100) {
          color = chalk.blue;
        } else {
          color = chalk.red;
        }
        console.log(`Valor de mercado: ${color.bold(`$${valor.toFixed(2)}`)}`);
      } else {
        console.log(
          chalk.bold.red(
            `No existe un usuario con el nombre ${message.usuario}`
          )
        );
      }
      break;
    case "defalut":
      console.log(chalk.bold.red(`Error: Comando no valido`));
      break;
    default:
      console.log(chalk.bold.red(`Error: Comando no valido`));
      break;
  }
});
