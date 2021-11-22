const express = require('express');
const route = express.Router()
const axios = require('axios');
const knex = require('../database/database');



// CHMADA PARA ATUALIZAR O BD CONSULTA_AGENDA 


route.post('/consulta/atualizar', async (req, res) => {

       const {id_consulta, id_agenda } = req.body 

       try {
             
          await knex.insert({
            id_consulta: id_consulta, 
            id_agenda : id_agenda,
            status:  1})
            .into('consulta_agenda')

          res.sendStatus(200)
       } catch (error) {
           console.log(error)
       }

})


module.exports = route;