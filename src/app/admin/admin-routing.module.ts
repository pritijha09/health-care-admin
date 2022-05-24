import { ViewHubComponent } from './../commonn/hub-management/view-hub/view-hub.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from '../_guards';
import { Role } from '../_model';
import { HomeComponent } from '../commonn/home/home.component';
import { CreateHubComponent } from '../commonn/hub-management/create-hub/create-hub.component';
import { PatientListComponent } from '../commonn/patient-management/patient-list/patient-list.component';
import { PatientDetailsComponent } from '../commonn/patient-management/patient-details/patient-details.component';


const routes: Routes = [
  {
    path: '',
    data: { title: 'Home' },
    children: [
      {
        path: '', component: HomeComponent,
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
      
    
    //----------------------------------hub-management-------------------//
    {
      path: 'create-hub',
      component: CreateHubComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Create Hub',
        breadcrumb: 'Create Hub'
      }
    },
    {
      path: 'view-hub',
      component: ViewHubComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'View Hub',
        breadcrumb: 'View Hub'
      }
    },

     //----------------------------------patient-management-------------------//
     {
        path: 'patient-list/:id',
        component: PatientListComponent,
        // canActivate: [AuthGuard],
        data: {
          // roles: [Role.Admin],
          title: 'Patient List',
          breadcrumb: 'Patient List'
        }
      },
      {
        path: 'patient-details/:id',
        component: PatientDetailsComponent,
        // canActivate: [AuthGuard],
        data: {
          // roles: [Role.Admin],
          title: 'Patient Details',
          breadcrumb: 'Patient Details'
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
