let { pessoas } = require('../src/bd_pessoas.js')


beforeAll( async () =>{
     pessoas.map(p =>{
         p.altura = p.altura / 100
         let peso = p.peso
         let altura = p.altura
         p.imc = parseFloat( (peso / (altura * altura)).toFixed(2) )
     })
     console.log(pessoas[19].imc)
})


test('Verificar o tamanho do vetor', ()=>{
    expect(pessoas.length).toBe(20)
})

test('Verificar os campos de um dos objetos', ()=>{
    expect(pessoas[0]).toHaveProperty('codigo')
    expect(pessoas[0]).toHaveProperty('nome')
    expect(pessoas[0]).toHaveProperty('altura')
    expect(pessoas[0]).toHaveProperty('peso')
    expect(pessoas[0]).toHaveProperty('imc')
})

test('Verificar o conteúdo do objeto de código 20', ()=>{
    expect(pessoas[19]).toHaveProperty('codigo', 20)
    expect(pessoas[19]).toHaveProperty('nome', "Vanessa Dias")
    expect(pessoas[19]).toHaveProperty('altura', 1.69)
    expect(pessoas[19]).toHaveProperty('peso', 62.0)
    expect(pessoas[19]).toHaveProperty('imc', 21.71 )
})


test.skip('Test Ola Mundo', ()=>{
    let texto = olaMundo()
    expect(texto).toBe('Ola Mundo')
})