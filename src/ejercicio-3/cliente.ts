import net from 'net';
import { emit } from 'process';
import {EventEmitter} from 'events';

const client = net.connect({port: 60300});

client.write('Hello from client!');

client.on('data', (dataChunk) => {
  console.log(dataChunk.toString());
  client.destroy()
})


//desconectar cliente
client.on('end', () => {
  console.log('Disconnected from server');
})


/**
node dist/ejercicio-3/Funko\ Pops/comand.js add --usuario "javier" --id 3 --nombre "pruebas" --descripcion "probando comandos" --tipo "Pop!" --genero "Animación" --franquicia "marvel" --numero 5 --exclusivo false --caracteristicasEspeciales "no" --valorDeMercado 0
node dist/ejercicio-3/Funko\ Pops/comand.js list --usuario "javier" 

*/