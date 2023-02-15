//destruting array
var name = ["abhilash","rahil","abhi"];
const [n1,n2,n3] = name;
console.log(n1);
console.log(n2);
console.log(n3);
//destructing object
const person = {
    firstname:"abhilash",
    lastname:"reddy",
    age:20,
}

const {firstname:f1,lastname:l1} = person
console.log(f1);
console.log(l1);
//destructing using rest parameter
const {...fulldetails}= person
console.log(fulldetails);