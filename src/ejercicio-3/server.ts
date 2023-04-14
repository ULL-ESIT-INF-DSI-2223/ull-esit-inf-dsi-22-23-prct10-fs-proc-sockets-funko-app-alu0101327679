import { exec } from 'child_process';
import net from 'net';
import chalk from 'chalk';
import { Tipo } from './Funko Pops/tipo.js';

enum Comandos {
  add = 'add',
  listar = 'listar',
  eliminar = 'eliminar',
  mostrar = 'mostrar',
  modificar = 'modificar',
}



  net.createServer((connection) => {
    console.log('A client has connected.');

    let wholeData = '';
    connection.on('data', (dataChunk) => {
      wholeData += dataChunk;
      let separatedData: string[] = wholeData.split(' ');
      console.log(separatedData);
      //if separatedData[3] is not a valid command then return

      if(separatedData[0] != 'node' || separatedData[1] != 'dist/ejercicio-3/Funko\\' || separatedData[2] != 'Pops/comand.js'){ 
        console.log('Error: You must use the command "node dist/ejercicio-3/Funko Pops/comand.js"'); //node dist/ejercicio-3/Funco Pops/comand.js
        connection.write('Error: You must use the command "node dist/ejercicio-3/Funko Pops/comand.js"\n');
        separatedData = [];
        return
      }

      if(separatedData[3] !== Comandos.add && separatedData[3] !== Comandos.listar && separatedData[3] !== Comandos.eliminar && separatedData[3] !== Comandos.mostrar && separatedData[3] !== Comandos.modificar){
        console.log("Error: " + separatedData[3] + ' is not a valid command');
        connection.write("Error: " + separatedData[3] + ' is not a valid command\n');
        separatedData = [];
        return
      }


      exec(wholeData, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          connection.write("Error: " + err);
          return;
        }
        console.log(chalk.white(stdout));
        connection.write(stdout);
      })

      //cerrar la conexion con el cliente
      connection.destroy();
    })
    

    connection.on('close', () => {
      console.log('A client has disconnected.');
    });
  }).listen(60300, () => {
    console.log('Waiting for clients to connect.');
  });
