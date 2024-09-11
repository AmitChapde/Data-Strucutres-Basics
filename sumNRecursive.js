function sumNRecusrive(n){
    let sum=0;
    if(n==0) return 0;
    return n+ sumNRecusrive(n-1);
}


console.log(sumNRecusrive(6));