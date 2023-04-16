import { expect } from "chai";
import { SiPipe } from "./../../src/ejercicio-2/Sipipe.js";
import { spawn } from 'child_process';
import assert from 'assert';

describe("SiPipe", () => {
  let siPipe: SiPipe;

  beforeEach(() => {
    siPipe = new SiPipe();
  });

  describe("contarLineas", () => {
    it('debe contar las líneas de un archivo con varias líneas', () => {
      // Crea un archivo temporal con varias líneas
      const archivo = 'helloworld.txt';
      const contador = new SiPipe().contarLineas(archivo);

      contador.on('lineas', (lineas) => {
        expect(`File helloworld.txt has ${lineas} lines`).to.be.equal(`File helloworld.txt has 1 lines`);
      });
  
      // contador.on('error', (error) => {
      //   console.error(`Ocurrió un error: ${error}`);
      // });
  
      // Espera a que la función termine de ejecutarse y verifica el resultado
    });
  });


  describe("contarPalabras", () => {
    it('debe contar las líneas de un archivo con varias palabras', () => {
      // Crea un archivo temporal con varias líneas
      const archivo = 'helloworld.txt';
      const contador = new SiPipe().contarPalabras(archivo);

      contador.on('palabras', (palabras) => {
        expect(`File helloworld.txt has ${palabras} words`).to.be.equal(`File helloworld.txt has 3 words`);
      });
  
      // contador.on('error', (error) => {
      //   console.error(`Ocurrió un error: ${error}`);
      // });
  
      // Espera a que la función termine de ejecutarse y verifica el resultado
    });
  });

  describe("contarCaracteres", () => {
    it('debe contar las líneas de un archivo con varios caracteres', () => {
      // Crea un archivo temporal con varias líneas
      const archivo = 'helloworld.txt';
      const contador = new SiPipe().contarCaracteres(archivo);

      contador.on('caracteres', (caracteres) => {
        expect(`File helloworld.txt has ${caracteres} characteres`).to.be.equal(`File helloworld.txt has 21 characteres`);
      });
  
      // contador.on('error', (error) => {
      //   console.error(`Ocurrió un error: ${error}`);
      // });
  
      // Espera a que la función termine de ejecutarse y verifica el resultado
    });
  });
//   describe("contarPalabras", () => {
//     it("debe contar las palabras del archivo correctamente", () => {
//       const fichero = "helloworld.txt";
//       setTimeout(() => {
//         expect(siPipe.contarPalabras(fichero)).to.be.equal(
//           `File ${fichero} has 3 words`
//         );
//       }, 1000);
//     });
//   });

//   describe("contarCaracteres", () => {
//     it("debe contar los caracteres del archivo correctamente", () => {
//       const fichero = "helloworld.txt";
//       setTimeout(() => {
//         expect(siPipe.contarCaracteres(fichero)).to.equal(
//           `File ${fichero} has 20 characters`
//         );
//       }, 1000);
//     });
//   });

//   describe("contarTodo", () => {
//     it("debe contar todas las estadísticas del archivo correctamente", () => {
//       const fichero = "helloworld.txt";
//       setTimeout(() => {
//         expect(siPipe.contarTodo(fichero)).to.equal(
//           `File ${fichero} has 1 lines\nFile ${fichero} has 3 words\nFile ${fichero} has 20 characters`
//         );
//       }, 1000);
//     });
//   });
});
