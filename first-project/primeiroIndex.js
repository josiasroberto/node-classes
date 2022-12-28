const express = require('express');
const app = express();

app.get("/",function(req,res){
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre",function(req, res){
  res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog",function(req, res){
  res.send("Bem-vindo ao meu blog!");
});

app.get("/ola/:nome/:cargo/:cor",function(req, res){
  
  res.send(`Olá ${req.params.nome}
  Seu cargo é ${req.params.cargo}
  Sua cor favorita é ${req.params.cor}`);
 
})




//listen fica na última linha do código
app.listen(8081, function(){
  console.log('Rodando')
});