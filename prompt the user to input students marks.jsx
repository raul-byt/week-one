//prompt the user to input students marks
let marks = prompt ("please enter the students marks")
//(between 0 and 101);
//convert the input to a number marks
//check if the input is a valid number between 0 to 100
marks=parseInt(marks);

if(marks>=0&&marks<=100){
    if (marks>=80){
        grade='A'
    }
else if(marks>=60&&marks<80){
    grade='B'
}
else if(marks>=50&&marks<60){
    grade='C'
}
else if(marks>=40&&marks<50){
    grade='D'
}
else{
    grade='E'
}
console.log("invalid input.")
}