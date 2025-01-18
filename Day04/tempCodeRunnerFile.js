const rev_str = (str) => {
    let rev = [];
    let len = str.length;
    for (let i = 0; i < str.length; i++) {
      rev[len - 1 - i] = str[i]; 
    }
    return rev.join(''); 
  };
  
  let a = "hello";
  console.log(rev_str(a));