import chalk, { ChalkInstance } from "chalk";
import fs from "fs";
import { watchFile } from 'fs';
import { spawn } from 'child_process';
import EventEmitter from "events";

export class SiPipe {
  constructor() {
    // console.log('SiPipe');
  }

  contarLineas(fichero: string): EventEmitter {
    const catProcess = spawn('cat', [fichero]);
    const wcProcess = spawn('wc', ['-l']);
    const emitter = new EventEmitter();
  
    catProcess.stdout.pipe(wcProcess.stdin);
  
    wcProcess.stdout.on('data', (data) => {
      const lineas = parseInt(data.toString().trim(), 10);
      emitter.emit('lineas', lineas);
    });
  
    // wcProcess.stderr.on('data', (error) => {
    //   emitter.emit('error', new Error(error.toString()));
    // });
  
    // wcProcess.on('exit', (code) => {
    //   if (code !== 0) {
    //     emitter.emit('error', new Error(`Failed to run wc: ${code}`));
    //   }
    // });
  
    return emitter;
  }

  contarPalabras(fichero: string){
    const catProccess = spawn('cat', [fichero]);
    const wcProcess = spawn('wc', ['-w']);
    const emitter = new EventEmitter();
  
    catProccess.stdout.pipe(wcProcess.stdin);
  
    wcProcess.stdout.on('data', (data) => {
      const palabras = parseInt(data.toString().trim(), 10);
      emitter.emit('palabras', palabras);
    });
  
    // wcProcess.stderr.on('data', (error) => {
    //   emitter.emit('error', new Error(error.toString()));
    // });
  
    // wcProcess.on('exit', (code) => {
    //   if (code !== 0) {
    //     emitter.emit('error', new Error(`Failed to run wc: ${code}`));
    //   }
    // });
  
    return emitter;
  }

  contarCaracteres(fichero: string){
    const catProcess = spawn('cat', [fichero]);
    const wcProcess = spawn('wc', ['-c']);
    const emitter = new EventEmitter();
  
    catProcess.stdout.pipe(wcProcess.stdin);
  
    wcProcess.stdout.on('data', (data) => {
      const caracteres = parseInt(data.toString().trim(), 10);
      emitter.emit('caracteres', caracteres);
    });
  
    // wcProcess.stderr.on('data', (error) => {
    //   emitter.emit('error', new Error(error.toString()));
    // });
  
    // wcProcess.on('exit', (code) => {
    //   if (code !== 0) {
    //     emitter.emit('error', new Error(`Failed to run wc: ${code}`));
    //   }
    // });
  
    return emitter;
  }

}

/**
 * import { watchFile } from 'fs';
import { spawn } from 'child_process';

const filename = 'helloworld.txt';

const wc = spawn('wc', ['-w', filename]);


wc.stdout.on('data', (data) => {
  const output = data.toString().trim();
  const [wordCount] = output.split(/\s+/);
  console.log(`File ${filename} has ${wordCount} words`);
});

wc.on('error', (err) => {
  console.error(`Failed to run wc: ${err}`);
});

wc.on('close', (code) => {
  if (code !== 0) {
    console.error(`wc process exited with code ${code}`);
  }
});

watchFile(filename, (curr, prev) => {
  console.log(`File was ${prev.size} bytes before it was modified.`);
  console.log(`Now file is ${curr.size} bytes.`);
});


const catProcess = spawn('cat', ['helloworld.txt']);
const wcProcess = spawn('wc', ['-l']);
const charProcess = spawn('wc', ['-c'])


catProcess.stdout.pipe(wcProcess.stdin);
catProcess.stdout.pipe(charProcess.stdin);

wcProcess.stdout.on('data', (data) => {
  console.log(`File helloworld.txt has ${data.toString().trim()} lines`);
});

charProcess.stdout.on('data', (data) => {
  console.log(`File helloworld.txt has ${data.toString().trim()} characters`);
})


 */