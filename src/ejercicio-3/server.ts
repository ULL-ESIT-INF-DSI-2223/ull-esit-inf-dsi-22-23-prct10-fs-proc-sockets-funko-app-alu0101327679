import net from "net";
import { watchFile } from "fs";
import { Funko } from "./Funko Pops/funco.js";
import { FuncosCollection } from "./Funko Pops/funkoCollection.js";

export type ResponseType = {
  type: "add" | "update" | "remove" | "read" | "list";
  success: boolean;
  funkoPops?: Funko[];
};

net
  .createServer((connection) => {
    console.log("Client connected.");

    connection.on("end", () => {
      console.log("Client disconnected.");
    });

    connection.on("data", (data) => {
      const mensaje = JSON.parse(data.toString());
      
      switch (mensaje.type) {
        case "add":
          console.log("add");
          if(new FuncosCollection().almacenarFunkoUsuario(mensaje.funkoPop, mensaje.usuario)){
            connection.write(JSON.stringify({type: 'add', success: true}));
          }else{
            connection.write(JSON.stringify({type: 'add', success: false}));
          }
          //
          break;
        case "update":
          console.log("update");
          if(new FuncosCollection().modificarFunkoUsuario(mensaje.id, mensaje.funkoPop, mensaje.usuario)){
            connection.write(JSON.stringify({type: 'update', success: true}));
          }else {
            connection.write(JSON.stringify({type: 'update', success: false}));
          }
          break;
        case "remove":
          console.log("remove");
          if(new FuncosCollection().eliminarFunkoUsuario(mensaje.id, mensaje.usuario)){
            connection.write(JSON.stringify({type: 'remove', success: true}));
          }else {
            connection.write(JSON.stringify({type: 'remove', success: false}));
          }
          break;
        case "read":
          console.log("read");
          if(new FuncosCollection().mostrarFunkoUsuario(mensaje.funkoPop, mensaje.usuario)){
            connection.write(JSON.stringify({type: 'read', success: true}));
          }else {
            connection.write(JSON.stringify({type: 'read', success: false}));
          }
          break;
        case "list":
          console.log("list");
          if(new FuncosCollection().listarFunkosUsuario(mensaje.funkoPop)){
            connection.write(JSON.stringify({type: 'list', success: true}));
          }else{
            connection.write(JSON.stringify({type: 'list', success: false}));
          }
          break;
        default:
          console.log("default");
          connection.write(JSON.stringify({type: 'default', success: false}));
          break;
      }
      console.log(data.toString());
    });

  })
  .listen(60300, () => {
    console.log("Waiting for clients to connect.");
  });
