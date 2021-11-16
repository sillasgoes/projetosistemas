const express = require('express');
const route = express.Router();
const axios = require('axios');



// CHAMDA PARA MICROSSERVIÇO DE DISPONIBLIDADE DE AGENDA 
route.post('/eventos', async (req, res) => {
    
     const {id_agenda} = req.body;
 
     try {

          await axios({
             url : 'http://localhost:4002/dispo/agenda',
             method: 'post',
             data: {
                id_agenda : id_agenda
             }
            
            })
      
          res.status(200).send({msg: 'OK'})

         } catch (error) {
             console.log(error)
         }
     
})

// CHAMADA PARA O MICROSERVIÇO DE ATUALIZAÇÃO DE AGENDA 

route.post('/eventos/consulta/atualizar', async(req, res) => {

      const {id_consulta, id_agenda} = req.body;


      try {
         
         await axios({
            url: 'http://localhost:4003/consulta/atualizar',
            method: 'POST', 
            data:{
               id_consulta : id_consulta, 
               id_agenda : id_agenda
            }
         })
       
        res.sendStatus(200)
      } catch (error) {
         console.log(error)
      }
     

})



module.exports = route