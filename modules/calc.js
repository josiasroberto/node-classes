/*function soma(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
function multi(a,b){
  return a*b;
}
function div(a,b){
  return a/b;
}*/
//será criado um arquivo para cada função

const somaFunc = require('./soma')
const subFunc = require('./sub')
const multiFunc = require('./multi')
const divFunc = require('./div')


console.log(somaFunc(2,5))


//Calculadora 2.0
const calculadora = require('./calculadora')

console.log(calculadora.nome)
console.log(calculadora.soma(2,2))

