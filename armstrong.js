function armstrong(n){
    let orignalNumer=n;
    let count=n.toString().length;
    let sum=0;
    while(n>0){
        let digit=n%10;
        sum+=digit**count;
        n=Math.floor(n/10)
    }
    return orignalNumer===sum;
    
}

console.log(armstrong(123));
console.log(armstrong(370));
console.log(armstrong(153));