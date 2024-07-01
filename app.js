// importar clase Persona desde Persona.js
import Persona from './Persona.js';

// crear instancia de Persona
const persona1 = new Persona('Juan', 30);
const persona2 = new Persona('Maria', 25);

// ejecutar método mostrarInformacion
persona1.mostrarInformacion(); // resultado: Nombre: Juan, Edad: 30
persona2.mostrarInformacion(); // resultado: Nombre: Maria, Edad: 25
