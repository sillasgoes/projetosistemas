const knex = require('../database/database');



class ConsultaController {
       
   async select(req, res){

    try {
        let result = await knex('consulta').select()
        res.json({result})
  
      } catch (error) {
          console.log(error)  
      }
   }
       
   async create(req, res){
    const {agenda_id_agenda, 
        descricao_consulta, 
        receita
    } = req.body
  
    try {
        let result = await knex.insert({agenda_id_agenda, 
            descricao_consulta, 
            receita}).into('consulta')

           res.json({"Result": "Consulta Criada"})
    } catch (error) {
        console.log(error)
    }

   }
       
   async edit(req, res){
    const {id_consulta,
        agenda_id_agenda, 
        descricao_consulta, 
        receita
    } = req.body
  
    try {
        let result = await knex('consulta').where("id_consulta", id_consulta)
            .update({agenda_id_agenda : agenda_id_agenda, 
                    descricao_consulta : descricao_consulta, 
                    receita : receita 
                })
             res.json({"Result": "Consulta Editada"})
    } catch (error) {
        console.log(error)
    }
    
   }
       
   async del(req, res){

    const {id_consulta} = req.body

    try {
        let result = await knex('consulta').where("id_consulta", id_consulta).del()

        res.json({"Result": "Consulta Excluída"})

    } catch (error) {
        console.log(error)
    }
   }

}


module.exports = new ConsultaController()