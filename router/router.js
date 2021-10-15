const express = require('express');
const route = express.Router()
const PacienteController = require('../controller/PacienteController');
const MedicoController = require('../controller/MedicoController');

// Rotas dos Paciente

route.get('/paciente/select',  PacienteController.select)
route.post('/paciente/create', PacienteController.create)
route.put('/paciente/edit',    PacienteController.edit)
route.delete('/paciente/del',  PacienteController.del)

// Rotas dos Médicos

route.get('/medico/select',  MedicoController.select)
route.post('/medico/create', MedicoController.create)
route.put('/medico/edit',    MedicoController.edit)
route.delete('/medico/del',  MedicoController.del)



module.exports = route
