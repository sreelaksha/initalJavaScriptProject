//Programming the BOM and DOM
//import {Fruit} from './models/car';
/*
year = 1989;
console.log(innerWidth); //window is a global object
*/



//Timers
//setTimeout - fires function only once
/*let timeoutId= setTimeout( function(){
    console.log('Please wait 1 second');
},1000);*/
//cleatTimeout(timeOutId); //if need to cancel


//setInterval- fires function repeatedly
/*
let intervalId= setInterval (function(){
    console.log('1 Second please');},1000);
*/
//clearInterval(intervalId);


//The location object
//console.log(document.location.href);

//Selecting DOM elements
/*
let element1= document.getElementById('first');
console.log(element1);

let element2= document.getElementsByClassName('p1');
console.log(element2[1]); //can give index to search for a position

let element3= document.getElementsByTagName('p');
console.log(element3);
*/

//Modifying DOM elements
/*let element=document.getElementById('first');
element.textContent = 'This is new content.... ';
element.setAttribute('foo', 'fooValue');
console.log(element);
element.classList.add('p2');
element.style.color = 'blue';*/



//Promises and Error Handling
//Error Handling using try and catch blocks
/*try{
    let car= newCar;
}
catch(error)
{
    console.log('ERROR!!!' , error); //error is a object
}
console.log('continuing.....');*/

//finally

/*
try
{
    let car= null; //may or may not throw an error but finally always executes
}
catch(error)
{
    console.log('ERROR!!!' , error); //error is a object
}
finally
{
    console.log('the finally block always executes.....');
}
*/



//Developer Defined Error
//throw
/*try
{
    //code here ...
    throw new Error('my custom error'); //Error is an object
//Error object is caught in the error parameter in the catch block
}
catch(error)
{
    console.log('ERROR!!!' , error);
}
finally
{
    console.log('the finally block always executes.....');
}*/


//Creating a Promise
//function(resolve,reject)
/*
let promise = new Promise(
    function(resolve,reject){
    setTimeout(reject,100,'someValue');
    //reject can be changed to resolve too
    }
);
console.log(promise);
*/


//Settling a promise
//then(fulfilledFn,rejectedFn)
/*
let promise = new Promise(
    function(resolve,reject){
    setTimeout(resolve, 100 , 'someValue');
    }
);
console.log(promise);
promise.then(  //then function with 2 arguments
    value => console.log('Promise fulfilled' +value),
    error =>console.log('Promise rejected' +error)
);
*/


//10. Data Access Using HTTP
//HTTP Request using XHR
/*
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if(this.readyState == 4 && this.status ==200)
{
    console.log(this.responseText);
}
};
xhttp.open("GET", "" , true);
xhttp.send();
*/


//HTTP Request using jQuery - let promise=$.get(url);
/*import $ from 'jquery';

let promise = $.get("https://google.com");
promise.then(
    data => console.log('success:',data),
    error => console.log('error:',error)
);*/

//HTTP POST using jQuery - let promise=$.post(url,data);
/*import $ from 'jquery';
let user={
    name: 'Laksha',
    avatar: 'lak.jpg'
};
let promise = $.post("https://google.com",user);
//on Post we must mention the data that needs to be posted.Ex,user
promise.then(
    data => console.log('success:',data),
    error => console.log('error:',error)
);*/

//**** Forms *****
//Preventing Form Submission
/*
let form= document.getElementById('user-form');
form.addEventListener('submit',event => {
    event.preventDefault();
    //prevent the browser from submitting the form
});
*/


//Accessing Form Fields
//forms.elements['name'];
/*let form= document.getElementById('user-form');
form.addEventListener('submit',event => {
    let user = form.elements['user'];
    let avatarF = form.elements['avatar-file'];

    console.log(user.value, avatarF.value);
    event.preventDefault();
});*/


//        ****** Showing Validation Errors ********
//element.focus();

/*let form= document.getElementById('user-form');

form.addEventListener('submit',event => {


    let user = form.elements['user'];
    let userError = document.getElementById('user-error');

if(user.value.length < 4)
{
    userError.textContent = 'Invalid entry';
    userError.style.color = 'red';
    user.style.borderColor = 'red';
    user.focus();

    //console.log(user.value, avatarF.value);
    event.preventDefault();
}
});*/


//Posting From JavaScript
/*
import $ from 'jquery';
let form= document.getElementById('user-form');
form.addEventListener('submit',event => {
    let user = form.elements['user'];
    let avatarF = form.elements['avatar-file'];

    let posting = {
        user :  user.value,
        avatarFile : avatarF.value
    };

    let promise = $.post("https://google.com", posting);

    promise.then(
        data => console.log('success', data),
        error => console.log('error', error)
    );

    event.preventDefault();
});
*/




























































