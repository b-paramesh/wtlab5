let cardno=document.getElementById("cardNumber");
let cvv=document.getElementById("cvv");
let date=document.getElementById("expiryDate");
let error=document.getElementById("errorMessage");
function conforming(event)
{
    event.preventDefault();
    if(cardno.value==="")
    {
        error.textContent="required field*";
    }
    if(cvv.value==="")
    {
        error.textContent="required field*";
    }
    if(date.value==="")
    {
        error.textContent="required field*";
    }
}