const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.post('/spots', SessionController.store);


module.exports = routes;