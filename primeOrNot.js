function primeOrNot(n){
    if(n<2){
        return false;
    }

    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false; 
        }
    }

    return true;
}

console.log(primeOrNot(17));
console.log(primeOrNot(11));
console.log(primeOrNot(18));
console.log(primeOrNot(2));