const express = require('express');
const routes = require('./routes');

const app = express();   


// req.query = acessar query params (para filtros)
// req.params = acessar router params (para edicao , delete)
// req.body = acessar corpo de requisicao (edicao e criacao)

//req ==> requisicao e res ==> resposta

app.use(express.json())
app.use(routes);
    
app.listen(3333);