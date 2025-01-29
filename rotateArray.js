function rotateArray(arr,d){
    let n=arr.length;
    d=d%n;

    function reverse(arr,start,end){
        while(start<end){
            [arr[start],arr[end]]=[arr[end],arr[start]];
            start++;
            end--;
        }
    }
    arr.reverse();
    reverse(arr,0,d-1);
    reverse(arr,d,n-1)

    return arr;

}


let arr = [1, 2, 3, 4, 5, 6];
let d = 2;

console.log(rotateArray(arr,d));