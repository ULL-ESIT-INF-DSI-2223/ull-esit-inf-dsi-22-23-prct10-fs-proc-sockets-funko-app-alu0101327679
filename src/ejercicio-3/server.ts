import net from "net";
import { Funko } from "./Funko Pops/funco.js";
import { FuncosCollection } from "./Funko Pops/funkoCollection.js";

export type ResponseType = {
  type: "add" | "update" | "remove" | "read" | "list";
  success: boolean;
  funkoPops?: Funko[];
};

/**
 * Servidor TCP que escucha en el puerto 60300
 */
net
  .createServer((connection) => {
    console.log("Client connected.");

    connection.on("end", () => {
      console.log("Client disconnected.");
    });
    /**
     * Recibe un mensaje del cliente y lo imprime en la consola.
     */
    connection.on("data", (data) => {
      const mensaje = JSON.parse(data.toString());
      /**
       * Según el tipo de mensaje que reciba, se ejecutará una acción u otra.
       */
      switch (mensaje.type) {
        case "add":
          console.log("add");
          if(new FuncosCollection().almacenarFunkoUsuario(mensaje.funkoPop, mensaje.usuario)){
            connection.write(JSON.stringify({type: 'add', success: true}));
          }else{
            connection.write(JSON.stringify({type: 'add', success: false}));
          }
          break;
        case "update":
          console.log("update");
          if(new FuncosCollection().modificarFunkoUsuario(mensaje.id, mensaje.funkoPop, mensaje.usuario)){
            connection.write(JSON.stringify({type: 'update', success: true, id: mensaje.id}));
          }else {
            connection.write(JSON.stringify({type: 'update', success: false}));
          }
          break;
        case "remove":
          console.log("remove");
          if(new FuncosCollection().eliminarFunkoUsuario(mensaje.funkoPop, mensaje.usuario)){
            connection.write(JSON.stringify({type: 'remove', success: true, id: mensaje.funkoPop}));
          }else {
            connection.write(JSON.stringify({type: 'remove', success: false}));
          }
          break;
        case "read":
          console.log("read");
          const variable: [boolean, string] = new FuncosCollection().mostrarFunkoUsuario(mensaje.funkoPop, mensaje.usuario);
          if(variable[0]){
            connection.write(JSON.stringify({type: 'read', success: true, funko: variable[1], usuario: mensaje.usuario, id: mensaje.funkoPop}));

          }else {
            connection.write(JSON.stringify({type: 'read', success: false}));
          }
          break;
        case "list":
          console.log("list");
          const variable2: [boolean, string[]] = new FuncosCollection().listarFunkosUsuario(mensaje.nombre);
          // variable2[1].forEach(element => {
          //   console.log(element);
          // });
          if(variable2[0]){
            connection.write(JSON.stringify({type: 'list', success: true, funko: variable2[1], usuario: mensaje.nombre}));
          }else{
            connection.write(JSON.stringify({type: 'list', success: false}));
          }
          break;
        default:
          console.log("default");
          connection.write(JSON.stringify({type: 'default', success: false}));
          break;
      }
      connection.end()
    });
  })
  /**
   * Escucha en el puerto 60300
   */
  .listen(60300, () => {
    console.log("Waiting for clients to connect.");
  });

  