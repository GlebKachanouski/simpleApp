const { Task } = require("../models");

exports.list = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.taskId);
    if (!task) {
      return res.status(404).end();
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.insert = async (req, res) => {
  try {
    req.body.userId = await req.params.userId;
    await Task.create(req.body);
    res.status(201).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.patchById = async (req, res) => {
  try {
    const [task] = await Task.update(req.body, {
      where: { id: req.params.taskId },
    });
    if (!task) {
      return res.status(404).end();
    }
    res.status(200).end();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.removeById = async (req, res) => {
  try {
    const task = await Task.destroy({ where: { id: req.params.taskId } });
    if (!task) {
      return res.status(404).end();
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).end();
  }
};