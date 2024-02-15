const Task = require('../models/Task')

const TaskController = {
  async create (req, res) {
    try {
      const task = await Task.create({...req.body, completed: false}) 
      res.status(201).json(task)
    } catch (error) {
      console.log(error)
    }
  },
  async getAll(req, res) {
    try {
      const tasks = await Task.find()
      res.json(tasks)
    } catch (error) {
      console.log(error)
    }
  },
  async getId (req, res) {
    try {
      const task = await Task.findById(req.params._id)
      res.json(task)
    } catch (error) {
      
    }
  },
  async updateCompleted (req, res) {
    try {
      const idTask = req.params._id
      const task = await Task.findByIdAndUpdate(
        idTask, {
          completed: true
        }, {new: true}
      )
      res.json(task)
    } catch (error) {
      
    }
  },
  async updateName(req, res){
    try {
      const id = req.params._id
      const title = req.body.title
      const task = await Task.findByIdAndUpdate(
        id, {
          title
        }, {new: true}
      )
      res.json(task)
    } catch (error) {
    }
  },
  async deleteId(req, res) {
    try {
      const id = req.params._id
      const task = await Task.findByIdAndDelete(id)
      res.json({mensaje: "task delete", task})
    } catch (error) {
      
    }
  }
}

module.exports = TaskController