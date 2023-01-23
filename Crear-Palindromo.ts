function crearPalindromo(cadenaTexto: string): string {
    let cadenaTextoInvertida = cadenaTexto.split('').reverse().join('');
    return cadenaTexto.concat(cadenaTextoInvertida);
}
console.log(crearPalindromo("prueba")); 

