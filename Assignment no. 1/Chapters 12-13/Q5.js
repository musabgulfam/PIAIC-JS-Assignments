var c=prompt("Enter password.");
var correct="ABCD";
if(c===''){
    alert("Please enter your password");
}
else{
    if(c===correct){
        alert("Correct");
    }
    else{
        alert("Wrong password");
    }
}