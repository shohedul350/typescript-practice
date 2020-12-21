// explicit types
let character: String;
let age: number;
let isAuthenticated: boolean;


//  age= 'shohedul' we can't do this 
age= 21;
//  isAuthenticated= 20;   we can't do this 
isAuthenticated = true;

//arrays 
let skills : string[];

//  skills = [10,20];  we can't do this 
skills = ['node.js','react'];

let colors: string[] = [];
// empty array 
colors.push('blue');
//union 

let mixedArray: (String | Number | Boolean)[] = [];
mixedArray.push('shohedul');
mixedArray.push(20);
mixedArray.push(true);
let uid: number | string;
uid = 123;
uid = '1234'
// objects

let person : object;

person= {name:'shohedul',age:20}


let obj2 : {
  name: string,
  age: number,
  skills: string[]
  
}

obj2 = {name:'shohedul', age:20, skills:['react','node']}