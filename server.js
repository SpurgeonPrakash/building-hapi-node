var Hapi = require('hapi');

const routes = {};
routes.todo = require('./routes/todo');

var server = new Hapi.Server();
server.connection({ port: 8080 });

server.route(routes.todo);

server.start((err) => {
    console.log("Hapi is up and listening on http://localhost:8080");    
});

