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
console.log(esPalindromo("efe")); //resultado esperado: "es palindromo" true
console.log(esPalindromo("hoja")) //resultado esperado: "no es palidromo" false



