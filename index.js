const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./router/route');



app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', route)


 
app.listen(4002, () => {
    console.log("Serviço de Disponibilidade Rodando !")
})