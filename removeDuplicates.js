function removeDuplicates(arr){
    let set=new Set(arr);
    return [...set]
}

let arr=[1, 2, 2, 3, 4, 4, 4, 5, 5];
console.log(removeDuplicates(arr));