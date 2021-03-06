var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8080 });

// Create the data store for the test API
var tasklist = [
      {
        "task":"Walk the cat",
        "owner":"Kirsten"
      },
      {
        "task":"Water the plants",
        "owner":"Kirsten"
      }
]

server.route([
  // Get ToDo List
  {
    method: 'GET',
    path: '/api/v1/todolist',
    handler: function(request, reply) {
   	   reply(tasklist);
    }
  },

  {
    method: 'POST',
    path: '/api/v1/todolist',
    handler: function(request, reply) {
   	   newTask = {"task":request.payload.task, "owner":request.payload.owner};
       tasklist.push(newTask);
   	   reply(tasklist).code(201);
    }
  },

  // Get single task
  {
    method: 'GET',
    path: '/api/v1/todolist/{index}',
    handler: function(request, reply) {
      reply(tasklist[request.params.index-1])
    }
  },
  // Update single task
  {
    method: 'PUT',
    path: '/api/v1/todolist/{index}',
    handler: function(request, reply) {
       newTask = {"task":request.payload.task, "owner":request.payload.owner};
       tasklist[request.params.index-1] = newTask;
   	   reply(tasklist);
    }
  },
  {
    method: 'DELETE',
    path: '/api/v1/todolist/{index}',
    handler: function(request, reply) {
       delete tasklist[request.params.index-1];
   	   reply().code(204);
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply('Hello world from hapi');
    }
  }
]);

server.start(function(err) {
  console.log('Hapi is listening to http://localhost:8080');
});
