const db = require('../configs/db')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const saltRounds = 10
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

User.hashPassword = async (myPlaintextPassword) => {
  const hash = await bcrypt.hashSync(myPlaintextPassword, saltRounds)
  console.log(hash)
  return hash
}

User.verifyPassword = async (myPlaintextPassword, hash) => {
  const res = await bcrypt.compareSync(myPlaintextPassword, hash)
  return res
}

module.exports = User
