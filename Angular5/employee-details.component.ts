import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { EmployeesListComponent } from '../employees-list/employees-list.component';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: Employee;
  
  constructor(private employeeService: EmployeeService,
    private listComponent: EmployeesListComponent) { }

  ngOnInit() {
  }
  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee.id)
        .subscribe(
          data => {
            console.log(data);
            this.listComponent.reloadData();
          },
          error=>console.log(error)
        );
  }

}
