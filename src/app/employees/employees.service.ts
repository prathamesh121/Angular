export class EmployeesService {

    employeesList = EMP_DATA
    getEmployees() {
        return this.employeesList
    }

    createEmployees(employee: any) {
        this.employeesList.push(employee)
    }
    displayedColumns: string[] = ['name', 'age', 'salary'];
    dataSource = EMP_DATA;


}

const EMP_DATA = [
    {

    }
]