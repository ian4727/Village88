//1
function foreach(arr, operator){
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        let a = operator(num);
        arr[i] = a;
    }
    return arr;
}
let result = foreach([1,2,3,4,5], function(num) {return num*2;});
console.log(result);

//2
function filter(arr, operator){
    let newarr = [];
    for(i=0; i<arr.length; i++){
        let val = arr[i];
        if(operator(val)){
            newarr[i] = val;
        }
    }
    return newarr;
}

//3
function reject(arr, operator){
    let newarr = [];
    for(i=0; i<arr.length; i++){
        let val = arr[i];
        if(!operator(val)){
            newarr[i] = val;
        }
    }
    return newarr;
}