const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  description: {
    trim: true,
    type: String,
    required: true
  },
  completed: {
    default: false,
    type: Boolean
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task