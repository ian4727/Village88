



<?php
/*BEFORE
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

*/     

?>
<!--AFTER-->
<html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <title>Bingo Revisited</title>
        
        <style>
            .color1{
                color: blue;
            }

            .color2{
                color: red;
            }
        </style>
    </head>
    
    <body>
        <h1>BINGO</h1>       
        <table border=1>
<?php       $counter = 1;
            for($row=2; $row<=5; $row++){
?>
                <tr>
<?php
                for($col=$row; $col<=$row*5; $col+=$row){
?>                      <td style="color: <?= ($counter%2==0) ? 'red' : 'blue' ?>"><?= $col ?></td> 
<?php               $counter++;
                }
?>                  </tr>
                           
<?php        }   
?>
        </table>
    </body>
</html>







