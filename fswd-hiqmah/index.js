let fname="Mehak";
let residence="Eidgah";
const age=24;
console.log(typeof(fname));
console.log(fname + " " + residence + " " + age);// difficult to write if we have larger sentence so use template literals
// template literal syntax write inside back-tic and before variables use dollar and then var name it also allows spaces like
let stext=`My name is ${fname}.
I am from ${residence}.
I am ${age} years old.`; 
 console.log(stext);
let text=`My name is ${fname}, I am from ${residence}. I am ${age} years old.`; 
console.log(text);
alert("Hello Mehak");
let a="10";// assigning values
let b=10;
if(a==b){ // no typechecking
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
if(a===b){ //type check also
    console.log("Equal");
}
else{
    console.log("Not Equal");
}
if(a!=b){
    console.log("hello world");
}
else{
    console.log(" Hello JavaScript");
}
if(a!==b){ //type check 
    console.log("Hii");
}
else{
    console.log("Bye");
}
if(a==10 && b==20){ // And logical 
    console.log("Condition not true");
}
else{
    console.log("Condition  pass");
}
if(a==10 || b==20){ // OR logical
    console.log("Condition  true");
}
else{
    console.log("Condition  False");
}
let g=10;
if(g){ // means truthy as g is declared
    console.log("true");
}
let h =[]; // empty array is always true
// 0 ,false,NaN(not a number),undefined,null," "(empty string)-all are false
// object and function is true
if(h){
    console.log("It is true");
}
else{
    console.log("False");
}
let mehakWeight=48;
let mehakHeight=5;
let tanzWeight=46;
let tanzHeight=4;

let bmi=mehakWeight/2*mehakHeight*0.3;
let tBmi=tanzWeight/2*tanzHeight*0.3;


console.log(bmi);
console.log(tBmi);

if(bmi>30){
    console.log("you are Normal");
}else if(bmi<25)
{
console.log("you need to improve");
}else{
    console.log("Eat Healthy");
}
let num1=10;
let num2="20";
let num3="false";
let num4=prompt("enter a number"); // it will take number as string  by default
console.log(num1+Number(num2));
console.log(String(num1)+num2);
console.log(Boolean(num3)); //true because string is not empty
console.log(Number(num4)+10);
console.log(num4+10);// give concat because we have in string

// +  num to string    */- string to num
let nums=prompt("enter a number"); 
if(nums % 2 == 0){
    console.log("Number is even");
}
else
{
    console.log("Number is odd");
}
// for one condition it is better to use ternary operator -syntax condition ? :
let time =14;
(time>12)?console.log("Noon "):console.log("Morning");

// Switch

let grade="D";
switch(grade){
    case "A":
    console.log("Excellent Performance");
    break;
    case "B":
    console.log("Good Performance");
    break;
    case "C":
    console.log("Average Performance");
    break;
    case "D":
    console.log("Improve your Performance");
    break;
    default:
    console.log("Invalid Grades");
    break;
}
