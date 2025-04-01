
function mensagemInicial(){
    return 'Ola Mundo'
}

function meuObjeto(){
    let myObject = {
        nome: "Caderno",
        descricao: "Caderno 20 matérias com 400 folhas",
        preco: 35.00,
    }
    return myObject
}


module.exports = {mensagemInicial, meuObjeto}