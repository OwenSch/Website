function check(form)
{
 
 if(form.userid.value == "Owen" && form.pswrd.value == "site")
  {
    window.open("home.html","_self");
	
  }
 else
 {
   alert("Wrong username or password.");
  }
}
