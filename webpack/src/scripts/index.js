//let v/s var
/*
if(true)
{
    var carId= 20;
}
console.log(carId);

*/

//Rest parameter - ...carIds
/*function sendCars(day , ...carIds)
{
    carIds.forEach(id => console.log(id));
}
sendCars(' mon', 1,2,3,4);*/


//Destructing Arrays
/*
let carIds =[100,200,300,400];
let car1,car2,rest;
[,...rest]=carIds; //or [car1,car2,...rest]=carIds;
console.log(car1,car2,rest);
*/


//Destructuring object
/*
let car={
    id: 5000,
    style: 'Sedan'
    };
let id,style;
({id,style}= car);
console.log(id,style);
*/



//Spread Syntax - acts opposite to rest parameter
/*
function showCars(car1,car2,car3,...rest)
//rest here and spread below both can be used at the same time
{
    console.log(car1,car2,car3,rest);
}
carId ='laksha'; //or give as [10,20,30,40]
showCars(...carId);
*/

//typeof()
/*typeof(null); -->  object
typeof(undefined);  -->  undefined
typeof(NaN); -->    number
typeof('hi'); --> string
typeof(1); -->  number
typeof({});  -->  object
typeof(function(){}); -->    function
typeof(true); --> boolean*/


//Type conversion
/*
console.log(Number.parseInt('55abc'));
console.log(typeof(Number.parseInt('55abc')));
console.log(Number.parseFloat('55.99abc'));
console.log(Number.parseFloat('abc55.99'));
*/


//Controlling loops

//break; the loop and finish it off
//continue; is to continue the loop act as if body has finished execution





//continue
/*for(let i=10;i<15;i++)
{
    if(i==13)

        continue;
        console.log(i);

}
*/

//break

/*
for(let i=0;i<6;i++)
{
    if(i==5)
            break;
        console.log(i);  //0 1 2 3 4  xxxxx
}

for(let i=0;i<6;i++)
{
    console.log(i); //012345
    if(i==5)
            break;
}
*/


/* Logical operator
let userSettings= { name: 'Joe'};
let defaultSettings = {name: 'Default'};
console.log(userSettings || defaultSettings);
*/


//Function scope
/*function startCar(carId)
{
    let message = 'starting...';
    let startFn = function turnKey()
    {
        let message='override..';
        // override is not shown because it went
        //out of scope in line 129 and so starting... is shown as o/p
    };
    startFn();
    console.log(message);
}
startCar(123);*/


/* // block scope
var message = "outside";
if('a'=='a')
{
    var message = "inside equal"; //block scope
    //does not apply for var and applies only for let
    //so use let keyword
    console.log(message);
}
console.log(message);
*/


//IIFE - immediately invoked function expression
/*
let app = (function(){
    let carId= 23;
    console.log('hi');
    return {}; // an empty object
})
(); //calling the above function it has no arg so
console.log(app);
*/


//Closure
/*let app = (function(){
    let carId= 123;
    let getId=function(){
        return carId;
    };
    return{  //closure return reference to the function
        getId:getId
    };
})
();
console.log(app.getId());*/


// The this keyword
/*let obj={
    carId: 123,
    getId: function(){
        console.log(this);
        return this.carId;
    }
};
console.log(obj.getId());*/


// call and apply function-used to change value of this
/*
let o1={
    carId: 123,
    getId: function(){
        console.log(this);
        return this.carId;
    }
};
let o2newCar= {
    carId: 456
    };
console.log(o1.getId.call(o2newCar));
*/

//apply- to pass argument
/*
let o1={
    carId: 123,
    getId: function(arg){  //arg in function
        console.log(this);
        return arg+this.carId;
    }
};
let o2newCar= {
    carId: 456
    };
console.log(o1.getId.apply(o2newCar,['Id:'])); // here passing arg id
*/



//bind  - copy a functions and assign to new context or change he this value
/*let o1={
    carId: 123,
    getId: function(){
        return this.carId;
    }
};
let o2= { carId: 456 };
    let function2 = o1.getId.bind(o2);
    console.log(function2());
*/

//Arrow functions - has no this value of its own

//1
/*
//function    parameter  parameter+ return value
let getId = prefix => prefix + 123;
            //or if no parameter
            //let getId = () => 123; or let getId = _ => 123;
            // _ signifies a variable
console.log(getId("Id:"));
*/

//2
/*let getId = (prefix,suffix) => prefix + 123 + suffix;
console.log(getId("Id:" , '!'));*/

//3 if {} is used then return keyword should be mentioned
/*
let getId = (prefix,suffix) => {
    return prefix + 123 + suffix;
};
console.log(getId( "Id:" , '!' ));
*/


//Default parameter
/*
let trackCar= function(carId, city = 'IN'){
    console.log(`Tracking ${carId} in ${city}`);
};
console.log(trackCar(909));
console.log(trackCar(100,'DE'));
*/


//Objects and Array

//Constructor with parameter
/*
function Car(id)
{
this.carId=id;
}
let vehicle=new Car(9999);
console.log(vehicle.carId);
*/


//Constructor Functions with parameters and methods
/*function Car(id)
{
    this.carId=id; //parameter
    this.start= function(){  //method used on obj in constructor
        console.log('Start: ' +this.carId);
    };
}
let vehicle= new Car(1234); //constructor
vehicle.start();*/







