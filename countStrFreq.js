function strFreq(str){
    let map=new Map();
    for(let ele of str){
        let freq=map.get(ele) || 0;
        map.set(ele,freq+1)
    }
    console.log(map)
}


let str="abcdabehfffffac"
strFreq(str);