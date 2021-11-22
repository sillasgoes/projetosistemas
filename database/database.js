

const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '12345678',
      database : 'mydb'
    }
  });

  module.exports = knex    