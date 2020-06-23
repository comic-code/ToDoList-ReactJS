const express = require('express');

module.exports = (server) => {
  const router = express.Router();
  
  // Middleware expecífico para /api
  server.use('/api', router);

  const todoService = require('../api/todo/todoService');
  todoService.register(router, '/todos');
}