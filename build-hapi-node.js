var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8080 });

var todolist = [
    {
      "task":"Walk the cat",
      "owner":"Kirsten"
    },
    {
      "task":"Water the plants",
      "owner":"Kirsten"
    }
];

server.route([
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply("Hello World from Hapi!");
        }
    },
    {
        method: 'GET',
        path: '/api/v1/todolist',
        handler: (request, reply) => {
              reply(todolist);
        }
      },
      {
        method: 'POST',
        path: '/api/v1/todolist',
        handler: (request, reply) => {
            newTask = {
                "task": request.payload.task,
                "owner": request.payload.owner
            };
            todolist.push(newTask);
            reply(tasklist).code(201);
        }
      },

      {
        method: 'GET',
        path: '/api/v1/todolist/{index}',
        handler: (request, reply) => {
              reply(todolist[request.params.index-1]);
        }
      }

    ]);

server.start( (err) => {
    console.log('Hapi is listening on http://localhost:8080');    
});