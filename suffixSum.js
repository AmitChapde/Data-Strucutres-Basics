function calcSuffixSum(arr){
    let n=arr.length;
    let sufArr=[];
    sufArr[n-1]=arr[n-1];

    for(let i=n-2;i>=0;i--){
        sufArr[i]=sufArr[i+1]*arr[i];
    }
    return sufArr;
}


let arr = [1,2,3,4];
console.log(calcSuffixSum(arr));