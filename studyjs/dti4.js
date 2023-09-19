//Object
let data1 = 20;
const data2 = 30;
let data3 = [10, 20, 30, 40];
let data4 = {
    'a' : 20,
    'b' : 'Hi',
    'c' : 55.555,                                      
    'd' : [1, 2, 3, 4, 5],
    'e' : {
        'x' : 111,
        'y' : 'Wow'
    }
};

console.log(data4.a);
// sum 10, 40 of data3
console.log(data3[0] + data3[3]);
console.log(data4.a + data4.c);
console.log(data4.d[3]+data4.e.y);


let dataaa = {
    zoo : 'The zoo',
    name : 'Wow Zoo',
    abo : ()=>{
        console.log(222);
    }
}

dataaa.abo();
console.log(dataaa["zoo"]);
console.log(dataaa["zoo","name"]);

 