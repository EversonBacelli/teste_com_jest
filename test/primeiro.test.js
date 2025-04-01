const {mensagemInicial, meuObjeto} = require('../testeInicial.js')


test('primeiro test', ()=>{
     expect(mensagemInicial()).toBe('Ola Mundo')
})

test('testando objeto', ()=>{
     const myObject = meuObjeto()

     expect(myObject).toHaveProperty('nome', 'Caderno')
     expect(myObject).toHaveProperty('descricao', "Caderno 20 matérias com 400 folhas")
     expect(myObject).toHaveProperty('preco', 35.00)
     
     
})
