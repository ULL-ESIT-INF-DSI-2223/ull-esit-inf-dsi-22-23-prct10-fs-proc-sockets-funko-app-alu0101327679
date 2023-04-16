[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-alu0101327679&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-alu0101327679)[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-alu0101327679/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-alu0101327679?branch=main)[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-alu0101327679&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct10-fs-proc-sockets-funko-app-alu0101327679)

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

 - Traza de ejecución con 2 cambios:

Cuando el usuario ejecuta el comando "node program.ts helloworld.txt", se cmprueba si se han pasado correctamente los 3 argumentos necesarios por la línea de comandos.
En caso afirmativo, el programa continúa su ejecución. 
A continuación el programa comprueba la existencia del archivo "helloworld", en caso afirmativo prosigue su ejecución. 
De ahora en adelante el programa vigilará el archivo mediante la funcion watch, y procede a imprimir por pantalla que el archivo ya no está siendo observado.
Tras la primera modificación del archivo, la funcion watch detecta unc ambio y emite un evento de tipo cambio.
Ahora se agrega a la cola de manejadores un manejador de eventos, para el evento de cambio del archivo helloworld.
El manejador de eventos para el evento de cambio y lo ejecuta, mostrando por consola un mensaje informando que el archivo ha sido modificado.
Tras la segunda modificación del archivo, la funcion watch detecta un cambio y emite un evento de tipo cambio.
Se agrega otro manejador de eventos a la cola de manejadores para el evento de cambio.
Y el manejador de eventos para el el evento de cambio y lo ejecuta, mostrado por pantalla un mensaje informando que el archivo ha sido modificado.

- ¿Qué hace la función access? 
  La función access se utiliza para verificar si un archivo o directorio existe y si el usuario actual tiene permiso de acceso para realizar la operación especificada en el archivo o directorio. La función access toma tres argumentos: path (cadena), mode (entero) y callback (función de devolución de llamada)

- ¿Para qué sirve el objeto constants?
    El objeto constants contiene constantes que representan modos de acceso para archivos y directorios. Estas constantes se utilizan con las funciones proporcionadas por el módulo "fs", como access, chmod, stat, entre otras.

# Ejercicio 2