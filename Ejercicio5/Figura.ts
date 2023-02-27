import {IFiguraGeometrica} from "./Figura-Geometrica";
export abstract class Figura implements IFiguraGeometrica {

    protected nombre: string;
    
    constructor(nombre: string) {
        this.nombre= nombre;
    }
    
    abstract calcularArea():number;
   abstract calcularPerimetro(): number;

}
