import { Component } from "@angular/core";
import { EmployeesService } from "./employees.service";

@Component({
    selector: 'employees-list',
    template: `

        <table mat - table[dataSource]="employees" >

     <ng-container matColumnDef = "name" >
     <th mat - header - cell *matHeaderCellDef > Name. < /th>
     <td mat - cell *matCellDef="let element" > {{ element.name }} </td>
     </ng-container>


     <ng-container matColumnDef = "age" >
     <th mat - header - cell *matHeaderCellDef > Age < /th>
        <td mat - cell *matCellDef="let element" > {{ element.age }} </td>
     </ng-container>


        <ng-container matColumnDef = "salary" >
        <th mat - header - cell *matHeaderCellDef > Salary </th>
        <tr td mat - cell *matCellDef="let element" > {{ element.salary }} </tr>
        </ng-container>

        <tr mat - header - row *matHeaderRowDef="columnsToDispaly" > </tr>
        <tr tr mat - row *matRowDef="let row; columns: columnsToDispaly;" > </tr>
        </table>
        `

})
export class EmployeeListComponent {
    constructor(private employeesService: EmployeesService) {
    }
    employees: any = []
    columnsToDispaly: any
    ngOnInit() {
        this.employees = this.employeesService.getEmployees()
        this.columnsToDispaly = Object.keys(this.employees[0])
    }
}