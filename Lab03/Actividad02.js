var bandera = false;
console.log(typeof bandera);

function mifuncion (){}
console.log(typeof mifuncion);

var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);

var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

var y = null;
console.log(typeof y);
