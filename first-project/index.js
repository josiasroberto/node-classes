const express = require('express');
const app = express();
const handlebars = require('express-handlebars')

const Post = require('./models/Post')


//Config
  //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //Middleware para receber dados do formulário
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())


//Rotas
app.get('/', function(req, res){
  Post.findAll({order: [['id', 'DESC' /*ou ASC: ordenamento */ ]]}).then(function(posts){
    res.render('home',{posts: posts})
  })
})

app.get('/cad',function(req, res){
  res.render('form')
})

app.post('/add',function(req, res){
  Post.create ({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function(){
   // res.send("Post criado com sucesso!")
    res.redirect('/')
  }).catch(function(erro){
    res.send(`Erro ao criar post: ${erro}`)
  })

  // res.send(`FORMULÁRIO RECEBIDO!
  // Texto: ${req.body.titulo} 
  // Conteudo: ${req.body.conteudo} `)
})

app.get('/deletar/:id', function(req, res){
  Post.destroy({where: {'id': req.params.id}}).then(function(){
    res.send("Postagem deletada com sucesso!")
  }).catch(function(erro){
    res.send("Esta postagem não existe!")
  })
})






//listen fica na última linha do código
app.listen(8081, function(){
  console.log('Rodando')
});