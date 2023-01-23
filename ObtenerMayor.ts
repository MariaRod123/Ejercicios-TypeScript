function obtenerMayor(...valores: number[]): number {
  return Math.max(...valores);
}
console.log(obtenerMayor(1, 2, 3, 4, 5)); //resultado esperado: 5
console.log(obtenerMayor(...[5, 3, 8, 4, 1])); //resultado esperado:8



