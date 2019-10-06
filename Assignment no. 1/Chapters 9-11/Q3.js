var signal_color=prompt("Signal color?");

if(signal_color==="Red"){
    alert("Must stop");
}
else{
    if(signal_color==="Yellow"){
        alert("Ready to move");
    }
    else{
        if(signal_color==="Green"){
            alert("Move now");
        }
    }
}