let age: any = 20;

age = true;

console.log(age);

age = 'hello';
console.log(age);

age = { name: 'luigi' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('shohedul');
mixed.push(false);
console.log(mixed);

let person: { name: any, age: any };

person = { name: 'shohedul', age: 25 };
console.log(person);

person = { name: 25, age: 'shohedul' };
console.log(person);