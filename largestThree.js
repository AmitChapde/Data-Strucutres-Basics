function largestThree(arr){
    let n=arr.length;
    let first =-Infinity;
    let sec=-Infinity;
    let third=-Infinity;
    for(let i=0;i<n;i++){
        if(arr[i]>first){
            third=sec;
            sec=first;
            first=arr[i];
        }else if(arr[i]>sec && arr[i]!=first){
            third=sec;
            sec=arr[i];
        }else if(arr[i]>third && arr[i]!= sec && arr[i]!=first){
            third=arr[i]
        }
    }
    let res = [];
    if (first !== -Infinity) res.push(first);
    if (sec !== -Infinity) res.push(sec);
    if (third !== -Infinity) res.push(third);

    return res;

}

let arr=[1,2,3,4,11,200,13,55,123];
console.log(largestThree(arr));