// console.log('hello sir')
// let x = 3;
// let y = x+2;
// y+=1;
// console.log(y)
//
// function add(x, y){
// c=x+y;
// console.log(c)
//
// }
//
//
// add(4,3)
//
//
// let minus = (r, b) => {
//     console.log(r-b)
// }
//
// minus(3,1)




// let a = 0;
// let b = 1;
// for (let i=1; i<10; i++){
//
//
// c = a+b;
//
// a=b;
// b=c;
//
//
//
// console.log(a)
//
// }





// let a =0, b=1, c;
// for (let i=1; i<10; i++){
// console.log(a);
// c = a+b;
// a = b;
// b = c;
//
//
//
// }
//
// let n1 = 0, n2 = 1, nextTerm;
//
// console.log('Fibonacci Series:');
//
// for (let i = 1; i <= 10; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }








function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆

    //Write your code here:



let a = 0;
let b = 1;
let array =[];

for (i=0; i<n; i++){
    array.push(a);
    c=a+b;
    a=b;
    b=c;
    


    }


    console.log(array)
    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below 👇
}
fibonacciGenerator(10)
