const TaskController = require('../controllers/task.controller');

module.exports = app => {
  app
    .route('/tasks')
    .get(TaskController.list_all)
    .post(TaskController.create);

  app
    .route('/tasks/:taskId')
    .get(TaskController.read)
    .put(TaskController.update)
    .delete(TaskController.delete);
};