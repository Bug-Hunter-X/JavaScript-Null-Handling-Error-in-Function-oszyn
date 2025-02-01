function foo(a, b) {
  if (a === null && b === null) {
    throw new Error('Both arguments cannot be null');
  } else if (a === null) {
    if (typeof b === 'number') return b;
    else throw new Error('Invalid argument type for b')
  } else if (b === null) {
    if (typeof a === 'number') return a; 
    else throw new Error('Invalid argument type for a')
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

console.log(foo(null, 5)); //Outputs 5
console.log(foo(5, null)); //Outputs 5
console.log(foo(5, 5)); //Outputs 10
console.log(foo(null, null)); //Throws an error
console.log(foo('hello',5)); //Throws an error