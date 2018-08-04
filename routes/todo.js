var todolist = [
    {
        "task": "Walk the cat",
        "Owner": "Kristen"
    },
    {
        "task": "Water the plants",
        "Owner": "Kristen"
    }
]

module.exports = [
    
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply("Hello World with arrow functions from Hapi!");
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
            reply(todolist).code(201);
        }
    },
    
    {
        method: 'GET',
        path: '/api/v1/todolist/{index}',
        handler: (request, reply) => {
            reply(todolist[request.params.index-1]);
        }
    },

    {
        method: 'PUT',
        path: '/api/v1/todolist/{index}',
        handler: (request, reply) => {
            
            newTask = {
                "task": request.payload.task,
                "owner": request.payload.owner
            };

            todolist[request.params.index-1] = newTask
            reply(todolist);
        }
    },

    {
        method: 'DELETE',
        path: '/api/v1/todolist/{index}',
        handler: (request, reply) => {
            delete todolist[request.params.index-1]
            reply().code(204);
        }
    }

];