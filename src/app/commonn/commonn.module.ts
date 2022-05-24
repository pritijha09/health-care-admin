import { LoginComponent } from './../layout/login/login.component';
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

import { CreateHubComponent } from './hub-management/create-hub/create-hub.component';
import { ViewHubComponent } from './hub-management/view-hub/view-hub.component';
import { GrdFilterPipe } from './_pipe/grd-filter.pipe';
import { PatientListComponent } from './patient-management/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-management/patient-details/patient-details.component';
import { MatTabsModule } from '@angular/material/tabs';





@NgModule({
  declarations: [
    CommonnComponent,
    HomeComponent,
    CreateHubComponent,
    ViewHubComponent,
    GrdFilterPipe,
    PatientDetailsComponent,
    PatientListComponent
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
    MatTabsModule,
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
