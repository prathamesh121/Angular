import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeesService } from "./employees.service";
import { Component, OnInit } from "@angular/core";



@Component({
    selector: 'employee-create',
    template: `
  <div >
<form [formGroup]="employeeForm" (ngSubmit)='onSubmit()'>

    <label for="name">Name:</label>
    <input id=name formControlName="name" type="text" >
    <label for="age">Age:</label>
    <input id=age formControlName="age" type="number" >
    <p *ngIf="age?.touched && age?.value<18">Age should be more than equal to 18</p>
    <label for="salary">Salary:</label>
    <input id=salary formControlName="salary" type="number" >
    <button type="submit" [disabled]="employeeForm.status=='INVALID'|| age?.value<=18">Create Emp</button>
</form>

  </div>
  `
})
export class EmployeeCreateComponent implements OnInit {
    employeeForm: FormGroup
    constructor(private employeesService: EmployeesService, private fb: FormBuilder) {
        // employeeForm: FormGroup
        this.employeeForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            age: ['', [Validators.required]],
            salary: ['', [Validators.required]],
        })
    }

    ngOnInit() {

    }

    onSubmit() {
        if (this.employeeForm.dirty && this.employeeForm.valid) {
            this.employeesService.createEmployees(this.employeeForm.value)
            console.log(this.employeesService.getEmployees())
            console.log(this.employeeForm)
        }
    }

    get age() { return this.employeeForm.get('age') }
}