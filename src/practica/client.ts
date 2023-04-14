import {connect} from 'net';
import readline from 'readline';
import {MessageEventEmitterClient} from './eventEmiter.js';

const client = new MessageEventEmitterClient(connect({port: 60300}));

client.on('message', (message) => {
  if (message.type === 'output') {
    console.log(`Command output:\n${message.message}`);
    client.emit('resultSent'); // Emit resultSent event to server
  } else if (message.type === 'error') {
    console.log(`Command error:\n${message.message}`);
    client.emit('resultSent'); // Emit resultSent event to server
  } else {
    console.log(`Message type ${message.type} is not valid`);
    client.emit('resultSent'); // Emit resultSent event to server
  }
});

client.on('resultSent', () => {
  console.log('Result sent from server.');
  process.exit(); // Exit process once result has been sent
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a command to execute on the server: ', (command) => {
  client.emit('command', command); // Send command to server
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