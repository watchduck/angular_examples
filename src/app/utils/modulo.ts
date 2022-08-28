export function modulo(a: number, n: number) {
  // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
  return ((a % n) + n) % n;
}
