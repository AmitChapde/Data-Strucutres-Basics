function strPalRec(s,i=0){
    let str=s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    let n=str.length;
    if(i>=n/2) return true;

    if(str[i]!=str[n-1-i]) return false;

    return strPalRec(str,i+1);
}



let str='madsm';
let str1='madam';
console.log(strPalRec(str));
console.log(strPalRec(str1));