function strFreq(str){
    let map=new Map();
    for(let ele of str){
        let freq=map.get(ele) || 0;
        map.set(ele,freq+1);
    }
    for(let [key,values] of map.entries()){
        console.log(`${key}:${values}`)
    }
}


let str="abcdabehfffffac"
strFreq(str);