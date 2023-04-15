import net from 'net';
import { emit } from 'process';
import {EventEmitter} from 'events';

const client = net.connect({port: 60300});

let wholedata = ''

client.on('data', (dataChunk) => {
  wholedata += dataChunk;

  console.log( 'hola')


})

