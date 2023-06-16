
<?php
 
//Part 1:





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