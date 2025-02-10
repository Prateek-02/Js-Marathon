let students = ['Ashish','Rohit','Virat','Aman','Abhishek',"Tilak"];

/*
for(let i=0;i<students.length;i++){
    console.log(students[i]);
}*/

for(let i=0;i<students.length;i++){
    if(i%2==0){
        console.log(students[i]);
    }
}



//forEach Loop
/*
students.forEach(element => {
    console.log(element);
});
*/

let text = 'Prateek Raj';
for(let i of text){
    console.log(i);
}