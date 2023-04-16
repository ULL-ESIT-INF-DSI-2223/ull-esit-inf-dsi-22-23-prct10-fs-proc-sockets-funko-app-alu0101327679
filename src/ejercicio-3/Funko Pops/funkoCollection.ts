import fs from "fs";
import path from "path";
import chalk, { ChalkInstance } from "chalk";

import { Funko } from "./funco.js";

/**
 * clase para definir la coleccion de funkos que tenemos en el sistema
 */
export class FuncosCollection {
  /**
   * constructor de la clase funko
   */
  constructor() {
  }

  /**
   * metodo para almacenar un funko en el fichero
   * @param funko funko a almacenar
   */
  public almacenarFunkoUsuario(funko: Funko, usuario: string): boolean {
    const fileName = funko.id + ".json";
    const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
    const filePath = `./funkos/${dirName}/${fileName}`;
  
    // Comprobamos si el fichero ya existe en el directorio
    if (fs.existsSync(filePath)) {
      console.log(chalk.bold.red(`Ya existe un Funko con el nombre ${funko.nombre} en el directorio ${dirName}`));
      return false;
    }
  
    fs.mkdirSync(`./funkos/${dirName}`, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(funko));
    console.log(chalk.green.bold(`El Funko "${funko.nombre}" fue almacenado correctamente.`));
    return true
  }

    /**
     * metodo para eliminar un funko del fichero
     * @param id id del funko a eliminar
     */
  public eliminarFunkoUsuario(id: number, usuario: string) {
    const fileName = id.toString() + ".json";
    const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
    const filePath = `./funkos/${dirName}/${fileName}`;

    if (fs.existsSync(filePath)) { 
      fs.unlinkSync(filePath);
      console.log(chalk.green.bold(`El Funko "${id}" fue eliminado correctamente.`));
      return true
    } else {
      console.error(chalk.red.bold(`Error al intentar eliminar el Funko "${id}"`));
      return false
    }
  }
  /**
   * metodo para cargar los funkos del usuario
   * @returns array de funkos del usuario
   */
  public cargarFunkosUsuario(usuario: string) {
    const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
    const dirPath = `./funkos/${dirName}`;

    if (fs.existsSync(dirPath)) {
      const fileNames = fs.readdirSync(dirPath);
      const funkos: Funko[] = [];

      fileNames.forEach((fileName: string) => {
        const filePath = `${dirPath}/${fileName}`;
        const fileContent = fs.readFileSync(filePath, "utf8");
        const funko = JSON.parse(fileContent);
        funkos.push(funko);
      });

      return funkos;
    } else {
      return [];
    }
  }

  /**
   * metodo para modificar un funko del fichero
   * @param id id del funko a modificar
   * @param nuevoFunko nuevo funko a almacenar
   */
  public modificarFunkoUsuario(id: number, nuevoFunko: Funko, usuario: string): boolean {
    const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
    const filePath = `./funkos/${dirName}/${id.toString()}.json`;

    if (fs.existsSync(filePath)) {
      const nuevoContenido = JSON.stringify(nuevoFunko);
      fs.writeFileSync(filePath, nuevoContenido, "utf8");
      console.log(
        chalk.bold.green(`El Funko "${id.toString()}" ha sido modificado exitosamente.`)
      );
      return true
    } else {
      console.log(chalk.bold.red(`No se encontró el archivo del Funko "${id.toString()}".`));
      return false
    }
  }

  /**
   * metodo para listar los funkos del usuario
   */
  public listarFunkosUsuario(usuario: string): [boolean, string[]] {
    const valorMinimo = 0;
    const valorBajo = 50;
    const valorMedio = 100;
    const valorAlto = 500;
  
    console.log(chalk.bold("Funkos existentes:"));
    // console.log('');
    let funkos = this.cargarFunkosUsuario(usuario);
  
    if (funkos.length === 0) {
      console.log(chalk.bold.red("No se encontraron funkos para el usuario: " + usuario));
      return [false, ["No se encontraron funkos para el usuario: " + usuario]]
    }
    let mensaje: string[] = []
    for (const funko of funkos) {
      const valor = funko.valorDeMercado;
  
      let valorColoreado: string;
  
      if (valor >= 200) {
        valorColoreado = chalk.green.bold(valor.toFixed(2));
      } else if (valor >= 150) {
        valorColoreado = chalk.yellow.bold(valor.toFixed(2));
      } else if (valor >= 100) {
        valorColoreado = chalk.blue.bold(valor.toFixed(2));
      } else {
        valorColoreado = chalk.red.bold(valor.toFixed(2));
      }
  
      console.log(
        chalk.bold.magenta(funko.nombre) +
          " - Valor de mercado: " +
          valorColoreado
      );
        mensaje.push(JSON.stringify({id_: funko.id, nombre: funko.nombre, descripcion: funko.descripcion, tipo: funko.tipo, genero: funko.genero, franquicia: funko.franquicia, numero: funko.numero, exclusivo: funko.exclusivo, valorDeMercado: funko.valorDeMercado, caracteristicasEspeciales: funko.caracteristicasEspeciales, usuario: usuario}))
    }
    return [true, mensaje]
  }

  /**
   * metodo para mostrar un funko del usuario
   * @param id id del funko a mostrar
   */
  public mostrarFunkoUsuario(id: number, usuario: string): [boolean, string]{
    const fileName = `${id}.json`;
    const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
    const filePath = `./funkos/${dirName}/${fileName}`;

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      const foundFunko = JSON.parse(data);

      const mensaje = JSON.stringify({id_: id, nombre: foundFunko.nombre, descripcion: foundFunko.descripcion, tipo: foundFunko.tipo, genero: foundFunko.genero, franquicia: foundFunko.franquicia, numero: foundFunko.numero, exclusivo: foundFunko.exclusivo, caracteristicasEspeciales: foundFunko.caracteristicasEspeciales, valorDeMercado: foundFunko.valorDeMercado })

      return [true, mensaje]
    }else {
      console.log(chalk.red(`No existe un Funko con ID ${id} en la lista.`));
      return [false, '']
    }

  }
}
