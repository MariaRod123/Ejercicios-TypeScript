function esPalindromo(cadenaIzqDer: string): boolean {
  let cadenaDerIzq = cadenaIzqDer.split('').reverse().join('');

  if(cadenaIzqDer === cadenaDerIzq) {
    console.log("Es palíndromo");
    return true;
  } else {
    console.log("No es palíndromo");
    return false;
  }
}
console.log(esPalindromo("efe")); 
console.log(esPalindromo("hoja"))



