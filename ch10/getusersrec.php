<?php
	$connect = mysqli_connect("localhost", "root", "gold123", "jquerydb");
	if(!$connect){
		die('Please, check your server connection.');    
	}
	$query = "SELECT user_name, password, email_address from users";
	$results = mysqli_query($connect, $query);
	if($results)
	{
		echo '<table border="1">';
		echo '<thead>';
		echo '<tr><th>User Name</th><th>Password</th><th>Email Address</th></tr>';
		echo '</thead>';
		echo '<tbody>';
		while ($row = mysqli_fetch_array($results,MYSQLI_ASSOC)) {
			extract($row);
			echo '<tr><td>' . $user_name . '</td><td>' . $password . '</td><td>' . $email_address . '</td></tr>';
		}
		echo '</tbody>';
		echo '</table>';
	}
?>
