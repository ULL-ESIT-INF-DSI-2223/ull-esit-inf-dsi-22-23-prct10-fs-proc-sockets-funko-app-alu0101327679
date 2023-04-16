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
    El objeto constants contiene constantes que representan modos de acceso para archivos y directorios. Estas constantes se utilizan con las funciones proporcionadas por el módulo ```fs```, como access, chmod, stat, entre otras.

# Ejercicio 2

 En este caso, el objetivo a cumplir es el crear dos programas que en esencia son el mismo, pero con la diferencia de que uno de ellos utiliza el metodo pipe y el otro no. El funcionamiento principal de estos programas se basa en , con la ayuda de ```yrgs```, crear comandos para poder obtener la cantidad de lineas, palabras y/o caracteres de un fichero, el cual se pasa como argumento del comando.

 - En el caso de no usar pipe, las funciones que se encargan de contar las lineas, palabras y caracteres se basan en la busqueda de la existencia del fichero pasado por terminal con los metodos ```path.resolve(`nombre del archivo)``` y ``` fs.existsSync(`nombre del archivo)```. En caso de que el archivo exista, se procede a leerlo con el metodo ```fs.readFileSync(`nombre del archivo)```. Una vez leido el archivo, se procede a contar las lineas, palabras y caracteres con los metodos ```split('\n')```, ```split(/\s+/)``` y ```split('')```. Por ultimo, se procede a imprimir por pantalla el resultado de las operaciones.

 - En el caso contrario, en el que se utiliza pipe, se definen las funciones de contar lineas, palabras y caracteres con la condición de devolver un EventEmitter. En el caso de contar las líneas  crea dos procesos utilizando los comandos 'cat' y 'wc', respectivamente, y luego los conecta en un tubería (pipe). La tubería permite que la salida del primer proceso se convierta en la entrada del segundo proceso.

 Después de eso, el código configura un detector de eventos para la salida del segundo proceso. Cuando el segundo proceso envía datos, el código los convierte a un número entero y los emite como un evento personalizado llamado 'lineas', utilizando la clase EventEmitter de Node.js.

 En resumen, este bloque de código cuenta el número de líneas en un archivo utilizando los comandos 'cat' y 'wc', y emite un evento con el número de líneas como resultado.

 La unica diferencia entre las tres funciones se detecta en el argumento que acompaña a ```wc```, puesto que en el caso de contar las lineas se utiliza ```-l```, en el caso de contar las palabras se utiliza ```-w``` y en el caso de contar los caracteres se utiliza ```-c```.

# Ejercicio 3

El tercer ejercicio se basa en la practica 9, en la cual se pide crear un programa que permita crear, listar, mostar un funko en concreto, borrar y actualizar funkos de un usuario. Para ello, se utiliza el modulo ```yargs``` para crear los comandos necesarios para poder realizar las operaciones anteriores.

Pero en esta práctica se añade el uso de ervidor y cliente, donde se ha especificado que el servidor se encargará de la gestión de los funkos, mientras que el cliente se encargará de la interacción con el usuario.

- Servidor.
  El servidor escucha en el puerto 60300 para recibir mensajes JSON que especifican acciones a realizar en una colección de figuras Funko Pop. La comunicación se realiza a través de la red utilizando el protocolo TCP.

 La colección de Funko Pops está definida en el archivo "funkoCollection.js", mientras que cada figura en sí misma está definida en el archivo "funco.js". La respuesta que envía el servidor al cliente dependerá del tipo de acción que se esté solicitando (add, update, remove, read, list), y puede incluir la colección completa de figuras Funko Pop.

 En generales, el servidor acepta conexiones de clientes y espera recibir mensajes JSON que contienen información sobre qué acción realizar en la colección de Funko Pops. Luego, el servidor procesa la solicitud y envía una respuesta al cliente indicando si la acción se completó con éxito o no, y en algunos casos, también devuelve información específica sobre la figura Funko Pop que se modificó o consultó.

- Cliente.
 En este caso se utiliza diferentes módulos para construir una aplicación de línea de comandos que permite interactuar con una colección de Funko Pops de un usuario a través de comandos. Para lograr esto, se utilizan diferentes paquetes que se importan al inicio del archivo, como "net", "yargs" y "chalk".

 El código comienza definiendo un tipo de solicitud llamado "RequestType", que tiene una propiedad "type" y una propiedad "funkoPop". La propiedad "type" tiene un valor de cadena literal que puede ser "add", "update", "remove", "read" o "list". La propiedad "funkoPop" es un array de objetos Funko.

 Luego se crea un objeto "client" utilizando el módulo "net" para conectarse a un servidor en el puerto 60300.

 Después se utiliza el paquete "yargs" para definir diferentes comandos que permiten al usuario interactuar con su colección de Funko Pops. En este código se definen cuatro comandos: "mostrar", "listar", "modificar" y "eliminar".

 A continuacion, se implementa el código del cliente para un servidor que maneja una colección de Funko Pops. Este cliente se conecta al servidor mediante una conexión de socket, y espera recibir mensajes del servidor que contienen información sobre la colección de Funkos.

 El código tiene un switch statement que analiza el mensaje recibido del servidor y ejecuta una acción en consecuencia. Si el tipo de mensaje es "add", el código comprueba si el Funko Pop fue añadido correctamente o no, y muestra un mensaje de éxito o error en consecuencia. Si el tipo de mensaje es "update", el código comprueba si el Funko Pop fue modificado correctamente o no, y muestra un mensaje de éxito o error en consecuencia. Si el tipo de mensaje es "remove", el código comprueba si el Funko Pop fue eliminado correctamente o no, y muestra un mensaje de éxito o error en consecuencia. Si el tipo de mensaje es "list", el código muestra una lista de todos los Funko Pops del usuario especificado, junto con su valor de mercado. Si el tipo de mensaje es "read", el código muestra la información completa de un Funko Pop en particular.

 En resumen, el código es una implementación de un cliente para un servidor que maneja una colección de Funko Pops, y proporciona una interfaz para que el usuario pueda interactuar con la colección.
 
# Conclusiones