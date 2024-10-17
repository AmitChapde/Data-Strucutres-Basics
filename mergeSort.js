function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }

    let mid=Math.floor(arr.length/2);

    let left=[]
    for(let i=0;i<mid;i++){
        left.push(arr[i])
    }

    let right=[];
    for(let i=mid;i<arr.length;i++){
        right.push(arr[i]);
    }
    let sortedLeft=mergeSort(left);
    let sortedRight=mergeSort(right);

    return merge(sortedLeft,sortedRight);
}

function merge(left,right){
    let i=0,j=0;
    const result=[];
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
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
