function calculateSalary(hoursWorked) {
	return	1000 * hoursWorked;
}
var ideal_salary_per_hour = calculateSalary(1); // (1 hour)
var ideal_salary_for_two_hour = calculateSalary(2); // (2 hour)
console.log(ideal_salary_per_hour, ideal_salary_for_two_hour);

var ideal_salary_daily = calculateSalary(4);
console.log(ideal_salary_daily);

function extraSalary(extraHours) {
	return 200 * extraHours;
}
var ideal_salary_extra_per_hour = extraSalary(1); //cost per extra hour of work (1 hour)
var ideal_salary_extra_two_hours = extraSalary(2);
console.log(ideal_salary_extra_per_hour, ideal_salary_extra_two_hours);

function employeeSalary(hoursWorked, extraHours) {
	return  ideal_salary_per_hour * hoursWorked +  ideal_salary_extra_per_hour * extraHours;
}
var total_employee_salary1 = employeeSalary(1, 1); // 1 hour for both ideal salary and overtime earning
console.log(total_employee_salary1); 
var total_employee_salary2 = employeeSalary(2, 2);
console.log(total_employee_salary2); 