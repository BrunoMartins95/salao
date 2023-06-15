

(async () => {
const connect = require("./connect");
console.log('Começou!');

console.log('INSERT INTO AGENDAMENTO');
const result = await connect.insertDate({agen_data: "2023-10-20T23:05:25.000Z", agen_client: "Cliente do Corte", agen_servico:"Pintura"});
console.log(result);

console.log('UPDATE AGENDAMENTO');
const result2 = await connect.updateDate(3,{agen_data: "2023-06-14T23:05:25.000Z", agen_client: "Cliente do Corte", agen_servico:"Corte"});
console.log(result2);

console.log('DELETE AGENDAMENTO');
const result3 = await connect.deleteDate(4);
console.log(result3);

console.log('SELECT * FROM AGENDAMENTO');
const agendamentos = await connect.selectDates();
console.log(agendamentos);

})();

