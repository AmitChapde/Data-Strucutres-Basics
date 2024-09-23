function quickSort(n,arr){
    if(arr.length<=1){
        return arr;
    }
    let pivot=arr[0];
    let lessThanPivot=[];
    let greaterThanPivot=[];
    //loop shouln't start from pivot element 
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            lessThanPivot.push(arr[i]);
        }else{
            greaterThanPivot.push(arr[i]);
        }
    }


    return [...quickSort(lessThanPivot.length,lessThanPivot),pivot,...quickSort(greaterThanPivot.length,greaterThanPivot)]
}




let arr=[5,1,6,7,9,22]
console.log(quickSort(6,arr));