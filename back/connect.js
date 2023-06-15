async function connect() {

  if (global.connection && global.connection.state !== 'disconnected')
       return global.connection;

  const mysql = require("mysql2/promise"); 
  const connection = await mysql.createConnection("mysql://root:@localhost:3306/dbsalao");
  console.log("Conectou no MySQL!");
  global.connection = connection;
  return connection;
}

//connect();

// CRUD // 

// Select

async function selectDates(){
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM agendamento;');
  return  rows;
}

// Insert

async function insertDate(date){
    const conn = await connect();
    const sql = 'INSERT INTO agendamento (agen_data,agen_client,agen_servico) VALUES (?,?,?);';
    const values = [date.agen_data, date.agen_client, date.agen_servico];
    return await conn.query(sql, values);

}

// Update

async function updateDate(id_agendamento, date) {
    const conn = await connect();
    const sql = 'UPDATE agendamento SET agen_data=?, agen_client=?, agen_servico=? WHERE id_agendamento=?';
    const values = [date.agen_data, date.agen_client, date.agen_servico, id_agendamento];
    return await conn.query(sql,values);
}

// Delete

async function deleteDate(id_agendamento) {
  const conn = await connect();
  const sql = 'DELETE FROM agendamento WHERE id_agendamento=?';
  return await conn.query(sql, [id_agendamento]);
}

module.exports = {selectDates,insertDate,updateDate,deleteDate}