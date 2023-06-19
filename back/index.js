const { error } = require('console');
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, (error)=> {
    if (error){
        console.log("back morreu");
        return
    }
    console.log("back está de pé");
});

