import chalk, { ChalkInstance } from "chalk";
import fs from "fs";

export class NoPipe {
  constructor() {
    // console.log('NoPipe');
  }

  contarLineas(fichero: string){
    const filename = fichero;
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

  contarPalabras(fichero: string){
    const filename = fichero;
    const filePath = `./ficheros/${filename}`;

    if (fs.existsSync(filePath)) {
      const file = fs.readFileSync(filePath, "utf-8");
      const palabras = file.split(/\s+/);
      const cantidad = palabras.length;
      console.log(chalk.green.bold(`El fichero ${filename} tiene ${cantidad} palabras`));
    }else {
      console.log(chalk.red.bold(`El fichero ${filename} no existe`));
    }
  }

  contarCaracteres(fichero: string){
    const filename = fichero;
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

  contarTodo(fichero: string){
    this.contarLineas(fichero);
    this.contarPalabras(fichero);
    this.contarCaracteres(fichero);
  }

}