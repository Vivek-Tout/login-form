 function registration()
	{

		var name= document.getElementById("firstname").value;
		var sname= document.getElementById("surname").value;
		var email= document.getElementById("email").value;
		var pwd= document.getElementById("pwd").value;			
		var cpwd= document.getElementById("cpwd").value;
		var g= document.getElementById("gen").value;

        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		
		if (name!=='' && sname!=='' && email!=='' && pwd!=" " && cpwd!=" " ) 
		{
					if (!pwd_expression.test(pwd))
					{
						alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
					}
						else if(pwd != cpwd)
					{
						alert ('Password not Matched');
					}
		
					else {alert("Name" +document.getElementById("firstname").value+" Surname "+document.getElementById("surname").value+" Email " +document.getElementById("email").value+ "gender");
		}
	}
	else break();
}
