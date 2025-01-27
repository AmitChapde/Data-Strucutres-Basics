function fibonacci(n){
    let k=[];
    if(n==0 || n==1){
        return n;
    }
    let prev=0,current=1,next;
    k.push(prev);
    k.push(current)
    for(let i=0;i<n;i++){
        next=prev+current;
        prev=current
        current=next
        k.push(next)
    }
    return k;

}   


console.log(fibonacci(10));