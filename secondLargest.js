function secondLargest(arr) {
    let largest=-1;
    let secLar=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){ 
            largest=arr[i];
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>secLar && arr[i]!==largest){
            secLar=arr[i]
        }
        
    }
    return secLar;
    
    
}


let arr=[1,2,3,4,11,200,13,55,123]
console.log(secondLargest(arr));