
<?php

$users = array( 
    array("id" => "", "cardholder_name" => "Michael Choi", "name_upper" => "", "acc_num" => "1234 5678 9876 5432", "cvc" => 123, "acc_full" => "", "acc_length" => "", "valid" => ""),
    array("id" => "", "cardholder_name" => "John Supsupin", "name_upper" => "", "acc_num" => "0001 1200 1500 1510", "cvc" => 789, "acc_full" => "", "acc_length" => "", "valid" => ""),
    array("id" => "", "cardholder_name" => "KB Tonel", "name_upper" => "", "acc_num" => "4568 456 123 5214", "cvc" => 567, "acc_full" => "", "acc_length" => "", "valid" => ""),
    array("id" => "", "cardholder_name" => "Mark Guillen", "name_upper" => "", "acc_num" => "123 123 123 123", "cvc" => 345, "acc_full" => "", "acc_length" => "", "valid" => ""),
    array("id" => "", "cardholder_name" => "Gwen Garci", "name_upper" => "", "acc_num" => "1111 1111 1111 1111", "cvc" => 111, "acc_full" => "", "acc_length" => "", "valid" => ""),
    array("id" => "", "cardholder_name" => "Stef Presscot", "name_upper" => "", "acc_num" => "2222 2222 2222 222", "cvc" => 222, "acc_full" => "", "acc_length" => "", "valid" => ""),
    array("id" => "", "cardholder_name" => "Tanya Gracia", "name_upper" => "", "acc_num" => "3333 3333 333 3333", "cvc" => 333, "acc_full" => "", "acc_length" => "", "valid" => ""),
    array("id" => "", "cardholder_name" => "Antonette Taus", "name_upper" => "", "acc_num" => "4444 4444 4444 4444", "cvc" => 444, "acc_full" => "", "acc_length" => "", "valid" => ""),
    array("id" => "", "cardholder_name" => "Dingdong Dantes", "name_upper" => "", "acc_num" => "5555 5555 5555 5555", "cvc" => 555, "acc_full" => "", "acc_length" => "", "valid" => ""),

);

?>

<html>
    <head>
        <style>
            .row{
                background-color: lightgray;
            }
        </style>
    </head>
    <body>
        
        <table border=1>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Name in uppercase</th>
                    <th>Account Num</th>
                    <th>CVC Num</th>
                    <th>Full account</th>
                    <th>length of full account</th>
                    <th>is valid</th>
                </thead>
                <tbody>
           
<?php               foreach($users as $key => $value){ 
                        for($i = 1; $i < count($users); $i+=3){
                            if(count($users) == 3){
                                $color = "lightgray";
                            }
                        
                        } ?>
                                              
                        <tr class="<?= $key % 3 === 2 ? 'row' : '' ?>">
                            <td><?= $key+ 1?></td>                               
                            <td><?= $cardholder_name = $value["cardholder_name"] ?></td>
                            <td><?= strtoupper($cardholder_name) ?></td> 
                            <td><?= $value["acc_num"] ?></td> 
                            <td><?= $value["cvc"] ?></td>
                            <td><?= $value["acc_num"]." ".$users = $value["cvc"] ?></td>
                            <td><?= $value["acc_length"] = strlen($value["acc_num"]) ?></td>                            
                            <td><?= $value["acc_length"] === 19? "YES":"NO" ?></td>           
                        </tr>

<?php                } ?>                                

                </tbody>
        </table>
    </body>
</html>



