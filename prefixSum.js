function prefixSum(arr){
    let preArr=[];
    preArr[0]=arr[0];

    for(let i=1;i<arr.length;i++){
        preArr[i]=preArr[i-1]+arr[i];
    }

    return preArr;
}


let arr = [10, 20, 30, 40, 50];
console.log(prefixSum(arr));