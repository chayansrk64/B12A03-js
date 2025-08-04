/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
let concateValue = ''
for(const values in student){
    if(student[values] === student.name){
        concateValue += student[values];
    }else if(student[values] === student.roll){
        concateValue += student[values] + ".";
    }else{
        concateValue += student[values] + "@ph.ac.bd"
    }
}
console.log(concateValue)

