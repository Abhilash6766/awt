class Product {
    constructor(id,price){
        this.id = id
        this.price = price
    }
    details = () =>{
        return "ID : "+this.id+" price: "+this.price;
    }
}

class Sub extends Product {
    constructor(id,price,pname){
        super(id,price)
        this.pname=pname
    }
    details_sub = () => {
        return "Name: "+this.pname;
    }
}

const p1 = new Sub(101,499,"book")
console.log(p1.details())
console.log(p1.details_sub())