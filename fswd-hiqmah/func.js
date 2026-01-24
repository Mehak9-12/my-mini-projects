// function movie(age,isStudent,isWeekend){
//     console.log(age);
//     console.log(isStudent);
//   return `my age is ${age}, i am a student of ${isStudent},and i am enjoying ${isWeekend}`;

    
// }
// movie(45,"MCA","weekend");
// console.log(movie(45,"MCA","weekend"));

function getFinalPrice(cartAmount, hasCoupon, isFirstPurchase){
    if(cartAmount<0 || isNaN(cartAmount)){
        return "invalid cart amount";

    }
    let discount;
     if (cartAmount>=0 && cartAmount<=499)
    {
        console.log("No discount",cartAmount);
    }
    else if(cartAmount>=500 &&cartAmount<=999){
        discount=cartAmount*0.10;
        cartAmount=cartAmount-discount;
        console.log("you got 10% off",cartAmount);
    }else if(cartAmount>=1000 &&cartAmount<=1999){
        discount=cartAmount*0.15;
        cartAmount=cartAmount-discount;
        console.log("you got 15% off",cartAmount);     
}else {
   discount=cartAmount*0.25;
   cartAmount=cartAmount-discount;
   console.log("you got 25% off",cartAmount);     

}

if(hasCoupon){
    cartAmount=cartAmount-100;
    console.log("you got Rs 100 off",cartAmount);
}
else{
    console.log("No coupon available");
}

if(isFirstPurchase){
    discount=cartAmount*0.05;
    cartAmount=cartAmount-discount;
}
else{
    console.log("Purchase more");
}
return cartAmount;//540
}
console.log(getFinalPrice(-100,false,false));
let final=getFinalPrice(600,false,false);
let finalAmt =final*0.18;
let gst=finalAmt+final;
console.log(gst.toFixed(2));

