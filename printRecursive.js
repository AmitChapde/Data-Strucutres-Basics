function printRecursive(n){
    if(n<1) return;
    console.log(n);
    printRecursive(n-1);
}


printRecursive(11)