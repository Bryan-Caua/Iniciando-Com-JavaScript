function snapCrackle(MaxValue) {
  let resultado = []
  for (let i = 1; i <= MaxValue; i++) {
    if (i % 2 != 0 && i % 5 == 0) {
        resultado.push('snapCrackle')
    }
    if (i % 2 != 0) {
        resultado.push('snap')
    }
    if (i % 5 == 0) {
        resultado.push('Crackle')
    }
    if (i % 2 == 0 && i % 5 != 0) {
        resultado.push(i)
    }
  }
  return resultado.join(', ');
}

console.log(snapCrackle(150))