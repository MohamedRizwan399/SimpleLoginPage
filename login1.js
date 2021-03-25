function validate()
{
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="admin"&& password=="admin")
    {
        alert("Login successfully done");
        return false;
    }
    else{
        alert("Sorry...user permission needed");
    }

}