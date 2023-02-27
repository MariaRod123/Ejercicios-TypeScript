import {Figura} from "./Figura";
 export class Cuadrado extends Figura{
    
     lado:number;

    constructor(nombre: string, lado:number) {
        super(nombre)
        this.lado= lado;
    }

    calcularArea():number {
        return Math.pow(this.lado,2)   
    }
  
    calcularPerimetro(): number {
        return 4 * this.lado
        
    }
}
