let age=prompt("Enter your age");
console.log(age);
let input1=prompt("Are u a Student");
let isStudent ; 
if(input1=="yes"){
    isStudent=true;
 console.log(isStudent);
}
else{
    isStudent=false;
    console.log(isStudent);
}
let input2=prompt("Are you Going on weekend ?");
let isWeekend;
if(input2=="yes"){
    isWeekend=true;
    console.log(isWeekend);
}else{
     isWeekend=false;
     console.log(isWeekend);
}
let ticketprice;
if(age<=5){
    ticketprice=0;
    console.log("Enjoy your free movie,your price is:",ticketprice);
}else if(age>=60){
    ticketprice=300;
    ticketprice=ticketprice *0.5;
    console.log("you got Discount,your price is:",ticketprice);

}else{
     ticketprice=300;
     console.log("no discount,your price is:",ticketprice);
}

if(isWeekend==true){
    ticketprice=300;
}else{
    ticketprice=200;
}

if (isStudent==true && isWeekend==false){
    ticketprice= ticketprice *0.7;
    console.log("Final Ticket Price is:", ticketprice);

}else if(isStudent==false && isWeekend==false )
{
    console.log("you are not eligible for discount");
}else if(isStudent==true && isWeekend==true){
    console.log("No discount on weekends");
}else if(isStudent==false&& isWeekend==true){
    console.log("You are not student & not eligible");
}else{
    console.log("invalid input");
}

