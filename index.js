let arr =[];

function fib(n) {
  
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n-1)+fib(n-2);
  
}
for (let i = 0; i <= 4; i++) {  
    arr.push(fib(i));
}
console.log(arr);




// Print Fibonacci sequence iteratively
console.log(series(5));

function series(n){
    if(n<0){
        return [];
    }
    if(n == 1){
        return[0];
    }
    let result = [0,1];
    for(let i= 2;i<n ;i++){
        result.push(result[i-1]+result[i-2])
      
       
    }
    return result;
}
