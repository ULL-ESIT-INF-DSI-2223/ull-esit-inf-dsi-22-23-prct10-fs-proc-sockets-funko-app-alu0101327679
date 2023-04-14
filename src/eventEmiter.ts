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



// import {EventEmitter} from 'events';

// export class MessageEventEmitterClient extends EventEmitter {
//   constructor(connection: EventEmitter) {
//     super();

//     let wholeData = '';
//     connection.on('data', (dataChunk) => {
//       wholeData += dataChunk;

//       let messageLimit = wholeData.indexOf('\n');
//       while (messageLimit !== -1) {
//         const message = wholeData.substring(0, messageLimit);
//         wholeData = wholeData.substring(messageLimit + 1);
//         this.emit('message', JSON.stringify({'type': 'command', 'comando': 'cat helloworld.txt'}));
//         messageLimit = wholeData.indexOf('\n');
//       }
//     });
//   }
// }