// Asynchronous function
console.log("Hello")
abhi()
console.log("How are you")

async function abhi(){
    setTimeout(() => {console.log("Pasumarthi Abhi Ram")},2000)

}

// synchronous function
console.log("Hello")
abhilash()
console.log("How are you")

function abhilash(){
    for(i=0;i<999999999;i++);
    console.log("P.Abhilash Reddy")    
}