const undreadMessage = 10;
const regUser = 'yes';
const favoriteGenre = 'rock';

let ADMIN = 'admin';
let ANONIMUS = 'anonimus';
let user = 'anonimus';

if (user === 'admin') {
    console.log(ADMIN)
}
else {console.log(ANONIMUS)}

let k='#';
for (let i=0; i<7; i=i+1) {
console.log(k);
k=k+'#'
};

let a = 1;
let b = 2;
function sum() {

 console.log(a + b)

}
sum()

let sum = (a, b) => {
if (a < b) {
    return a}
else return b
}

console.log(sum(12,10)) 

const ragne = (start, min, number) => {
    if (number < min, number > start) {return true}
    else false
}

console.log(ragne(1, 15, 25)) 

//

const getName = (obj, name) => {

}

///




user = new Object();

user = {
    name: 'John',
    surname: 'Smith'
}

/////


let sol = {
    John: 100,
    Ann: 160,
    Pete: 130
};

console.log( sol.John + sol.Ann + sol.Pete );

///





function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; // 650
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650


  ////


///////////////////////////////

function  sum(a,b) {
    c = a + b;
    alert(c);
  }

  sum(11,20)

//////////////////////////////////

  function fert(a, b, c){
    console.log('a='+a + ' b='+b+ ' c='+c )
  }

  fert(2, 5)

///////////////////////////////////

  function log(){
    for (let i=0; i < arguments.length; i=i+1){
    console.log('gthdsq' + arguments[i])}
  }

  log(123, 256, 'fgt')

////////////////////////////////////

function sum(a, b, ...test){
    console.log(a, b, test)
}

sum(1, 456, 'frt', 45)

////////////////////////////////////

function fum(...test){
    let total = 0;
    for(let one of test){
        total = total + one}
    return(total);
    }

console.log(fum(1, 2, 3, 4))

////////////////////////////////////

function text(a, b = 3){
    console.log(a, b)
}

text(3, 1)

////////////////////////////////////

const sayHello = function(name){
    console.log('привет ' + name);
}

const inputName = function(callback){
    let name = prompt('введите имя');
    callback(name);
}

inputName(sayHello)

////////////////////////////////////

let sum = (a, b) => a + b;
console.log(sum(1,2))

////////////////////////////////////
let sum1 = (a, b) => {
    return a + b;
}
console.log(sum1(1, 2))

////////////////////////////////////

let min = (a, b) => {
    if(a < b){
        return a
    }
    else return b
}

console.log(min(122, 34))

////////////////////////////////////

let range = (min, max, number) => {
    if (number >= min && number <= max){
        return true
    }
    else return false
}

console.log(range(20, 35, 25))

////////////////////////////////////

const user = {
    name: 'John',
    surname: 'Smith'
}

user.name = 'Pete';
delete(user.name)

console.log(user)

////////////////////////////////////


let sal = {
    john: 10,
    ann: 16,
    pete: 13
}

const sum = (ob)=>{
    let result = 0;
    for(let key in ob){
        result = result + ob[key];
    }
    return result
}

console.log(sum(sal))

/////////////////////////////////////


const join = (arr, sep) => {
    let res ='';
    for(let i = 0; i < arr.length; i++) {
        let element = arr[i];
        res = res + element + sep;
        }
    return res
}

console.log(join([1, 2, 3],'uuu'))

/////////////////////////////////////

const truncate = (a, b, c) => {
    let result = '';
    result = a.slice(1, 24);



}

/////////////////////////////////////

let 

const find = (arr, callback) => {
    for (let i = 0; i < arr.length; i++){
        callback(arr[i])
    }
    return arr[i];
}

find(users, (item)=>{
    callback(item.arr[i])
})