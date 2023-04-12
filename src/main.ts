import {watchFile} from 'fs';
import {spawn} from 'child_process';

watchFile('./ejercicio-1/helloworld.txt', (curr, prev) => {
  console.log(`File was ${prev.size} bytes before it was modified.`);
  console.log(`Now file is ${curr.size} bytes.`);

  const cat = spawn('cat', ['-n', './ejercicio-1/helloworld.txt']);
  cat.stdout.pipe(process.stdout);
});//