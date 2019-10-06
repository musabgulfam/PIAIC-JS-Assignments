var f=prompt("Enter first operand.");
var s=prompt("Enter second operand.");
var o=prompt("Enter operator.");
f=parseFloat(f);
s=parseFloat(s);
//parseFloat() ???
if(o==='+'){
    alert(f+s);
}
else{
    if(o==='-'){
        alert(f-s);
    }
    else{
        if(o==='*'){
            alert(f*s);
        }
        else{
            if(o==='/'){
                alert(f/s);
            }
            else{
                if(o==='%'){
                    alert(f%s);
                }
            }
        }
    }
}