function firstFunc(secondFunc){

}

function originalFunc(){
    function secondaryFunc(){

    }
    return secondaryFunc();
}

function func1(func2, func3){
    function func2(){

    }

    function func3(){

    }
}
