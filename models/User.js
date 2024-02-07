const db = require('../configs/db')
const { DataTypes } = require('sequelize')

const User = db.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

module.exports = User
