function reverseArray(n,arr){
    let k=[];
    for(let i=n;i>=1;i--){
        k.push(i);
    }
    return k;
}


console.log(reverseArray(5,[1,2,3,4,5]))