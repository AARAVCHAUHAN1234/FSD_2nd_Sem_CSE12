function cal(){
    let n=document.getElementById("subjects").value;
    let total=0;
    for(let i=1;i<=n;i++){
        let marks=parseFloat(prompt("enter the marks"+i));
        total+=marks;
    }
    let grade;
    if(total/n>=90){
        grade="A";
    }
    else if(total/n>=80){
        grade="B";
    }
    else if(total/n>=70){
        grade="C";
    }
    else if(total/n>=60){
        grade="D";
    }   
    else{
        grade="F";
    }
    let pass;
    if(total/n>=40){
        pass="PASS";
    }
    else{
        pass="FAIL";
    }
    document.getElementById("results").innerHTML="TOTAL MARKS:" + total + "<br>GRADE: " + grade+ "<br>AVERAGE: " + total/n + "<br>STATUS: " + pass;
}