function leaders(arr){
    let res=[];
    // for(let i=0;i<arr.length;i++){
    //     let j;
    //     for(j=i+1;j<arr.length;j++){
    //         if(arr[i]<arr[j]){
    //             break;
    //         }
    //     }
    //     //meaning inner loop has traversed till the end of the array and have not found 
    //     //any element greater thean the arr[i]
    //     if(j===arr.length){
    //         res.push(arr[i]);
    //     }
    // }
    // return res;
    let n=arr.length;
    let rightMost=arr[n-1];
    res.push(rightMost);
    for(let i=n-2;i>=0;i--){
        if(arr[i]>=rightMost){
            rightMost=arr[i];
            res.push(rightMost);
        }
    }
    res.reverse();
    return res;
}


let arr=[16, 17, 4, 3, 5, 2];
console.log(leaders(arr));