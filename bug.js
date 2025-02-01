function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause the next line to throw an error if a or b is null
  }
  return a + b;
}

console.log(foo(null, 5)); //Outputs null
console.log(foo(5, null)); //Outputs null
console.log(foo(5, 5)); //Outputs 10