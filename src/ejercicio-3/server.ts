import { exec } from 'child_process';
import net from 'net';


  net.createServer((connection) => {
    console.log('A client has connected.');



    //recibir mensaje del cliente
    // connection.on('data', (dataChunk) => {
    //   console.log(dataChunk.toString());
    // })

    let wholeData = '';
    connection.on('data', (dataChunk) => {
      wholeData += dataChunk;
      // console.log(wholeData.toString())
      exec(wholeData, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          connection.write("Error: " + err);
          return;
        }
        connection.write(stdout);
      })
    })
    

    connection.on('close', () => {
      console.log('A client has disconnected.');
    });
  }).listen(60300, () => {
    console.log('Waiting for clients to connect.');
  });
