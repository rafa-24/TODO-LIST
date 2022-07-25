const express = require('express');
const config = require('./config');
const todosRouter = require('./todos/todos.router').router;

// Init express server
const server = express();

server.get('/', (req, res) => {
      res.send('Hello world!');
});

server.use(express.json());


// middlewares
server.use('/api/v1', todosRouter);

server.listen(config.port, () => {
      console.log(`server on running on port ${config.port}`);
});
