// for loop

//1
for(let i=1;i<=10;i++){
    // console.log(`the value of i is ${i}`);    // prints from 1 to 10

    if(i%2==0){
        console.log(`${i} is an even number`);
    }
    else{
        console.log(`${i} is an odd number`)
    }
}


//2 create a for loop for number b/w 1 to 50 and if number is divisible by 3 then
// log foo, if it is divisible by 5 log bar, it it's divisible by 3 and 5 log foo bar other wise you log number

for(let i=1;i<=50;i++){
    if(i%3 == 0 && i%5 == 0){
        console.log('foo bar');
    }
    else if(i%3 == 0){
        console.log('foo');
    }
    else if(i%5 == 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
}


