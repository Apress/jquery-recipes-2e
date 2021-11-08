<?php
$product = $_GET['fooditem'];
if($product == "Pizza")
$price="15 $";
if($product == "Burger")
$price="10 $";
if($product == "Hot Dog")
$price="5 $";
echo "You have chosen " . $product . " and its price is " . $price;
?>

