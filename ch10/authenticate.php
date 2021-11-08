<?php
$emailaddr = trim($_GET['email']);
$pswd = trim($_GET['password']);
$connect = mysqli_connect("localhost", "root", "gold123", "jquerydb");
if(!$connect){
    die('Please, check your server connection.');    
}
$query = "SELECT user_name FROM users WHERE email_address LIKE '$emailaddr%' and password like '$pswd%'";
$results = mysqli_query($connect, $query);
if($results)
{
	$count = mysqli_num_rows($results);
	if ($count >0)
	{	
		while ($row = mysqli_fetch_array($results,MYSQLI_ASSOC)) {
			extract($row);
			echo 'Welcome ' . $user_name. ' !';
		}
	}
		else
			echo "Invalid email address or password";
}
else
	echo "Sorry database table not found or access is denied";
?>


