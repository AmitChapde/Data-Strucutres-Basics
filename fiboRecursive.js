function fiboRecursive(n){
    if(n<2){
        return n;
    }
    let i=fiboRecursive(n-1);
    let j=fiboRecursive(n-2);

    return i+j;
}

//print fibonacci series

function printFibo(m){
    for(let i=0;i<=m;i++){
        console.log(fiboRecursive(i));
    }
}

console.log(fiboRecursive(5));
console.log('--------------')
printFibo(11);