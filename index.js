const express = require('express');
const app = express()
const router = require('./router/router');

app.use(express.urlencoded({extended: false}))
app.use(express.json())

 
app.use('/', router)
  
app.listen(4040, () => {
    console.log("Server Running")
})