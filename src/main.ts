import { watchFile } from 'fs';
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