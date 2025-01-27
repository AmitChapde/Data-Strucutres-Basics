function reverseString(str){
    let n=str.length-1;
    let reversed='';
    for(let i=n;i>=0;i--){
        reversed+=str[i];
    }
    return reversed;
}

console.log(reverseString('lana'))