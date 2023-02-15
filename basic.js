//declaration of var and let
var a = 10

if(true){
    let a=20
    console.log("inside"+a)//20
}
console.log("outside"+a)//10
//declarartion of var and var
var b = 10

if(true){
    var b=20
    console.log("inside"+b)//20
}
console.log("outside"+b)//20
//declaration of let and let
let c = 10

if(true){
    let c=20
    console.log("inside"+c)//20
}
console.log("outside"+c)//10
// //declaration of let and var error occurs
// let d = 10;

// if(true){
//     var d=20;
//     console.log(d);
// }
// console.log(d);
// //error

//declaration of const and let 
const e=10
if(true){
    let e=20
    console.log("inside"+e)//20
}
console.log("outside"+e)//10

// //declaration of const and let error occurs
// const f=10
// if(true){
//     var f=20
//     console.log(e)
// }
// console.log(e)
// //error