function check(form)
{
 
 if(form.userid.value == "Owen" && form.pswrd.value == "site")
  {
	window.close();
    window.open("home.html");
	
  }
 else
 {
   alert("Wrong username or password.");
  }
}
