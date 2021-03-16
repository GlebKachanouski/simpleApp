'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User, {
        onDelete: "CASCADE",
        foreignKey: "userId",
      });
    }
  };
  Task.init({
    name: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
    name: {
      singular: "task",
      plural: "tasks",
    },
  });
  return Task;
};