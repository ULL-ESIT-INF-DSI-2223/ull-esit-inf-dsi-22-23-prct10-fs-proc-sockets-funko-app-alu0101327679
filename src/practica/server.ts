import net from 'net';
import { exec } from 'child_process';

if (process.argv.length !== 2) {
  console.log('Usage: node server.js');
} else {
  net.createServer((connection) => {
    console.log('A client has connected.');

    connection.on('data', (data) => {
      // const command = data.toString().trim(); // Extract command from data
      const command = JSON.parse(data.toString())

      console.log(`Received command: ${command.command}`);

      // Execute command and capture output and error streams
      exec(command.command, (error, stderr, stdout) => {
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

