const { Sequelize } = require('sequelize')
const db = new Sequelize('yasamin', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

const Auth = async () => {
  await db.authenticate()
}

try {
  Auth()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

module.exports = db
