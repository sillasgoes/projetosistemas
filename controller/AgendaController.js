const knex = require('../database/database');
const axios = require('axios');

class AgendaController{

   async select(req, res){
     
    try {
      let result = await knex('agenda').select()

      res.json({result})

    } catch (error) {
        console.log(error)  
    }

    }  
 
    async create(req, res){
       const {medico_crm,
             paciente_cpf_paciente,
             especialidade_medico,
             data_consulta
         } = req.body
       
         try {
              let result =  await knex.insert({medico_crm,
                paciente_cpf_paciente,
                especialidade_medico,
                data_consulta}).into('agenda')
              
                // CHAMADA PARA BARRAMENTO DE EVENTOS 
                await axios({
                    url: 'http://localhost:4000/eventos',
                    method: 'post', 
                    data: {
                        id_agenda : 564 
                    }
                })
            
                res.json({"Result": "Agenda Criada"})
         } catch (error) {
             console.log(error)
         }
       }

       async edit(req, res){
       
        const {id_agenda,
            medico_crm,
            paciente_cpf_paciente,
            especialidade_medico,
            data_consulta
        } = req.body
         
        try {
            let result = await knex('agenda').where("id_agenda", id_agenda)
            .update({
                medico_crm : medico_crm,
                paciente_cpf_paciente : paciente_cpf_paciente,
                especialidade_medico : especialidade_medico,
                data_consulta : data_consulta
            })

            res.json({"Result": "Agenda Atualizada!"})
        } catch (error) {
            console.log(error)
        } 
       }

       async del(req, res){
           const {id_agenda} = req.body

           try {
               let result = await knex('agenda').where("id_agenda", id_agenda).del()

               res.json({"Result": "Agenda Excluída"})
           } catch (error) {
               console.log(error)
           }
 
       }

}

module.exports = new AgendaController()
