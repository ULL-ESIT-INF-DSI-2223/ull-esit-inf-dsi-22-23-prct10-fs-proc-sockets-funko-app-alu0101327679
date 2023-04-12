import {watchFile} from 'fs';
import {spawn} from 'child_process';

watchFile('helloworld.txt', (curr, prev) => {
  console.log(`File was ${prev.size} bytes before it was modified.`);
  console.log(`Now file is ${curr.size} bytes.`);

  const wc = spawn('wc', ['helloworld.txt']);

  let wcOutput = '';
  wc.stdout.on('data', (piece) => wcOutput += piece);

  wc.on('close', () => {
    const wcOutputAsArray = wcOutput.split(/\s+/);
    console.log(`File helloworld.txt has ${wcOutputAsArray[1]} lines`);
    console.log(`File helloworld.txt has ${wcOutputAsArray[2]} words`);
    console.log(`File helloworld.txt has ${wcOutputAsArray[3]} characters`);
  });
});


// import { watchFile } from 'fs';
// import { spawn } from 'child_process';

// const filename = 'helloworld.txt';

// const wc = spawn('wc', ['-w', filename]);
// const lc = spawn('wc', ['-l', filename]);
// const char = spawn('wc', ['-m', filename]);

// wc.stdout.on('data', (data) => {
//   const output = data.toString().trim();
//   // console.log(`wc stdout: ${output}`)
//   //contar la cantidad de palabras del archivo
//   const [wordCount] = output.split(/\s+/);
//   console.log(`File ${filename} has ${wordCount} words`);

// });

// lc.stdout.on('data', (data) => {
//   const output = data.toString().trim();
//   // console.log(`wc stdout: ${output}`)
//   //contar la cantidad de palabras del archivo
//   const [wordCount] = output.split(/\s+/);
//   console.log(`File ${filename} has ${wordCount} lines`);
// });

// char.stdout.on('data', (data) => {
//   const output = data.toString().trim();
//   // console.log(`wc stdout: ${output}`)
//   //contar la cantidad de palabras del archivo
//   const [wordCount] = output.split(/\s+/);
//   console.log(`File ${filename} has ${wordCount} characters`);
// });


// wc.on('error', (err) => {
//   console.error(`Failed to run wc: ${err}`);
// });

// lc.on('error', (err) => {
//   console.error(`Failed to run wl: ${err}`);
// });

// char.on('error', (err) => {
//   console.error(`Failed to run char: ${err}`);
// });

// wc.on('close', (code) => {
//   if (code !== 0) {
//     console.error(`wc process exited with code ${code}`);
//   }
// });

// lc.on('close', (code) => {
//   if (code !== 0) {
//     console.error(`lc process exited with code ${code}`);
//   }
// });

// char.on('close', (code) => {
//   if (code !== 0) {
//     console.error(`char process exited with code ${code}`);
//   }
// });

// watchFile(filename, (curr, prev) => {
//   console.log(`File was ${prev.size} bytes before it was modified.`);
//   console.log(`Now file is ${curr.size} bytes.`);
// });
/**
 * import { spawn } from 'child_process';

const catProcess = spawn('cat', ['helloworld.txt']);
const wcProcess = spawn('wc', ['-l']);

catProcess.stdout.pipe(wcProcess.stdin);

wcProcess.stdout.on('data', (data) => {
  console.log(`File helloworld.txt has ${data.toString().trim()} lines`);
});
 */