// services
const { findAllTodos, findTodoById, createTodo, deleteTodo, updateTodo } = require('./todos.controller')

const findAll = (req, res) => {
      const todos = findAllTodos();
      res.status(200).json({
            message: 'This action return all todos',
            todos: todos
      });
}

const findById = (req, res) => {
      // convertir lo que me mandan por parametro
      const id = Number(req.params.id);
      const todo = findTodoById(id);

      // comprobacion
      try {
            if (todo) {
                  res.status(200).json({
                        message: 'This action return a task by id',
                        todo
                  })
            } else {
                  res.status(400).send('id invalido');
            }

      }
      catch (err) {
            console.log(err);
      }

}

const create = (req, res) => {
      const data = req.body;
      const newTodo = createTodo(data);
      res.status(201).json({
            message: 'This action return a new todo',
            newTodo
      });

}

const Delete = (req, res) => {
      const id = Number(req.params.id);
      const todoDelete = deleteTodo(id);
      // comprobaciones
      try {
            if (todoDelete !== -1) {
                  res.status(200).json({
                        message: 'This action returns a delete todo',
                        todoDelete
                  });
            } else {
                  res.status(400).json({ message: 'Id invalid' });
            }
      }
      catch (err) {
            console.log(err);
      }


}

const update = (req, res) => {
      const id = Number(req.params.id);
      const data = req.body;
      const todoUpdate = updateTodo(data, id);
      res.status(201).json(todoUpdate);
}






module.exports = {
      findAll,
      findById,
      create,
      Delete,
      update
}




