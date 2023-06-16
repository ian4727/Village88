<select>
<?php

$languages = array('PHP', 'JS', 'Ruby');
    for($i = 0; $i < count($languages); $i++){
        echo "<option>$languages[$i]</option>";
    }

?>
</select>
<select>;
<?php

//$languages = array('PHP', 'JS', 'Ruby');
    foreach($languages as $language){
        echo "<option>{$language}</option>";
    }

?>
</select>
<select>
<?php

array_push($languages, "HTML", "CSS");
    foreach($languages as $language){
        echo "<option>{$language}</option>";
    }

?>
</select>


