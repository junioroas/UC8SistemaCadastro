//Viabilidade da Data do Evento:

var dataAtual = new Date('2022-04-24')
var dataDoEvento = new Date('2022-04-27')


if (dataDoEvento > dataAtual){
    console.log ("\nEvento permitido. A data escolhida está disponível!")
}else{
    console.log ("\nA data deverá ser posterior à data atual! Escolha outra data!")
}

//Verificação da Idade do Participante: 

var idadeDoParticipante = 28
if (idadeDoParticipante >= 18){
    console.log("Idade permitida!")
}else{
    console.log("Idade não permitida! O participante deve ser maior de idade!")
}

//Verificação de Quantidade de Participantes:

let listaDeParticipantes = ["Tai Kamiya","Matt Ishida","Izzy Izumi","Sora Takenouchi","Mimi Tachikawa","Joe Kido","Kari Kamiya","Takeru Takaishi"]

if (listaDeParticipantes.length < 100){
    console.log("Cadastro permitido! Ainda há vagas disponíveis!")
}else if (listaDeParticipantes.length = 100){
    console.log("Cadastro permitido! Não há mais vagas!")
}else{
    console.log("Cadastro não realizado! Número de vagas excedido!")
}

//Exibição dos Nomes dos Participantes Cadastrados:

console.log("\nLista de participantes:")
let nomeDosParticipantes = listaDeParticipantes.length
for (let i= 0; i < nomeDosParticipantes; i++){
    const nomeCadastrado = listaDeParticipantes[i]
    console.log(nomeCadastrado)  
}




