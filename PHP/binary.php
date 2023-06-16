<?php



function get_count($arr){
$binary = array( 1, 1, 0, 1, 1, 0, 1);     
$zeroes = 0;
$ones = 0;
    for($i = 0; $i < count($binary); $i++){
        if($binary[$i] == 1){
            $ones++;
        }
        else if($binary[$i] == 0){
            $zeroes++;
        }
        
        
    }
    echo "zeroes => $zeroes, ones => $ones <br>";
    return $binary;
    
}

$output = get_count($binary); 
var_dump($output); 

?>
