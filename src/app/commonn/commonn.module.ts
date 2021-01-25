import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule, DatePipe, LowerCasePipe, TitleCasePipe} from '@angular/common';
import { CommonnRoutingModule } from './commoonn-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {TimepickerModule} from 'ngx-bootstrap/timepicker';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap/datepicker';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { CommonnComponent } from './commonn.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './student-management/add-student/add-student.component';
import { CreateSectionComponent } from './setting/create-section/create-section.component';
import { CreateStreamComponent } from './student-management/create-stream/create-stream.component';
import { AddRfidComponent } from './student-management/add-rfid/add-rfid.component';
import { StudentListComponent } from './student-management/student-list/student-list.component';
import { PromotedStudentListComponent } from './student-management/promoted-student-list/promoted-student-list.component';
import { StudentAttendanceComponent } from './student-management/student-attendance/student-attendance.component';
import { AssignBusComponent } from './student-management/assign-bus/assign-bus.component';
import { AssignBusRouteComponent } from './student-management/assign-bus-route/assign-bus-route.component';
import { StudentReportComponent } from './student-management/student-report/student-report.component';
import { UpdateMobileNoComponent } from './student-management/update-mobile-no/update-mobile-no.component';
import { CreateFeeScheduleComponent } from './account-management/create-fee-schedule/create-fee-schedule.component';
import { CreateFeeComponent } from './account-management/create-fee/create-fee.component';
import { AddEmployeeComponent } from './employee-management/add-employee/add-employee.component';
import { CreateClassComponent } from './setting/create-class/create-class.component';
import { AssignRoleComponent } from './setting/assign-role/assign-role.component';
import { YearPromotionComponent } from './setting/year-promotion/year-promotion.component';
import { RenewSoftwareComponent } from './setting/renew-software/renew-software.component';





@NgModule({
  declarations: [
    CommonnComponent,
    HomeComponent,
    AddStudentComponent,
    CreateSectionComponent,
    CreateStreamComponent,
    AddRfidComponent,
    StudentListComponent,
    PromotedStudentListComponent,
    StudentAttendanceComponent,
    AssignBusComponent,
    AssignBusRouteComponent,
    StudentReportComponent,
    UpdateMobileNoComponent,
    CreateFeeScheduleComponent,
    CreateFeeComponent,
    AddEmployeeComponent,
    CreateClassComponent,
    AssignRoleComponent,
    YearPromotionComponent,
    RenewSoftwareComponent,
    
    
    
    
  ],
  imports: [
    CommonnRoutingModule,
    CommonModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    DatepickerModule,
    MaterialDesignModule,
    NgxDatatableModule,
    
    
    
    
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    NgxDatatableModule,
    
    
   
    
  ],
  providers: [TitleCasePipe, LowerCasePipe, DatePipe]
})
export class CommonnModule {}
