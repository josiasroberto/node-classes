const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','root','admin',{
  host: "localhost",
  dialect:'mysql'
})

//autenticar conexão
sequelize.authenticate().then(function(){
  console.log('Conectado com sucesso!')
}).catch(function(erro){
  console.log('Falha ao se conectar: '+ erro)
})

//Models no Sequelize

const Postagem = sequelize.define('postagens',{
  titulo:{
    type: Sequelize.STRING
  },
  conteudo:{
    type: Sequelize. TEXT
  }
})

// Postagem.create({
//   título:"Um título qualquer",
//   conteudo:"lorem ipsuma daidhaoe iha odaheouahe" 
// })

const Usuario = sequelize.define('usuarios',{
  nome:{
    type: Sequelize.STRING
  },
  sobrenome:{
    type: Sequelize.STRING
  },
  idade:{
    type: Sequelize.INTEGER
  },
  email:{
    type: Sequelize.STRING
  }
})

// Usuario.create({
//   nome:"Josias",
//   sobrenome:"Roberto",
//   idade:26,
//   email:"josias@gmail.com"
// })

//Postagem.sync({force:true})
//Usuario.sync({force:true})