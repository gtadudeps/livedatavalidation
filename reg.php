<?php
include "global.php"; //global.php connect to the database
if(@$_POST['submit'])
{
 //get form data
 $username = addslashes(strip_tags($_POST['user_name']));
 $password = addslashes(strip_tags($_POST['user_pass']));
 $c_password= addslashes(strip_tags($_POST['c_pass']));
 $email = addslashes(strip_tags($_POST['user_email']));
 
 if(!empty($username)&&!empty($password)&&!empty($c_password)&&!empty($email)){
 if (!$username||!$password||!$email)
    echo "Please fill out all fields";
 else
 {
     if($password!=$c_password){?>
	       
	
		   <?php 	 echo 'password do not match';
		   ?>
		   <a href="reg.php"> TRY AGAIN </a>
	       
           <?php }

	 else{
    //encrypt password
    $password = md5($password);
    
    //check if username already taken
    $check = mysql_query("SELECT * FROM users WHERE user_name='$username'");
    if (mysql_num_rows($check)>=1){
	       ?>
		
		   <?php echo "Username already taken";
		   ?>
		   <a href="reg.php"> TRY AGAIN </a>
	       
           <?php }
       
   
		   else
       {
           //register into database
           $register = mysql_query("INSERT INTO users VALUES ('','$username','$password','$email','$code','0',NOW(),10)");
            ?>
		   
		   <?php echo "You have been registered successfully! Please check your email ($email) to activate your account";
		   ?>
		   <a href="index.php"> CONTINUE </a>
	      
	   <?php
       }
    }
 }
}
}?>


<form id="submitForm" method="POST" action="reg.php">
<table border="0">
<tr><td>
Username :</td><td><input type="text" id="username" name="user_name" /><br>
</td><td><span id="span12"></span></td>
</tr>
<tr><td>
Email:</td><td><input type="text" id="email_id" name="user_email"/><br>
</td><td><span id="span13"></span></td></tr>
<tr><td>
Password :</td><td><input type="password" id="pass" name="user_pass"/><br>
</td></tr>
<tr><td>
Confirm Password :</td><td><input type="password" id="pass" name="c_pass"/><br>
</td></tr>
<tr><td>
<input id="reg" type="submit" name="submit" value="Register!" /></td><td><span id="span14"></span>
</td></tr>
</table>
</form>
<div id="out"></div>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/validate.js"></script>
