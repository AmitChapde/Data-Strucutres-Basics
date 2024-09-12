function swap(arr,a,b){
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}


function arrRev(arr,i=0){
    let n=arr.length;
    
    if(i>=n/2){
        return;
    }

    swap(arr,i,n-1-i);

    arrRev(arr,i+1);

}

const arr=[1,2,3,4]
arrRev(arr);

console.log(arr);