const { olaMundo, calcularAreaTriangulo, calcularDesconto } = require('../src/testeInicial.js')

test('Test Ola Mundo', ()=>{
     let texto = olaMundo()
     expect(texto).toBe('Ola Mundo')
})

test('Calcular área do Triângulo', ()=>{
     expect(calcularAreaTriangulo(2,5)).toBe(5)
})

test('Calcular área do Triângulo', ()=>{
     expect(calcularDesconto(100)).toBe(20)
})



