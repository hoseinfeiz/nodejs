const db = require('../configs/db')
const { DataTypes } = require('sequelize')

const Category = db.define(
  'categories',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    timestamps: false,
  }
)

module.exports = Category
