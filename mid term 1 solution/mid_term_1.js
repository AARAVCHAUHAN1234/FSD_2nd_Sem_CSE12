function calculate(){
let n=parseInt(document.getElementById("number").value);
let even;
if(n%2===0){
    even="the given is Even Number";
}
else{
    even="the given is Odd Number";
}
document.getElementById("even").innerHTML=even;
let a="";
for(let i=1;i<n+1;i++){
    a+=i+" ";
}
document.getElementById("loop").innerHTML=a;
}