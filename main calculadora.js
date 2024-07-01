// importar clase Calculadora desde calculadora.js
import Calculadora from './calculadora.js';

// crear instancia de Calculadora
const calculadora = new Calculadora();

//usar métodos de la clase
const resultadoMultiplicacion = calculadora.multiplicar(5, 3);
console.log('Multiplicación:', resultadoMultiplicacion); // resultado: Multiplicación: 15

const resultadoDivision = calculadora.dividir(10, 2);
console.log('División:', resultadoDivision); // resultado: División: 5

  