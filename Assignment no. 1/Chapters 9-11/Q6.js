var i=1, temp=0, total=300, grade;
while(i<=3){
    var res=prompt("Enter your marks.");
    var remarks;
    temp=temp+parseFloat(res);
    if(res>50 && res<60){
        grade="D";
    }
    else{
        if(res>=60 && res<70){
            grade="B";
            remarks="You need to improve";
        }
        else{
            if(res>=70 && res<80){
                grade="A";
                remarks="good";
            }
            else{
                if(res>=80 && res <=90){
                    grade="A-one";
                    remarks="Excelent";
                }
                else{
                    if(res>90 && res<100){
                        grade="A1";
                        remarks="Excellent";
                    }
                }
            }
        }
    }
    i++;  
}
perc=(temp/300)*100;
console.log(total);
console.log("Marks obtained: "+temp);
console.log("Percentage: "+perc);
console.log("Grade: "+grade);
console.log("Remarks: "+remarks);
alert("Total: "+total+"\nMarks obtained: "+temp+"\nPercentage: "+perc+"\nGrade: "+grade+"\nRemarks"+remarks);
