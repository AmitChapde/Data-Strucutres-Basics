function bubbleSort(arr){
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
                swapped=true;
            }
        }
    }while(swapped)
}

arr=[3,2,1]
bubbleSort(arr);
console.log(arr);