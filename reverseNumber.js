function reverseNumber(x) {
    //handle negative cases
    let isNegative=x<0;
    x=Math.abs(x);

    let reversed=0;
    while(x>0){
        let lastDigit=x%10;
        reversed=reversed*10+lastDigit;
        x=Math.floor(x/10);
    }

    if(isNegative){
        reversed=-reversed;
    }

    if(reversed>2**31-1 || reversed<-(2**31)){
        return 0;
    }

    return reversed;
}


console.log(reverseNumber(1234));