const express = require('express');
const route = express.Router();
const axios = require('axios');
const knex = require('../database/dabatase');

route.post('/dispo/agenda', async (req, res) => {
    
     const {id_agenda} = req.body;
    
     try {
         
        await knex.insert({
             id_agenda : id_agenda,
             disponibilidade : 1})
             .into('disponibilidade')

             res.status(200).send({msg: 'OK'})
         
         } catch (error) {
             console.log(error)
         }
     
})



module.exports = route