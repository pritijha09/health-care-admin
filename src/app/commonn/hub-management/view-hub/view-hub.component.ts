import { Component, OnInit } from '@angular/core';
import { CoreHttpService } from 'src/app/_services/coreHttpServices/core-http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HubListModel } from 'src/app/_models/common-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-hub',
  templateUrl: './view-hub.component.html',
  styleUrls: ['./view-hub.component.css']
})
export class ViewHubComponent implements OnInit {
public hubList: HubListModel[] = [];
public searchText : string;
  constructor(private router: Router, private coreHttpService: CoreHttpService,  private spinnerService: NgxSpinnerService,) { }

  ngOnInit(): void {
      this.spinnerService.show();
      this.coreHttpService.get(`admin/hub-list`).subscribe(res=>{
          this.spinnerService.hide();
          if(res.response===200){
            this.hubList = res.result;
          }
      },error=>{
          console.log(error)
          this.spinnerService.hide();
      })
  }

  /** */
  getPatientList(id) {
    this.router.navigate(["/admin/patient-list/" + id]);
  }

}
