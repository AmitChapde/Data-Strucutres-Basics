function pattern6(n) {
    for (let i=0 ; i<n ;i++){
        let row="";
        for(let j=1;j<=n-i;j++){
            row+=j+" ";
        }
        console.log(row)
    }
    
}

pattern6(5);