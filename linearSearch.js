function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

let arr=[11,2,3,4,777];
console.log(linearSearch(arr,777));
console.log(linearSearch(arr,7777));