/// kie u string 
let ten:string  =("Thuan ");
let ten01=`Huynh ${ten}`;

console.log("Kieu Tring ",ten01);


//boolean
let sta:boolean=true;
let pro11:boolean =Boolean("Huynh Thuan")
console.log("Kieu boolean ",pro11);


//object 

let inforr:{
    name:string,
    age:number,
    location:string
}={
    name:"Thuan",
    age:21,
    location:'KyThuat',
}

console.log("Kieu object ",inforr);

//arrayType

let arryy:(string | number)[]=["Thuan"]
arryy.push(25);

console.log("Kieu object ",arryy);