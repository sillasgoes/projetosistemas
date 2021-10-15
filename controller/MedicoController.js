const knex = require('../database/database');

class MedicoController {

    async select(req, res){
        
        try{
           let result = await knex.select().table('medico')
            res.json({result})

        }catch(e){
          console.log(e)
        } 
     } 

     async create(req, res){
         const {crm,
               nome_medico,
               cpf_medico,
               especialidade_medico, 
               telefone_medico 
        } = req.body 

        try {
            await knex.insert({crm,
                nome_medico,
                cpf_medico,
                especialidade_medico, 
                telefone_medico }).into('medico')

            res.json({"Result": "Usuário Criado!"})
        }catch(e){
            console.log(e)
        }
     }

     async edit(req, res) {
       
        const {crm,
            nome_medico,
            cpf_medico,
            especialidade_medico, 
            telefone_medico 
     } = req.body

     try {
        const result = await knex('medico').where("crm", crm )
               .update({
                nome_medico: nome_medico,
                cpf_medico: cpf_medico,
                especialidade_medico: especialidade_medico, 
                telefone_medico: telefone_medico })
          
          res.json({"Result": "Usuário Atualizado"})   
          
         } catch (error) {
             res.json({"Error": error})
         }
      }

      async del(req, res){

        const {crm} = req.body
            
            try {
               const result = await knex('medico').where("crm", crm).del()
               
               res.json({"Result": result})

        } catch (error) {
            console.log(error)
        }
      }
 

}



module.exports = new  MedicoController()