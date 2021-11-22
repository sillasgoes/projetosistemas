const { urlencoded } = require('express');
const express = require('express');
const app = express();
const route = require('./router/route');
const cors = require('cors');


app.use(express.urlencoded())
app.use(cors())
app.use(express.json())

app.use('/', route)
 

app.listen(4003, () => {
     console.log("Microsserviço de atualização de consulta rodando!")
})