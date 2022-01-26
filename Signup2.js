function validate()
{
	var username=document.getElementById("username").value;
	var email=document.getElementById("email").value;
	var password=document.getElementById("password").value;
	if(username=="admin"&& password=="user"&& email=="kdj@gmail.com")
{
	alert("Signup succesfully");
	return false;

}
else
{

	alert("Signup failed");
}


}