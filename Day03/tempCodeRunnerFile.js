function createMessages(a="Hello",...names){
    for(const i of names){
        console.log(a,i);
    }
}

let names = ["A","B","C","D","E"];
createMessages(names);
