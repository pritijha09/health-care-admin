import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from '../_guards';
import { Role } from '../_model';
import { HomeComponent } from '../commonn/home/home.component';
import { AddStudentComponent } from '../commonn/student-management/add-student/add-student.component';
import { CreateSectionComponent } from '../commonn/setting/create-section/create-section.component';
import { CreateStreamComponent } from '../commonn/student-management/create-stream/create-stream.component';
import { AddRfidComponent } from '../commonn/student-management/add-rfid/add-rfid.component';
import { StudentListComponent } from '../commonn/student-management/student-list/student-list.component';
import { PromotedStudentListComponent } from '../commonn/student-management/promoted-student-list/promoted-student-list.component';
import { StudentAttendanceComponent } from '../commonn/student-management/student-attendance/student-attendance.component';
import { AssignBusComponent } from '../commonn/student-management/assign-bus/assign-bus.component';
import { AssignBusRouteComponent } from '../commonn/student-management/assign-bus-route/assign-bus-route.component';
import { StudentReportComponent } from '../commonn/student-management/student-report/student-report.component';
import { UpdateMobileNoComponent } from '../commonn/student-management/update-mobile-no/update-mobile-no.component';
import { CreateFeeScheduleComponent } from '../commonn/account-management/create-fee-schedule/create-fee-schedule.component';
import { CreateFeeComponent } from '../commonn/account-management/create-fee/create-fee.component';
import { AddEmployeeComponent } from '../commonn/employee-management/add-employee/add-employee.component';
import { CreateClassComponent } from '../commonn/setting/create-class/create-class.component';
import { AssignRoleComponent } from '../commonn/setting/assign-role/assign-role.component';


const routes: Routes = [
  {
    path: '',
    data: { title: 'Admin' },
    children: [
      {
        path: '', component: AdminHomeComponent,
        data: {
          title: 'Dashboard',
          breadcrumb: 'Dashboard'
          }
      },
      
      {
        path: 'home',
        component: HomeComponent,
        // canActivate: [AuthGuard],
        data: {
          // roles: [Role.Admin],
          title: 'Dashboard',
          breadcrumb: 'Dashboard'
        }
      },
      
    //----------------------------------student-management-------------------//
    {
      path: 'add-student',
      component: AddStudentComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Add Student',
        breadcrumb: 'Add Student'
      }
    },
    {
      path: 'create-section',
      component: CreateSectionComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Create Section',
        breadcrumb: 'Create Section'
      }
    },
    {
      path: 'create-stream',
      component: CreateStreamComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Create Stream',
        breadcrumb: 'Create Stream'
      }
    },
    {
      path: 'add-rfid',
      component: AddRfidComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Add RfId',
        breadcrumb: 'Add RfId'
      }
    },
    {
      path: 'student-list',
      component: StudentListComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Student List',
        breadcrumb: 'Student List'
      }
    },
    {
      path: 'promoted-student-list',
      component: PromotedStudentListComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Promoted Student List',
        breadcrumb: 'Promoted Student List'
      }
    },
    {
      path: 'student-attendance',
      component: StudentAttendanceComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Attendance',
        breadcrumb: 'Attendance'
      }
    },
    {
      path: 'assign-bus',
      component: AssignBusComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Assign Bus',
        breadcrumb: 'Assign Bus'
      }
    },
    {
      path: 'assign-bus-route',
      component: AssignBusRouteComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Assign Bus Route',
        breadcrumb: 'Assign Bus Route'
      }
    },
    {
      path: 'student-report',
      component: StudentReportComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Student Report',
        breadcrumb: 'Student Report'
      }
    },
    {
      path: 'update-mobile-no',
      component: UpdateMobileNoComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Update Mobile No.',
        breadcrumb: 'Update Mobile No.'
      }
    },
    //----------------------------------account-management-------------------//
    {
      path: 'create-fee-schedule',
      component: CreateFeeScheduleComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Create Fee Schedule',
        breadcrumb: 'Create Fee Schedule'
      }
    },
    {
      path: 'create-fee',
      component: CreateFeeComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Create Fee',
        breadcrumb: 'Create Fee'
      }
    },

    //----------------------------------employee-management-------------------//
    {
      path: 'add-employee',
      component: AddEmployeeComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Add Employee',
        breadcrumb: 'Add Employee'
      }
    },


    //----------------------------------setting-management-------------------//
    {
      path: 'create-class',
      component: CreateClassComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Class Class',
        breadcrumb: 'Create Class'
      }
    },
    {
      path: 'assign-role',
      component: AssignRoleComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Assign Role',
        breadcrumb: 'Assign Role'
      }
    },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }
