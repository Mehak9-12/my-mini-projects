let balance=10000;
const validatePin=()=>{
    let inputPin=prompt("Enter your pin");
if(inputPin==1234){
    // console.log("Welcome to the ATM!\n\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");
    atmInterface();
}
else{
    return "invalid pin";
}
}
const checkBalance=()=> console.log("your current balance is",balance);
   

const deposit=()=>{
  let amount=Number(prompt("Enter the amount to deposit"));
  amount=amount+balance;
  console.log("your new balance is",amount);
}
const withdraw=()=>{
    withdrawamt=Number(prompt("Enter the amount to withdraw"));
    if(withdrawamt >=balance){
        console.log("insufficient amount");
    }
    else{
        balance=balance-withdrawamt;
        console.log("your new balance is",balance);
    }
}
function atmInterface(){
     let exit;
    while (!exit) {
         console.log("\nWelcome to the ATM!\n");
        console.log("1. Check Balance");
         console.log("2. Deposit");
         console.log("3. Withdraw");
        console.log("4. Exit");
    let option=Number(prompt("Enter your option "));
    // if(option==1){
    //     checkBalance();
    // }else if(option==2){
    //     deposit();
    // }else if(option==3){
    //     withdraw();
    // }else if(option==4){
    //     console.log("thankyou for using the ATM");
    //     exit=true
    // }else{
    //      console.log("Invalid option. Please try again.");
    // }
    switch(option){
            case 1:
                checkBalance();
                break;
            case 2:
                deposit();
                break;
            case 3:
                withdraw();
                break;
            case 4:
                console.log("Thank you for using the ATM.");
                exit = true;
                break;
            default:
                console.log("Invalid option. Please try again.");
        }
}
}
console.log(validatePin());

