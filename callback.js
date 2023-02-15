function evensum(arr){
    let eosum=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            eosum +=arr[i]
        }
    }
    return eosum;
}
function oddsum(arr){
    let eosum=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            eosum +=arr[i]
        }
    }
    return eosum;
}
function eosum(arr,callback){
    console.log(callback(arr));
}
eosum([1,2,3,4,5,6,7],evensum);
eosum([1,2,3,4,5,6,7],oddsum);