const router = require('express').Router();

const htppTodos = require('./todos.http');

router.route('/todos')
      .get(htppTodos.findAll)
      .post(htppTodos.create)

router.route('/todos/:id')
      .get(htppTodos.findById)
      .delete(htppTodos.Delete)
      .put(htppTodos.update)

module.exports = {
      router
};
