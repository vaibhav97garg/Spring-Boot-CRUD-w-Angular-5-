package spring.boot.rest.CRUD.Service;

import java.util.List;

import spring.boot.rest.CRUD.entity.Employee;

public interface EmployeeService {
	
	public List<Employee> findAll();
	public Employee findById(int theId);
	public void save(Employee theEmployee);
	public void deleteById(int theId);
}
