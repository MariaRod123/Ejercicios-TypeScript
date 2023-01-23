 abstract class Figura {

    protected nombre: string;
    
    constructor(nombre: string) {
        this.nombre= nombre;
    }
    
    abstract calcularArea():void;
   abstract calcularPerimetro(): void;

}