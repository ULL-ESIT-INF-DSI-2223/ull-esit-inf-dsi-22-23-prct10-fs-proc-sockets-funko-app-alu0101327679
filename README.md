# Tareas previas

- Peparar el entorno virtual para que contenga:

  1. [TyeDoc](https://typedoc.org)
  2. [Mocha](https://mochajs.org)
  3. [Chai](https://www.chaijs.com)
  4. Prettier
  5. eslint
  6. [Instanbull](https://istanbul.js.org/)
  7. [Coveralls](https://coveralls.io/)
  8. [Prompt-sync](https://www.npmjs.com/package/prompt-sync)
     - `npm i prompt-sync`
     - `npm i --save-dev @types/prompt-sync`
  9. [Yargs](https://www.npmjs.com/package/yargs)
  10. [Chalks](https://www.npmjs.com/package/chalk)
  11. GitHub Actions
      - Pages
      - Coveralls
      - SonarCloud
  12. Entender un poco el [API sincrona de Node.js](https://nodejs.org/docs/latest-v19.x/api/fs.html)

- Repasar las ["Markdown Basics"](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links)
- Tener a mano los [apuntes](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/) principales de la asignatura
- Y los [apuntes](https://ull-esit-inf-dsi-2223.github.io/nodejs-theory/) de Node.js
- Tener a mano el [guion de la practica](https://ull-esit-inf-dsi-2223.github.io/prct10-fs-proc-sockets-funko-app/)


# Ejercicio 1

Traza de ejecución:

1. El usuario ejecuta el programa con el comando "node program.ts helloworld.txt"
2. El programa comprueba si se han pasado exactamente 3 argumentos en la línea de comandos. En este caso, sí se han pasado exactamente 3 argumentos, por lo que el programa continúa.
3. El programa utiliza la función access para comprobar si el archivo helloworld.txt existe. Si existe, se muestra un mensaje en la consola indicando que se está observando el archivo.
4. El programa utiliza la función watch para observar el archivo helloworld.txt en busca de cambios.
5. El programa muestra un mensaje en la consola indicando que el archivo helloworld.txt ya no se está observando.
6. El usuario modifica el archivo helloworld.txt.
7. La función watch detecta el cambio en el archivo helloworld.txt y emite un evento de cambio.
8. Se agrega un manejador de eventos a la cola de manejadores para el evento de cambio del archivo helloworld.txt.
9. El manejador de eventos para el evento de cambio del archivo helloworld.txt se ejecuta y muestra un mensaje en la consola indicando que el archivo helloworld.txt ha sido modificado.
10. El usuario modifica el archivo helloworld.txt de nuevo.
11. La función watch detecta el cambio en el archivo helloworld.txt y emite otro evento de cambio.
12. Se agrega otro manejador de eventos a la cola de manejadores para el evento de cambio del archivo helloworld.txt.
13. El manejador de eventos para el evento de cambio del archivo helloworld.txt se ejecuta de nuevo y muestra otro mensaje en la consola indicando que el archivo helloworld.txt ha sido modificado.

# Ejercicio 2