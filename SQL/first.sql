USE employees;
SELECT 
    employees.emp_no,
    employees.first_name,
    employees.last_name,
    salaries.salary
FROM
    employees
        JOIN
    salaries ON employees.emp_no = salaries.emp_no;