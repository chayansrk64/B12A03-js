/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var email = ''
for(var values in student){
    if(student[values] === student.name){
        email += student[values];
    }else if(student[values] === student.roll){
        email += student[values] + ".";
    }else{
        email += student[values] + "@ph.ac.bd"
    }
}
console.log(email)

