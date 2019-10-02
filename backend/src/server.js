const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();   

mongoose.connect('mongodb+srv://kdias:kdias321@kdiasmongo-b44kl.mongodb.net/aulaRocket?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// req.query = acessar query params (para filtros)
// req.params = acessar router params (para edicao , delete)
// req.body = acessar corpo de requisicao (edicao e criacao)

//req ==> requisicao e res ==> resposta

app.use(express.json())
app.use(routes);
    
app.listen(9999);