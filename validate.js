/*
Front end Live validation script using JavaScript , jQuery and php.
Features
1.check for availability of user name.
2.check for correct email address.
3.Check for minimum characters required in a field.
4.Twitter like characters left count.
5.check to match exact required string

*/
//check for availablity of user name

$('#username').focus(function(){
  $('#username').keyup(function(){
  var username=$('#username').val();
  var len=username.length;
  if(len<6){
  $('#span12').html('<strong><span style="color:red;">Must greater than 5 charcters</span></strong>');
  }
  else{
  $.ajax({ 
   type:'POST',
   url: 'usr_check.php',
   data:'username='+ username,
   success: function(data){
   $('#span12').html(data);
   
  }  
  });
  }
});
 

});

//check for email address


  $('#email_id').keyup(function(){
  var email=$('#email_id').val();
  $('#span13').text(email);
  $.ajax({ 
   type:'POST',
   url: 'email_check.php',
   data:'email='+ email,
   success: function(data){
   $('#span13').html(data);
  }  
  });
  });
  
//twitter like character left count

$('#textarea').keyup(function(){
 var len=$('#textarea').val().length;
 var maxlength = $('#textarea').attr('maxlength');
 var char_left=maxlength-len;
 $('#span1').html('<strong><span style="color:blue"> Characters left: '+char_left+'</span></strong>');
 
});

//say hello

$('#hello').keyup(function(){
var str="hello";
var str1=$("#hello").val().toLowerCase();
if(str==str1)
{
 $("#span1").html('<span style="color:green">  Hello there! </span>');
}
else{
 $("#span1").html('<span style="color:red">  We have just met ,let say hello first! </span>');
} });


//Presence

 $('#pre').keyup(function() {  //Check on keyup

  var len=$('#pre').val().length; //Get the length of the input
  if(len!=0){
    $('#span2').text(''); //Do nothing if it is not empty
  }
  if(len==0){ //If empty then output can't be empty
    $('#span2').html('<span style="color:red">  can\'t be empty</span>');
  }
  }).blur(function() { //Again check on leaving that Input is null or not
  var len=$('#pre').val().length;
  if(len==0){
    $('#span2').html('<span style="color:red">  can\'t be empty </span>');
  }
  });
  
  //Numericality
  
  //Basic
  $('#basic_n').keyup(function() {  //Check on keyup
    var input=$('#basic_n').val(); //Get the Inputted value 
	var len=$('#basic_n').val().length; //Get the length of Input
	if(isNaN(input)==false){ //Use NaN(x) to check if entered value is number or not 
	  $('#span3').html('<span style="color:green">  Thankyou! </span>');	
	}
	else{
	 $('#span3').html('<span style="color:red">  Not a number ! </span>');	 	
	}
    if(len==0){ // Remove any message if field is empty
	$('#span3').html('');	 
	}
  });
  
    //check for integer
	
	$('#basic_i').keyup(function() { //Check on keyup
    var input=$('#basic_i').val(); //Get the Inputted value 
	var len=$('#basic_i').val().length; //Get the length of Input
	if((input%1)===0){ /*Every number divided by 1 gives
                        remainder as zero and if entered 
						number is a interger then '===' 
						will return true when checked against
						integer 0 as it '===' compares value 
						and datatype as well */	                   
	  $('#span4').html('<span style="color:green">  Thankyou! </span>');	
	}
	else{
	 $('#span4').html('<span style="color:red">  I think you know what integer is,this ain\'t one!</span>');	 	
	}
    if(len==0){ // Remove any message if field is empty
	$('#span4').html('');	 
	}
  });
 

 //specfic value '100'
  
$('#basic_s').keyup(function() { //Check on keyup
    var input=$('#basic_s').val();  //Get the Inputted value 
	var len=$('#basic_s').val().length; //Get the length of Input
	if(input==100){ //check if inpputed value is 100 or not
	  $('#span5').html('<span style="color:green">  Thankyou! </span>');	
	}
	else{
	 $('#span5').html('<span style="color:red">  Not \'100\'  </span>');	 	
	}
    if(len==0){ //Remove any message if field is empty
	$('#span5').html('');	 
	}
  });

//Exact match

$('#exact').keyup(function() { //Check on keyup
   array=['xbox-360','ps3','wii']; //Define the list you want to check against
   var input=$('#exact').val().toLowerCase(); //conver entered vales into lowercase
   var len=$('#exact').val().length; //Get the length of Input
   if(jQuery.inArray(input,array)==-1) /* use jQuery inArray function to check 
										against the list it return -1 if not present
										and return indexof element if found*/										  
   {
    $('#span6').html('<span style="color:red"> Must be included in the list!  </span>');   
   }
   else
   {
    $('#span6').html('<span style="color:green"> Thank You! </span>');
   }
   if(len==0){  //Remove any message if field is empty
	$('#span6').html('');	 
	}
  });
  //Partial Match
 $('#partial').keyup( function(){
    array=['xbox-360','ps3','wii'];
	var input=$('#partial').val().toLowerCase();
	var len=$('#partial').val().length;
	var inputArray=input.split(" ");
	     for (var i = 0; i < inputArray.length; i++) {
	       if(jQuery.inArray(inputArray[i],array)==-1)
			{
			  $('#span7').html('<span style="color:red"> Must be included in the list!  </span>');   		
			}
          else
			{
			 $('#span7').html('<span style="color:green"> Thank You! </span>');
			 break;
			}		
		}
	if(len==0){  //Remove any message if field is empty
	$('#span7').html('');	 
	}
    
 });
 
 //Not in list Exact
 
 $('#notexact').keyup(function() { //Check on keyup
   array=['xbox-360','ps3','wii']; //Define the list you want to check against
   var input=$('#notexact').val().toLowerCase(); //conver entered vales into lowercase
   var len=$('#notexact').val().length; //Get the length of Input
   if(jQuery.inArray(input,array)==-1) /* use jQuery inArray function to check 
										against the list it return -1 if not present
										and return indexof element if found*/										  
   {
    $('#span8').html('<span style="color:green"> Thank you! </span>');   
   }
   else
   {
    $('#span8').html('<span style="color:red"> Must not be included in the list!  </span>');
   }
   if(len==0){  //Remove any message if field is empty
	$('#span8').html('');	 
	}
  });

//Not in list Paratial

$('#notpartial').keyup( function(){
    array=['xbox-360','ps3','wii'];
	var input=$('#notpartial').val().toLowerCase();
	var len=$('#notpartial').val().length;
	var inputArray=input.split(" ");
	     for (var i = 0; i < inputArray.length; i++) {
	       if(jQuery.inArray(inputArray[i],array)==-1)
			{
			  $('#span9').html('<span style="color:green"> Thank You! </span>');		
			}
          else
			{
			 $('#span9').html('<span style="color:red"> Must not be included in the list!  </span>');   
			 break;
			}		
		}
	if(len==0){  //Remove any message if field is empty
	$('#span9').html('');	 
	}
    
 });
 //Acceptance check box stuff
 $('#chkbox').change( function() {
   
    if($('#chkbox').is(':checked'))
	   $('#span10').html('<span style="color:green"> Thank You!</span>');
	else $('#span10').html('<span style="color:red"> Must be accepted </span>');
 });
 
//Conformation

$('#pass2').keyup( function () { 
   if ( $('#pass1').val()==$('#pass2').val())
       $('#span11').html('<span style="color:green"> Password Match!</span>');
	else
	   $('#span11').html('<span style="color:red"> Password does not Match!</span>');
	  
});
                        





                        