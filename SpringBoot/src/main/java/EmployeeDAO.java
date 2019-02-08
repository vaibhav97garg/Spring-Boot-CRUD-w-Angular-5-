package spring.boot.rest.CRUD.DAO;

import java.util.List;

import spring.boot.rest.CRUD.entity.Employee;

public interface EmployeeDAO {
	
	public List<Employee> findAll();
	
	public Employee findById(int theId);
	public void save (Employee theEmployee);
	public void deleteById(int theId);
}
