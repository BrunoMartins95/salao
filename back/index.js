const connect = require('./connect');
// pegar dados do banco de dados

const inserts = async (order) => {
    const columns = Object.keys(order)
      .join(', ');
    
    const placeholders = Object.keys(order)
      .map((_key) => ('?'))
      .join(', ');
  
    const [{ insertId }] = await connect.execute(
      `INSERT INTO products (${columns}) VALUES (${placeholders})`,
      [...Object.values(order)],
    );
  
    return insertId;
  };

    // criar as variaveis de conexão 

// Criar Query em SQL para executar comandos no banco de dados

// Criar endpoint para inserir dados no banco de dados