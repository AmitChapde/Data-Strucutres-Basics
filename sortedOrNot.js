function sortedorNot(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
    if(arr[i]<arr[i-1]){
        return false;
    }else{
        return true;
    }
    }
}

let arr = [20, 23, 23, 45, 78, 88];
let arr1=[1,2,3,4,5];
let arr2=[21,3,434,535,121,3333]
console.log(sortedorNot(arr2));