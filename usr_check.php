<?php
include 'global.php'; //global.php connects to the database
$username=mysql_real_escape_string($_POST['username']); 
$check = mysql_query("SELECT * FROM users WHERE user_name='$username'");
    if (mysql_num_rows($check)>=1){
	   $str='<strong><span style="color:red;">Username already taken!</span></strong>';
	   echo $str;
	  
	   }
	else echo'<strong><span style="color:green;">Username available!</span>';
	
?> 
