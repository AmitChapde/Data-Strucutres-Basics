function recursionCount(count=0){
    //base condition
    if(count==3){
        return;
    }
    console.log(count);

    //count incremented
    recursionCount(count+1);


}


recursionCount();