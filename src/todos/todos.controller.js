// base da datos fake
const todosDB = [
      { id: 1, title: 'calculo', description: 'hacer tarea', done: false },
      { id: 2, title: 'compras', description: 'ir de compras', done: false },
      { id: 3, title: 'leer', description: 'leer el libro', done: false },
      { id: 4, title: 'cena', description: 'hacer la cena', done: false }
];

// Obtener todos
const findAllTodos = () => {
      return todosDB;
}

// Obtener un todo en especifico
const findTodoById = (id) => {
      const todoId = todosDB.find(index => index.id === id);
      return todoId;
}

// crear un todo
const createTodo = (data) => {
      const newObject = {
            id: todosDB[todosDB.length - 1].id + 1,
            title: data.title,
            description: data.description,
            done: data.done
      }

      todosDB.push(newObject)
      return todosDB

}
// eliminar un todo
const deleteTodo = (id) => {
      const todoId = todosDB.findIndex(todo => todo.id === id);
      todosDB.splice(todoId, 1);
      return
}

// Editar un todo
const updateTodo = (id, data) => {
      const todo = todosDB.findIndex((index) => index.id === id);
      // manejar el error del indice
      if (todo !== -1) {
            todosDB[todo] = {
                  id: data.id,
                  title: data.title,
                  description: data.description,
                  done: data.done
            }

      } else {
            createTodo(data);
      }
      return todosDB;
}


module.exports = {
      findAllTodos,
      findTodoById,
      createTodo,
      deleteTodo,
      updateTodo
};
