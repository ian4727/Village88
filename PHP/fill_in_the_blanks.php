<?php

//Part 1
function convert_to_blanks(){
$list = array(6, 1, 3, 5, 7);
    for($i = 0; $i < count($list); $i++){
        echo "<br>";
        for($j = 0; $j < $list[$i]; $j++){
            echo "_ ";
        }        
    }
    return $list;  
}

convert_to_blanks($list);

//Part 2
function convert_to_blanks(){
$list = array(4, "Michael", 3, "Karen", 2, "Rogie");   
        for($i = 0; $i < count($list); $i++){
            echo "<br>";
            if(is_string($list[$i]) == true){
                echo substr($list[$i], 0, 1);
                $len = strlen($list[$i]);
                for($j = 1; $j < $len; $j++){
                    echo "_ ";
                }        
            }else{
                for($j = 0; $j < $list[$i]; $j++){
                    echo "_ ";
                }        
            }     
        }
        return $list;  
}
    
convert_to_blanks($list);

?>
