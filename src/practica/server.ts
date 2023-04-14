import net from 'net';

if (process.argv.length !== 2) {
  console.log('Usage: node server.js');
} else {
  net.createServer((connection) => {
    console.log('A client has connected.');

    connection.on('data', (data) => {
      // const command = data.toString().trim(); // Extract command from data
      const command = JSON.parse(data.toString())

      console.log(`Received command: ${command}`);

      // Execute command and capture output and error streams
      const {exec} = require('child_process');
      exec(command, (error: { message: any; }, stdout: any, stderr: any) => {
        if (error) {
          connection.write(JSON.stringify({
            'type': 'error', 'message': `Command failed: ${error.message}`
          }) + '\n');
          return;
        }
        if (stderr) {
          connection.write(JSON.stringify({
            'type': 'error', 'message': `Command failed: ${stderr}`
          }) + '\n');
          return;
        }
        connection.write(JSON.stringify({
          'type': 'output', 'message': stdout
        }) + '\n', () => {
          console.log('Sent result to client.');
        });
      });
    });

    connection.on('close', () => {
      console.log('A client has disconnected.');
    });
  }).listen(60300, () => {
    console.log('Waiting for clients to connect.');
  });
}



// import net from 'net';
// import {watchFile} from 'fs';

// if (process.argv.length !== 2) {
//   console.log('Usage: node server.js');
// } else {
//   net.createServer((connection) => {
//     console.log('A client has connected.');

//     connection.on('data', (data) => {
//       const command = data.toString().trim(); // Extract command from data

//       console.log(`Received command: ${command}`);

//       // Execute command and capture output and error streams
//       const {exec} = require('child_process');
//       const child = exec(command, (error: { message: any; }, stdout: any, stderr: any) => {
//         if (error) {
//           connection.write(JSON.stringify({
//             'type': 'error', 'message': `Command failed: ${error.message}`
//           }) + '\n');
//           return;
//         }
//         if (stderr) {
//           connection.write(JSON.stringify({
//             'type': 'error', 'message': `Command failed: ${stderr}`
//           }) + '\n');
//           return;
//         }
//         connection.write(JSON.stringify({
//           'type': 'output', 'message': stdout
//         }) + '\n');
//       });
//     });

//     connection.on('close', () => {
//       console.log('A client has disconnected.');
//     });
//   }).listen(60300, () => {
//     console.log('Waiting for clients to connect.');
//   });
// }



// //tsc-watch --onSuccess "node dist/main.js" 
// import net from 'net';
// import {watchFile} from 'fs';

// if (process.argv.length !== 3) {
//   console.log('Please, provide a filename.');
// } else {
//   const fileName = process.argv[2];

//   net.createServer((connection) => {
//     console.log('A client has connected.');

//     connection.write(JSON.stringify({'type': 'watch', 'file': fileName}) +
//       '\n');

//     watchFile(fileName, (curr, prev) => {
//       connection.write(JSON.stringify({
//         'type': 'change', 'prevSize': prev.size, 'currSize': curr.size}) +
//          '\n');
//     });

//     connection.on('close', () => {
//       console.log('A client has disconnected.');
//     });
//   }).listen(60300, () => {
//     console.log('Waiting for clients to connect.');
//   });
// }  