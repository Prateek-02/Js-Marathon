let isUserAdmin  = true;

if(isUserAdmin){
    console.log('Admin logged in');
}
else{
    console.log('Not Admin');
}

// conditional operators :-  >, <, >=, <=, ==, === , !=, !==

//1
let x = 5;
let y = 4;

if(x == y){   
    console.log('yes');
}
else if(x >= y){
    console.log('x is greater')
}
else{
    console.log('no');
}

//2
let z = 10;
if(z%2==0){
    console.log(`${z} is Even`);
}
else{
    console.log(`${z} is Odd`);
}

// 3
/* if a number is divisible by 3 then you log foo, 
   if it is divisible by 5 log bar , if divisible by both log foo baar 
   else log the number*/

let a = 30;

if(a%3 == 0 && a%5 == 0){
    console.log('foo bar');
}
else if(a%3 == 0){
    console.log('foo');
}
else if(a%5 == 0){
    console.log('bar');
}
else{
    console.log(a);
}


