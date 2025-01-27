function palindrome(x){
    let orignalNumer=x;
    let reversedNumber=0;
    while(x>0){
        let digit=x%10;
        reversedNumber=reversedNumber*10+digit;
        x=Math.floor(x/10);
    }
    return orignalNumer==reversedNumber;
}


console.log(palindrome(1331));