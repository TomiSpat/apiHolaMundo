// Importando el módulo 'http' de Node.js
const http = require('http');

// Definiendo la dirección IP del servidor (localhost) y el puerto (3000)
const hostname = '127.0.0.1'; //Localhost
const port = 3000;

// Creando el servidor HTTP
const server = http.createServer((req, res) => {
    // Configurando el código de estado de la respuesta como 200 (OK)
    res.statusCode = 200;

    // Configurando el encabezado Content-Type como texto plano
    res.setHeader('Content-Type', 'application/json');

    // Enviando "Hola mundo!" como el cuerpo de la respuesta
    res.end('{"mensaje": "Hola Mundo!"}');
});

// Haciendo que el servidor escuche en el puerto y la dirección IP especificados
server.listen(port, hostname, () => {
    // Cuando el servidor está listo para recibir solicitudes, se imprime un mensaje en la consola
    console.log(`Server running at http://${hostname}:${port}/`);
});
