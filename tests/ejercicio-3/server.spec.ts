import { FuncosCollection } from "./../../src/ejercicio-3/Funko Pops/funkoCollection.js";
import { Funko } from "./../../src/ejercicio-3/Funko Pops/funco.js";
import { expect } from "chai";
import "mocha";
import { Genero } from "../../src/ejercicio-3/Funko Pops/genero.js";
import { Tipo } from "../../src/ejercicio-3/Funko Pops/tipo.js";
import { funko1 , funko2, funko3} from "../../src/ejercicio-3/Funko Pops/main.js"

describe("FuncosCollection", () => {
  describe("almacenarFunkoUsuario", () => {


    it("debería agregar un nuevo Funko correctamente", () => {
      const funkoCollection = new FuncosCollection();
      const usuario = "testUser";
      expect(funkoCollection.almacenarFunkoUsuario(funko1, usuario)).to.be.true
      expect(funkoCollection.mostrarFunkoUsuario(funko1.id, usuario)[0]).to.be.true
    });

    it("debería devolver false si el Funko ya existe para el usuario", () => {
      const funkoCollection = new FuncosCollection();
      const usuario = "testUser";
      funkoCollection.almacenarFunkoUsuario(funko1, usuario);
      expect(funkoCollection.almacenarFunkoUsuario(funko1, usuario)).to.be.false;
    });
  });

  describe("modificarFunkoUsuario", () => {
    it("debería modificar un Funko correctamente", () => {
      const funkoCollection = new FuncosCollection();
      
      const usuario = "testUser";
      funkoCollection.almacenarFunkoUsuario(funko2, usuario);
      expect(funkoCollection.modificarFunkoUsuario(funko2.id, funko2, usuario)).to.be.true;
      expect(funkoCollection.mostrarFunkoUsuario(funko2.id, usuario)[0]).to.be.true
    });

    it("debería devolver false si el Funko no existe para el usuario", () => {
      const funkoCollection = new FuncosCollection();
      const usuario = "testUser";
      expect(funkoCollection.modificarFunkoUsuario(80, funko2, usuario)).to.be.false;
    });
  });
})