import net from 'net';

import { Funko } from './Funko Pops/funco.js';
import { FuncosCollection } from "./Funko Pops/funkoCollection.js";
import { Tipo } from "./Funko Pops/tipo.js";
import { Genero } from "./Funko Pops/genero.js";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from 'chalk';
import { argv } from 'process';

export type RequestType = {
  type: 'add' | 'update' | 'remove' | 'read' | 'list';
  funkoPop?: Funko[]
}

const client = net.connect({port: 60300});

/**
 * Se utiliza el paquete yargs para definir comandos y opciones y que permite
 * interactuar con una coleccion de Funkos de un usuario
 */
yargs(hideBin(process.argv))
  /**
   * Comando para almacenar un Funko en la coleccion de un usuario
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
      client.write(JSON.stringify({type: 'read', funkoPop: argv.id, usuario: argv.usuario}));
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
      client.write(JSON.stringify({type: 'list', funkoPop: argv.usuario}));
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
      client.write(JSON.stringify({type: 'update',id: argv.id , funkoPop: new Funko(
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
        ), usuario: argv.usuario}));
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
      // new FuncosCollection().eliminarFunkoUsuario(argv.id, argv.usuario);
      client.write(JSON.stringify({type: 'delete', funkoPop: argv.id, usuario: argv.usuario}));
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
    client.write(JSON.stringify({type: 'add', funkoPop: new Funko(
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
      ), usuario: argv.usuario}));
  }
  )
  .help().argv;



client.on('data', (dataJSON) => {
  const message = JSON.parse(dataJSON.toString());

  switch (message.type) {
    case 'add':
      //node dist/ejercicio-3/cliente.js add --usuario "javier" --id 1 --nombre "paco" --descripcion "no hay" --tipo "Pop!" --genero "Animación" --franquicia "canarias" --numero 4 --exclusivo false --caracteristicasEspeciales "no hay" --valorDeMercado 25
      if(message.success){
        console.log(chalk.bold.green(`Funko añadido correctamente`));
      }else {
        console.log(chalk.bold.red(`Ya existe un Funko con el nombre ${message.nonbre} en el directorio ${__dirname}`));
      }
      break;
    case 'update':
      if(message.success){
        console.log(chalk.bold.green(`Funko modificado correctamente`));
      }else {
        console.log(chalk.bold.red(`No existe un Funko con el nombre ${message.nonbre} en el directorio ${__dirname}`));
      }
      break;
    case 'remove':
      if(message.success){
        console.log(chalk.bold.green(`Funko eliminado correctamente`));
      }else {
        console.log(chalk.bold.red(`No existe un Funko con el nombre ${message.nonbre} en el directorio ${__dirname}`));
      }
      break;
    case 'list':
      if(message.success){
        console.log(chalk.bold.green(`Funkos del usuario ${message.usuario}`));
        console.log(message.funkos);
      }else {
        console.log(chalk.bold.red(`No existe un usuario con el nombre ${message.usuario}`));
      }
      break;
    case 'read':
      if(message.success){
        console.log(chalk.bold.green(`Funko del usuario ${message.usuario}`));
        console.log(message.funko);
      }else {
        console.log(chalk.bold.red(`No existe un usuario con el nombre ${message.usuario}`));
      }
      break;
    case 'defalut':
      console.log(chalk.bold.red(`Error: Comando no valido`));
      break;
    default:
      console.log(chalk.bold.red(`Error: Comando no valido`));
      break;
  }


});