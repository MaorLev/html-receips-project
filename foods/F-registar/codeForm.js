
			function check()
			{
				var name = document.getElementById('fname').value;
                var index;
                if(name == "")
				{
					document.getElementById('val').innerHTML = "can't be empty";
					document.getElementById('val').style.color="red";
					return false;
				}
                else if(name.length < 5)
                {
                    document.getElementById('val').innerHTML = "can't be less than 5 character";
                    document.getElementById('val').style.color="red";
                    return false;
                }
                for (index = 0; index < name.length; ++index) {
                    if(name[index] == ' ')
                    {
                        document.getElementById('val').innerHTML = "can't be with space";
                        document.getElementById('val').style.color="red";
                        return false;
                    }                 
                }
                return true;
			}
			
			function remove()
			{
				document.getElementById('val').innerHTML = null;
			}
