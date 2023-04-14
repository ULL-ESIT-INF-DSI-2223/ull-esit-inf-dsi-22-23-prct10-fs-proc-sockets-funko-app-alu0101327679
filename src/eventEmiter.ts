import {EventEmitter} from 'events';
import { Socket } from 'net';

export class MessageEventEmitterClient extends EventEmitter {

  constructor(connection: Socket) {
    super();

    connection.on('data', (data) => {
      const message = JSON.parse(data.toString());
      this.emit('message', message);
    });
  }
}

