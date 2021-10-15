const knex = require('../database/database');

class PacienteController {

    async select(req, res){
        
        try{
           let result = await knex.select().table('paciente')
            res.json({result})

        }catch(e){
          console.log(e)
        }
     }

     async create(req, res){
         const {cpf_paciente,
               nome_paciente,
               rg_paciente,
               data_nascimento_paciente,
               endereco_paciente, 
               telefone_paciente 
        } = req.body

        try {
            await knex.insert({cpf_paciente,
            nome_paciente,
            rg_paciente,
            data_nascimento_paciente,
            endereco_paciente, 
            telefone_paciente }).into('paciente')

            res.json({"Result": "Usuário Criado!"})
        }catch(e){
            console.log(e)
        }
     }

     async edit(req, res) {
       
        var {cpf_paciente,
            nome_paciente,
            rg_paciente,
            data_nascimento_paciente,
            endereco_paciente, 
            telefone_paciente 
     } = req.body

     try {
        const result = await knex('paciente').where("cpf_paciente", cpf_paciente )
               .update({nome_paciente: nome_paciente,
                rg_paciente: rg_paciente,
                data_nascimento_paciente: data_nascimento_paciente,
                endereco_paciente: endereco_paciente, 
                telefone_paciente: telefone_paciente})
          
          res.json({"Result": "Usuário Atualizado"})   
          
          
         } catch (error) {
             res.json({"Error": error})
         }
      }

      async del(req, res){

        const {cpf_paciente} = req.body
            
            try {
               const result = await knex('paciente').where("cpf_paciente", cpf_paciente).del()
               
               res.json({"Result": result})

        } catch (error) {
            console.log(error)
        }
      }
 

}



module.exports = new PacienteController()