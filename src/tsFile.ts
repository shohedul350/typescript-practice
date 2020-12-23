let greet: Function = () => {
  console.log('hello, world');
}

// greet = 'hello';  we can't do this

greet = () => {
  console.log('hello, again');
}

const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 10, 'shohedul');

const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(10,7);
console.log(result);