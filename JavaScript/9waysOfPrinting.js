//1
function print_str(str){
    console.log(str);
}

print_str("I love Javascript!!!"); 


//2
class Print{
    constructor(str){
        this.str = str;
    }
}

let print = new Print('I love Javascript!!!');
console.log(print.str);


//3
function print_str(str){
    this.str = str;
}

print_str.prototype.print = function(){
        console.log(this.str);
};

let print = new print_str('I love JavaScript!!!');
print.print();


//4
function Print_str(str){
    this.str = str;
}

Print_str.prototype.print = function(new_str){
        this.str = new_str;
        console.log(new_str);
};

let print = new Print_str('I love JavaScript!!!');
console.log(print.str);


//5
let print = (str) => console.log(str);
print('I love JavaScript!!!');


//6
let a = ['I hate JavaScript!!!'];
let b = a;
a.push('I love JavaScript!!!');
console.log(b[1]);


//7
let print = (function(){
    let a = 'I love JavaScript!!!';
    function b(){
        return a;
    }
    return{b:b};
})();
console.log(print.b());


//8
function print(){
    let str = 'I love JavaScript!!!';
    function prints(){
        console.log(str);
    }
    return prints;
}
let result = print();
console.log(result());


//9
function print(str){
    function prints(str){
        console.log(str);
    }
    prints(str);
}
print('I love JavaScript!!!');

