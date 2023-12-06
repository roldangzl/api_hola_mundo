const http = require('http'); //La constante http ahora puede gestionar peticiones HTTP.

const hostname = '127.0.0.1';
const port = 3000;

//la funcion se ejecuta cada vez que hay una peticion al puerto de escucha 
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('{"mensaje" : "Hola mundo"}');

});

//el servicio http comienza a escucha al hostname y al puerto configurado
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

