// Using controller to pass routes functions to our routes
const TaskController = require("../controllers/task.controller");

// Exporting our routes as a function receiving our
// Express app as param
module.exports = (app) => {
  // Creates /tasks group route
  // Where GET method list all tasks
  // and POST create task
  app.route("/tasks").get(TaskController.list_all).post(TaskController.create);

  // Creates a /tasks/:bindID group route
  // Where GET read an specific task
  // PUT update an specific task
  // DELETE delete an specific task
  // As the group has the bind in params,
  // it means specific task based on binded ID
  // passed on the group route
  app
    .route("/tasks/:taskId")
    .get(TaskController.read)
    .put(TaskController.update)
    .delete(TaskController.delete);
};
