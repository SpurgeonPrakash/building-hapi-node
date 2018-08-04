# Building APIs Using Hapi in Node.js

### Course Video:

https://wwwlyndacom.res.banq.qc.ca/Node-js-tutorials/Building-APIs-Using-Hapi-Node-js/552874-2.html

### Docker commands

#### Running the container

`$ docker run -v $(pwd):/opt -p 8080:8080 -it synedra/hapi_api`

#### Attaching to a running container

```
$ docker ps  
$ docker attach <ID/Name of container>
```

### SIPL Repository:

https://sipl.desjardins.com/stash/projects/EXLICOCO/repos/jfrf-hapi-node


### Docker commands for the project:

Running the container 

`$ sudo docker run -v $(pwd):/opt -p 8080:8080 -it synedra/hapi_api`

Attaching to a running the container (Same shell)

`$ sudo docker attach  <CName/CID>`

Connecting to a container in a new shell

`$ sudo docker exec -it <CName/CID>`


### Using Httpie to test the API

GET (Read) all the todos

`$ http http://localhost:8080/api/v1/todolist`

GET (Read) Individual Items

```
http http://localhost:8080/api/v1/todolist/1
http http://localhost:8080/api/v1/todolist/2
```

POST (Write) a new Todo

`$ http http://localhost:8080/api/v1/todolist task="Eat Dinner" owner="Kirsten"`

PUT (Modify) a todo

`$ http PUT http://localhost:8080/api/v1/todolist/1 task="Walk the Dog" owner="Kirsten"`

DELETE a todo

`$ http DELETE http://localhost:8080/api/v1/todolist/3`

### Postman (Alternative to httpie)

Installation Guide on Ubuntu: https://blog.bluematador.com/posts/postman-how-to-install-on-ubuntu-1604/

### References
https://github.com/PacktPublishing/BuildingAPIDevelopmentwithNode.js


