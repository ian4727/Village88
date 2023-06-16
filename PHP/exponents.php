
<?php
 
//Part 1:
$digits = array(3, 12, 30);

function exponential($arr){
$newarr = array();
  foreach($arr as $num){
    array_push($newarr, $num * $num * $num);
  } 
  return $newarr;
}  

$result = exponential($digits);
var_dump($result); 




 //Part 2:
 $digits = array(8,11, 4);
function exponential($arr, $exp){
$newarr = array();
  foreach($arr as $num){
    $ans = 0;
    for($i = 0; $i < $exp; $i++){
      $ans *= $num;
    }
    array_push($newarr, $ans);
  }
  return $newarr;
}

$result = exponential($digits, 4);  
var_dump($result);
 ?>