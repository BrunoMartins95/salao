const mysql = require('mysql2/promise'); // importando pacote mysql (para fazer conexão com o banco de dados)

const connection = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: 'salao',
});

module.exports = connection;