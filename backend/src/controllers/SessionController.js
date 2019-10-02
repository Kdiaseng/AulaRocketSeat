// index, show, store, update, destroy

const User = require('../models/User')

module.exports = {
    async store(req , res){
       const { email } = req.body;

       //forma simplificada para setar email ja que é o mesmo nome
       let user = await User.findOne({email});

       if (!user){
            user = await User.create({ email });
       }

       //await espera até finalizar a requisicao
       // const user = await User.create({ email });


       return res.json(user);
     
   }
}