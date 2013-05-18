<?php
$email= mysql_real_escape_string($_POST['email']);
if(!empty($email)){
   if(filter_var($email,FILTER_VALIDATE_EMAIL)===false){
      echo '<strong><span style="color:red;">Doesn\'t appears to be a valid email address :(</span></strong>';
      }
	  else
	  {
	    echo '<strong><span style="color:green;">Appears to be a valid email address :)</span></strong>';	  
	  }
}

?>