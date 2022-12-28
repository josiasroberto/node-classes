const mongoose = require('mongoose')

//configurando mongoose
mongoose.connect('mongodb://localhost:27017/aprendendo').then(()=>{
  console.log("MongoDB Conectado.")
}).catch((err)=>{
  console.log("Erro ao conectar ao MongoDB: " +err)
})

//Model usuarios - definição

const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  },
  pais: {
    typ: String
  }


})

//Collection
const usuario = mongoose.model('usuarios', UsuarioSchema)

new usuario({
  nome: "Maria",
  sobrenome: "Clara",
  email: "maria@gmail.com",
  idade: 20,
  pais: "Canadá"
}).save().then(
  ()=>{ console.log("Usuário criado com sucesso!")
}).catch((err)=>{
  console.log("Erro ao registrar usuário: "+err)
})