function stringPal(str){
    let orignalStr=str;
    let k=str.split('').reverse().join("");
    return orignalStr==k;
}


let str='take u forward';
let str1='madam';
console.log(stringPal(str));
console.log(stringPal(str1));