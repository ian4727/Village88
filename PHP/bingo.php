<?php

echo "<table border=1>
        <thead>
        <th> B </th>
        <th> I </th>
        <th> N </th>
        <th> G </th>
        <th> O </th>
        </thead>
      <tbody>";
      for($i=2; $i<6; $i++){
        if($i%2 == 0){
            $color = "blue";
        }
        else{
            $color = "red";
        }
        echo "<tr style='color:$color'>";
        for($j=$i; $j<=$i*5; $j+=$i){
            echo "<td>".$j."</td>";
        }
        echo "</tr>";
      }
      echo "</tbody
      </table";
?>
