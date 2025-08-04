/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
for(var i = 1; i <= experience; i++){
   var increment = startingSalary * 5 / 100;
   var totalSalary = (startingSalary += increment).toFixed(2);
}
console.log(totalSalary)