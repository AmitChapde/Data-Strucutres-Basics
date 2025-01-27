function countFrequency(arr){
    let map=new Map();
    for(let ele of arr){
        let freq=map.get(ele) || 0;
        map.set(ele,freq+1);
    }
    for(let [key,value] of map){
        console.log(`${key} ${value}`)
    }
}


let arr=[10,5,10,15,10,5]
countFrequency(arr)