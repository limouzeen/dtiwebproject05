

//Expression function
let a = function func1(){
    console.log(111);
}

a();

let b = function func1(){
    console.log(222);
}

b();

let c = function(x, y){
    console.log(x + y);
}

c(10, 20);
//Arrow function

let d = () =>{
    console.log(222);
}

let e = (x, y) =>{
    console.log(x + y);
}

let f = ()=> console.log(222);
let g = ()=> console.log(x + y);
let h = ()=> 'Hello....'

let i = ()=>{
    return 'Hello....'
}

console.log(h());
console.log(i());