function deretKaskus(n) {
    let result = [] ;   
       for (let i = 3; i <= 30; i += 3) {
       if (i % 5 == 0 && i % 6 == 0) {
            result.push("kaskus"); 
        }  else if (i % 5 === 0) {
            result.push("kas");
        }  else if (i % 6 === 0) {
            result.push("kus");
        }  else {
            result.push(i);
        }   
       }
    return result;
};               
        
console.log(deretKaskus(10));        
        
