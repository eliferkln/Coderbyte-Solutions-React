SELECT name, MAX(salary) FROM Employees WHERE salary < (SELECT MAX(salary) FROM employees);
