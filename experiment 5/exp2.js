let arr=[]; 
function ADD(){ 
 
    let name=document.getElementById("name").value; 
    let age=parseInt(document.getElementById("id").value); 
    let department=document.getElementById("department").value; 
    let salary=parseInt(document.getElementById("salary").value); 
    if(name==="" || isNaN(age) || department==="" || isNaN(salary)){ 
        alert("Please fill all the fields correctly."); 
        return; 
    }    
    let employee = { 
 
        name: name, 
        age: age, 
        department: department, 
        salary: salary 
    }; 
    arr.push(employee); 
    alert("Employee added successfully!"); 
    document.getElementById("name").value=""; 
    document.getElementById("id").value=""; 
    document.getElementById("department").value=""; 
    document.getElementById("salary").value=""; 
} 
function DISPLAY(){ 
    let output="<H3>Employee List</H3>"; 
    for(let i=0;i<arr.length;i++){ 
        output+=`<p>Name: ${arr[i].name}, Age: ${arr[i].age}, Department: 
${arr[i].department}, Salary: ${arr[i].salary}</p>`; 
    } 
    document.getElementById("output").innerHTML=output;  
} 
function sum(){ 
    let sum=0; 
    for(let i=0;i<arr.length;i++){ 
        sum+=arr[i].salary; 
    } 
    document.getElementById("output").innerHTML="<p>Total Salary: " + sum + "</p>";    
} 
function average(){ 
    let sum=0; 
    for(let i=0;i<arr.length;i++){ 
        sum+=arr[i].salary; 
    } 
    let average=sum/arr.length; 
    document.getElementById("output").innerHTML="<p>Average Salary: " + average + 
"</p>";    
} 
function countByDepartment(){ 
        let deptName = prompt("Enter Department Name:"); 
    let count = arr.filter(arr => arr.department === deptName).length; 
    document.getElementById("output").innerHTML = 
        "<h3>Employees in " + deptName + ": " + count + "</h3>"; 
} 
 
function GREATER(){ 
    let filtered = arr.filter(emp => emp.salary > 50000); 
let output = "<h3>Employees with Salary > ₹50,000</h3>"; 
filtered.forEach(emp => { 
output += `Name: ${emp.name} | Salary: ₹${emp.salary} <br>`; 
}); 
document.getElementById("output").innerHTML = output; 
} 
