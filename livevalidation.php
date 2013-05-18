<html>
<head>
<link href="css/stylesheet.css" type="text/css" rel="stylesheet">
</head>
<body>
<br><br><br>
<div id="wrap">
<span style="font-size:2em ;font-family:f1;">Live</span>
<span style="font-size:2em;font-family:f1;">Data</span>
<span style="font-size:2em;font-family:f1;">Validation</span>
</div>
<br><br>
<div id="wrap">
<h4>Say "Hello"</h4>  <input type="text" id="hello" /><span id="span1"></span>
</div>
<br><br>
<div id="wrap">
<h3>Presence</h3>
Check whether the input is empty or not.
<br>
Input here
<input type="text" id="pre" /><span id="span2"></span>
</div><br><br>
<div id="wrap">
<h2>Numericality</h2></div>
<br><br>
<div id="wrap">
To check if input value is a number or not.
<br>
Input a number
<input type="text" id="basic_n"/><span id="span3"></span>
</div><br><br>
<div id="wrap">
To check if input value is a integer or not.
<br>Input a integer
<input type="text" id="basic_i"/><span id="span4"></span>
</div><br><br>
<div id="wrap">
To check if input value is a specific number or not. ( eg 100 )
<br>Type '100'
<input type="text" id="basic_s"/><span id="span5"></span>
</div>


<br><br>
<div id="wrap">
<h2>Inclusion</h2></div>
<br><br>
<div id="wrap">
<h3>Exact match</h3>
<br>
This example will check that the value is the same as any in your allowed values.
<br>
Should be "XBOX-360", "PS3", or "Wii":  
<input type="text" id="exact"/><span id="span6"></span>
</div>
<br><br>
<div id="wrap">
<h3>Partial match</h3>
<br>
This example will check that any part of the value matches something in the allowed list. 
<br>
Should contain "XBOX-360", "PS3", or "Wii" somewhere in your entry:
<input type="text" id="partial"/><span id="span7"></span>
</div>
<br><br>
<div id="wrap">
<h2>Exclusion</h2></div>
<br><br>
<div id="wrap">
<h3>Exact match</h3>
<br>
This example will check that the value is the same as any in your allowed values.
<br>
Should be "XBOX-360", "PS3", or "Wii":  
<input type="text" id="notexact"/><span id="span8"></span>
</div>
<br><br>
<div id="wrap">
<h3>Partial match</h3>
<br>
This example will check that any part of the value matches something in the allowed list. 
<br>
Should contain "XBOX-360", "PS3", or "Wii" somewhere in your entry:
<input type="text" id="notpartial"/><span id="span9"></span>
</div>
<br><br>
<div id="wrap">
<h2>Acceptance</h2></div>
<br><br>
<div id="wrap">
<h3>Check box </h3>
<br>
I accpet this script is AwEsOmE !! <input type="checkbox" id="chkbox"/> <span id="span10"> </span>
</div>
<br><br>
<div id="wrap">
<h2>Conformation</h2></div>
<br><br>
<div id="wrap">
This is used to check that the value of the confirmation field matches that of another field. 
The most common use for this is for passwords, as demonstrated below, but will work just as well on other field types.
</div>
<br><br>
<div id="wrap">
Enter Password &nbsp;&nbsp;<input type="password" id="pass1"/> <span id="span11"> </span><br />
Renter Password <input type="password" id="pass2"/> 
</div><br /><br />
<div id="wrap">
<h2>Validating entire Registration  form</h2></div>
<br><br>
<div id="wrap">
Check for username availability , 
In this the username is fetched using jQuery and sent to a PHP file using Ajax which checks the database for username availability.
</div><br /><br />
<div id="wrap">
Email address ,In this the username is fetched using jQuery and send to a PHP file using Ajax which checks if email address is valid or not.
</div><br /><br />
<div id="wrap">
Composite validations (combining validations)
Most of the time, you will want to combine multiple types of validation on a single field. As your user is given real-time feedback.
can be seen in username feild below.
</div><br /><br />
<div id="wrap">
<?php include"reg.php"; ?>
</div>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/validate.js"></script>

</body>
</html>