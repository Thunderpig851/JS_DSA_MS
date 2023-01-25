let addBinary = (a, b) => {
    let str = '';  
    let aSize = a.length - 1;
    let bSize = b.length - 1;
    let carry = 0; 
    
    while(aSize >= 0 || bSize >= 0){
          
     let tempA = a[aSize] || 0; 
     let tempB = b[bSize] || 0;
     
     let sum = Number(tempA) + Number(tempB) + carry;
     
     if(sum > 1){
        sum = sum % 2;
        carry = 1;
     }else{
        carry = 0;
     }

     str = sum + str;
           
     aSize--;
     bSize--;
   }
   if(carry){
      str = carry + str;
   }
   return str;
};

console.log(addBinary('11', '1')) // "010011"