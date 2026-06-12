let button =document.getElementById("calculateGrade");
button.addEventListener("click", function(){

let ObtainedAssignment =Number(document.getElementById("ObtainedAssignment").value);
console.log(ObtainedAssignment);
let TotalAssignment =Number (document.getElementById("TotalAssignment").value);
console.log(TotalAssignment);
let ObtainedQuiz =Number(document.getElementById("ObtainedQuiz").value);
console.log(ObtainedQuiz);
let TotalQuiz =Number (document.getElementById("TotalQuiz").value);
console.log(TotalQuiz);
let ObtainedSes1 =Number (document.getElementById("ObtainedSes1").value);
console.log(ObtainedSes1);
let ObtainedSes2 =Number (document.getElementById("ObtainedSes2").value);
console.log(ObtainedSes2);
let TotalSes1 =Number (document.getElementById("TotalSes1").value);
console.log(TotalSes1);
let TotalSes2 =Number(document.getElementById("TotalSes2").value);
console.log(TotalSes2);
let TotalFinal =Number(document.getElementById("TotalFinal").value);
console.log(TotalFinal);
let ObtainedFinal =Number (document.getElementById("ObtainedFinal").value);
console.log(ObtainedFinal);
let TotalOfObtained= ObtainedAssignment+ObtainedFinal+ObtainedQuiz+ObtainedSes1+ObtainedSes2;
console.log(TotalOfObtained);
let TotalOfTotal= TotalAssignment+TotalFinal+TotalQuiz+TotalSes1+TotalSes2;
console.log(TotalOfTotal);
let percentage= (TotalOfObtained/TotalOfTotal)*100;
console.log(percentage);
let grade;
if(percentage>=90){
    grade="A+";
}
if(percentage >=86 && percentage <=89){
    grade="A";
}
if(percentage>=82 && percentage<=85){
    grade="A-"
}
if(percentage>=78 && percentage<=81){
    grade ="B+";
}
if(percentage>=74 && percentage<=77){
    grade ="B";
}
if(percentage>=70 && percentage<=73){
    grade ="B-";
}
if(percentage>=66 && percentage<=69){
    grade ="C+";
}
if(percentage>=62 && percentage<=65){
    grade ="C";
}
if(percentage>=58 && percentage<=61){
    grade ="C-";
}
if(percentage>=54 && percentage<=57){
    grade ="D+";
}
if(percentage>=50 && percentage<=53){
    grade ="D";
}
else if (percentage<50){
    grade ="F";
}
if (TotalOfTotal === 0) {
    alert("Please enter valid marks");
}
console.log(grade);
document.getElementById("result").textContent =
    "Your grade is: " + grade;
    });


