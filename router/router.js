const { Router } = require('express');
const express = require('express');
const route = express.Router()
const PacienteController = require('../controller/PacienteController');
 
route.get('/select', PacienteController.select)
route.post('/create', PacienteController.create)
route.put('/edit', PacienteController.edit)
route.delete('/del', PacienteController.del)


module.exports = route
