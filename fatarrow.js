sum = (a,b) => a+b
console.log(sum(10,20))

mul = (a,b) => {
    return a*b
}
console.log(mul(10,20))

const person1 = () => ({
    name:"abhilash",
    age:20
});

console.log(person1().name)

const person2 = (name,age) => ({
    name:name,
    age:age
});

console.log(person2("abhilash",20))