function reverseArray(arr){
    let start=0;
    let end=arr.length-1;
    while(start<end){
        temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++;
        end--;
    }
    // while (start<end) {
    //     [arr[start],arr[end]]=[arr[end],arr[start]];
    //     start++;
    //     end--;
    // }
    return arr;
}

console.log(reverseArray([5,4,3,2,1]))