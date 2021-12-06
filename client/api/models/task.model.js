const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: 'name cannot be blank'
    },
    description: {
      type: String,
      required: 'description cannot be blank'
    }
  },
  { collection: 'task' }
);

module.exports = mongoose.model('task', taskSchema);