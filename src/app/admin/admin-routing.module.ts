import { ViewHubComponent } from './../commonn/hub-management/view-hub/view-hub.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from '../_guards';
import { Role } from '../_model';
import { HomeComponent } from '../commonn/home/home.component';
import { CreateHubComponent } from '../commonn/hub-management/create-hub/create-hub.component';


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
   

    

    

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }
