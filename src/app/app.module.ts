import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './employees/employee-create.component';
import { EmployeeListComponent } from './employees/employees-list.component';
import { EmployeesService } from './employees/employees.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
