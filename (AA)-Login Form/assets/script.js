function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="(AA)-Server"&& password=="aadatabase113")
{
}
    else
    {
        alert("login fail");
        return false;
    }
}