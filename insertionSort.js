function insertionSort(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let cvalue=arr[i];
        pos=i;
        while(pos>0 && arr[pos-1]>cvalue){
            arr[pos]=arr[pos-1];
            pos=pos-1;
        }
        arr[pos]=cvalue;
    }
}



arr=[11,2,99];
insertionSort(arr);
console.log('Sorted array:', arr);
