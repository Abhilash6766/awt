const num =100
let p = new Promise((resolve,reject) =>{
    if(num>0){
        resolve(2*num);
    }
    else{
        reject("negative number");
    }
})
p.then((message) =>{
    console.log(message);
})
.catch((error) => {
    console.log(error);
})