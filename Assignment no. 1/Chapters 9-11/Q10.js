var t=prompt("Enter temperature: ");
if(t>40){
    alert("It is too hot outside.");
}
else{
    if(t>30){
        alert("The Weather today is Normal.");
    }
    else{
        if(t>20){
            alert("Today’s Weather is cool.");
        }
        else{
            if(t>10){
                alert("OMG! Today’s weather is so Cool.");
            }
        }
    }
}