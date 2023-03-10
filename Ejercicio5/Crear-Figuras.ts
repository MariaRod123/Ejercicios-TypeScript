 import{ Circulo} from "./Circulo";
   import {Cuadrado} from "./Cuadrado";
   class CrearFiguras  {

    calcular(nombre: string, tipo: string, valor: number): Circulo | Cuadrado {
        return tipo == 'circulo' ? new Circulo(nombre, valor): new Cuadrado(nombre, valor);
    }
}

let figura = new CrearFiguras();

let cuadrado1 = figura.calcular('Cuadrado1', 'cuadrado', 9);
console.log(cuadrado1.calcularArea());
console.log(cuadrado1.calcularPerimetro());

let circulo1 = figura.calcular('Circulo1', 'circulo', 5);
console.log(circulo1.calcularArea());
console.log(circulo1.calcularPerimetro());
