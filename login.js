let input=document.getElementById("exampleInputEmail1");
let input1=document.getElementById("exampleInputPassword1");
let input2=document.getElementById("exampleCheck1");
let error=document.getElementById("errorshowemail");
let errorp=document.getElementById("errorshowpass");
let errorc=document.getElementById("checkbox");
function confirmationForm(event)
{
    event.preventDefault();
    if(input.value==="")
    {
        error.textContent="Required*";
    }
    else{
        error.textContent="We'll never share your email with anyone else 😊😊😊";
        error.style.color="yellow";
    }
        if(input1.value==="")
    {
        errorp.textContent="Required*";
    }
    else{
        errorp.textContent="";
    }
    if(!input2.checked)
    {
        errorc.textContent="must checked😒"
    }
    
}