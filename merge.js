function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }

    //calc mid
    let mid=Math.floor(arr.length/2);

    let left=[];
    for(let i=0;i<mid;i++){
        left.push(arr[i]);
    }

    let right=[]
    for(let j=mid;j<arr.length;j++){
        right.push(arr[j]);
    }

    let leftSorted=mergeSort(left);
    let rightSorted=mergeSort(right);

    return merge(leftSorted,rightSorted);

}

function merge(left,right){
    let result=[];
    let i=0;
    let j=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i])
            i++;
        }else{
            result.push(right[j])
            j++;
        }
    }

    while(i<left.length){
        result.push(left[i]);
        i++;
    }

    while(j<right.length){
        result.push(right[j]);
        j++;
    }

    return result;
    

}


let arr=[5,1,6,7,9,22]
console.log(mergeSort(arr));