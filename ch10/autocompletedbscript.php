<?php
$name = $_POST['userid'];
$connect = mysqli_connect("localhost", "root", "gold123", "jquerydb");
if(!$connect){
	die('Please, check your server connection.');    
}
$query = "SELECT user_name FROM users WHERE user_name LIKE '$name%'";
$results = mysqli_query($connect, $query);
if($results)
{
	while ($row = mysqli_fetch_array($results,MYSQLI_ASSOC)) {
		extract($row);
		echo '<li>' . $user_name. '</li>';
	}
}
?>
