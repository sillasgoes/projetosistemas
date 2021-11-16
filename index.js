const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./router/route');



app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', route)
app.use(cors())

 
app.listen(4000, () => {
    console.log("Serviço de Barramento Inciado")
})