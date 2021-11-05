const express = require('express');
const route = express.Router()
const PacienteController = require('../controller/PacienteController');
const MedicoController = require('../controller/MedicoController');
const AgendaController = require('../controller/AgendaController');
const ConsultaController = require('../controller/ConsultaController');

 
// Rotas dos Paciente

route.get('/paciente/select',  PacienteController.select )
route.post('/paciente/create', PacienteController.create)
route.put('/paciente/edit',    PacienteController.edit)
route.delete('/paciente/del',  PacienteController.del)

// Rotas dos Médicos

route.get('/medico/select',  MedicoController.select)
route.post('/medico/create', MedicoController.create)
route.put('/medico/edit',    MedicoController.edit)
route.delete('/medico/del',  MedicoController.del)

// Rotas para as Agendas 

route.get('/agenda/select',  AgendaController.select)
route.post('/agenda/create', AgendaController.create)
route.put('/agenda/edit',    AgendaController.edit)
route.delete('/agenda/del',  AgendaController.del)

// Rotas para as Consultas 

route.get('/consulta/select',  ConsultaController.select)
route.post('/consulta/create', ConsultaController.create)
route.put('/consulta/edit',    ConsultaController.edit)
route.delete('/consulta/del',  ConsultaController.del)

module.exports = route
