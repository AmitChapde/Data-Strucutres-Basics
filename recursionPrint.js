function recursionPrint(i,n){
    if(i>n){
        return ;
    }

    console.log("Recursive Function")

    recursionPrint(i+1,n);
}


recursionPrint(0,2);