import {Figura} from "./Figura";
 export class Circulo extends Figura{
    
     radio:number

    constructor(nombre: string, radio:number) {
        super(nombre) 
        this.radio= radio;
    }

    getRadio(){
        return this.radio
    }

   
    calcularArea():number {
        return Math.PI * Math.pow(this.radio,2);  
    }
  
    calcularPerimetro(): number {
        return Math.PI * 2 * this.radio;
        
    }
}

