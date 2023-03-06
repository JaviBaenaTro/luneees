/* crear una clse pesona que sea el padre de una clase llamada cliente. la clase persona tendra de atributos
nmobre apellidos y edad. la clase cliente tendra de atributos: lista de la compra y dinero gastado
escribir un archivo buscando en la documentacion de node con los datos del cliente
 */
const fs = require("fs");
class Persona{
    constructor (nombre,apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad= edad;

    }

    toString(){
        return this.nombre + " "  + this.apellido +" " + this.edad
    }
   
} 
class Cliente extends Persona{
    constructor( nombre,apellido, edad, listaCompra, dinero){
        super(nombre,apellido,edad);
        this.listaCompra = listaCompra;
        this.dinero= dinero;
    }
    toString(){
        return "nombre:" + this.nombre + " "  + "apellido:" + this.apellido +" " +  "edad:" + this.edad + " " + 
        "lista:" + this.listaCompra + " " + "dinero:"+ this.dinero;
    }
}

let cliente1 = new Cliente("andrea", "baena","27",["leche", "huevos", "pan"], 20);

fs.writeFile("lista.txt", "primer cliente:" + cliente1.toString(),function(){});

/* ejercico api
y esto mismo  con varios clientes
y buscasr como hacer saltos de linea*/