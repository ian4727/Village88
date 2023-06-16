<?php

$binary = array( 1, 1, 0, 1, 1, 0, 1); 
$zeroes = 0;
$ones = 0;
function get_count($arr){
    for($i = 0; $1 < count($binary); $i++){
        if($binary[$i] == 1){
            $ones++;
        }
        else($binary[$i] == 0){
            $zeroes++;
        }

    }
}

$output = get_count($binary); 
var_dump($output); 


?>
