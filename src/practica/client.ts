import {connect} from 'net';
import readline from 'readline';

import net from 'net';

const client = net.connect({ port: 60300 });

let comando = ''

for (let i = 2; i < process.argv.length; i++) {
  comando += process.argv[i] + ' '
}

console.log(comando)

client.write(JSON.stringify({ type: 'command', command: comando }));

client.on('data', (message) => {
  // const data = JSON.parse(message.toString());
  // console.log(data.message);
  // client.end();
  const data = JSON.parse(message.toString());
  if (data.type === 'error') {
    console.log(data.message);
  } else if (data.type === 'output') {
    console.log(data.message);
  } else {
    console.log('Unknown message type');
  }
});










// import {connect} from 'net';
// import {MessageEventEmitterClient} from './eventEmiter.js';

// const client = new MessageEventEmitterClient(connect({port: 60300}));

// client.on('message', (message) => {
//   if (message.type === 'watch') {
//     console.log(`Connection established: watching file ${message.file}`);
//   } else if (message.type === 'change') {
//     console.log('File has been modified.');
//     console.log(`Previous size: ${message.prevSize}`);
//     console.log(`Current size: ${message.currSize}`);
//   } else {
//     console.log(`Message type ${message.type} is not valid`);
//   }
// });

// import net from 'net';

// const client = net.connect({port: 60300});

// client.on('data', (dataJSON) => {
//   const message = JSON.parse(dataJSON.toString());

//   if (message.type === 'watch') {
//     console.log(`Connection established: watching file ${message.file}`);
//   } else if (message.type === 'change') {
//     console.log('File has been modified.');
//     console.log(`Previous size: ${message.prevSize}`);
//     console.log(`Current size: ${message.currSize}`);
//   } else {
//     console.log(`Message type ${message.type} is not valid`);
//   }
// });