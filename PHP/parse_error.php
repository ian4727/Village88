<?php
    $array = array("echo", "var_dump");
    "<h3>Different ways of debugging:</h3>"
?>
<ul>
<?php   
    
    for($i = 0; $i < count($array); $i++){
      echo "<li>$array[$i]</li>";
    }
    
    
?>
</ul>
<?php   
    var_dump($array);
   
    
    
    echo "<h3>Checking if variable is set:</h3>";
    $var1 = "var";
    $var2 = "";
    $var3 = "";
    $var4 = null;
    
    if(isset($var1, $var2, $var3)){
        echo "The value of var1, var2, var3 are set.";
    }
    if(empty($var4)){
        echo "<br> The value of var4 is null, therefore, not set.";
    }
    if(empty($var5)){
        echo "<br> Non-declared var5 is not set.";
    }
?>











