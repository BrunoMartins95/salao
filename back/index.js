const express = require('express');

const insertClient = require('./controller/client.controller')

const app = express();

app.use(express.json());

app.post("/", insertClient)

app.listen(80, () => {
    console.log('backend online');
});


