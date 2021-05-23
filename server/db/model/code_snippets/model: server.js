const { Model, DataTypes } = require('sequelize');
const db = require('../../db');

class Server extends Model {}

Server.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    snippet: {
      type: DataTypes.TEXT,
    },
  },

  {
    sequelize: db,
    modelName: 'server',
  }
);

module.exports = Server;
