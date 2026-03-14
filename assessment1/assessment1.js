let arr = [];

function ADD() {
    let name = document.getElementById("name").value;
    let roll = parseInt(document.getElementById("id").value);
    let english = parseInt(document.getElementById("english").value);
    let maths = parseInt(document.getElementById("maths").value);
    let science = parseInt(document.getElementById("science").value);

    if (name === "" || isNaN(roll) || isNaN(english) || isNaN(maths) || isNaN(science)) {
        alert("Please fill all fields correctly");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        english: english,
        maths: maths,
        science: science
    };

    arr.push(student);
    alert("Student record added!");

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("english").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("science").value = "";
}

function DISPLAY() {
    let output = "<h3>All Students</h3>";

    for (let i = 0; i < arr.length; i++) {
        output += `
        <p>
        Name: ${arr[i].name} |
        Roll: ${arr[i].roll} |
        English: ${arr[i].english} |
        Maths: ${arr[i].maths} |
        Science: ${arr[i].science}
        </p>`;
    }

    document.getElementById("output").innerHTML = output;
}

function GREATER() {
    let output = "<h3>Students with Average ≥ 80</h3>";

    arr.forEach(student => {
        let avg = (student.english + student.maths + student.science) / 3;

        if (avg >= 80) {
            output += `Name: ${student.name} | Average: ${avg}<br>`;
        }
    });

    document.getElementById("output").innerHTML = output;
}

function TOTAL() {
    document.getElementById("output").innerHTML =
        "<h3>Total Students: " + arr.length + "</h3>";
}

function average() {
    let sum = 0;

    arr.forEach(student => {
        let avg = (student.english + student.maths + student.science) / 3;
        sum += avg;
    });

    let overallAvg = sum / arr.length;

    document.getElementById("output").innerHTML =
        "<h3>Average Marks of Students: " + overallAvg.toFixed(2) + "</h3>";
}

function total() {
    let output = "<h3>Total Marks of Each Student</h3>";

    arr.forEach(student => {
        let totalMarks = student.english + student.maths + student.science;

        output += `Name: ${student.name} | Total Marks: ${totalMarks}<br>`;
    });

    document.getElementById("output").innerHTML = output;
}

function countFail() {
    let count = 0;

    arr.forEach(student => {
        if (student.english < 33 || student.maths < 33 || student.science < 33) {
            count++;
        }
    });

    document.getElementById("output").innerHTML =
        "<h3>Failed Students: " + count + "</h3>";
}