let inputname=document.getElementById("name");
let inputemail=document.getElementById("email");
let intpass=document.getElementById("password");
let conpass=document.getElementById("password1");
let error=document.getElementById("errormessage");
function confirming1Form(event)
{
    event.preventDefault();
    if(inputname.value==="")
    {
        error.textContent="Required fields*";
        return;
    }
    if(inputemail.value==="")
    {
        error.textContent="Required fields*";
        return;
    }
    if(intpass.value==="")
    {
       error.textContent="Required fields*"; 
       return;
    }
    if(conpass.value==="")
    {
       error.textContent="Required fields*"; 
       return;
    }
    if(intpass.value!==conpass.value)
    {
        error.textContent="password and confirm passoword should be same";
    }
}