import { Component, OnInit } from '@angular/core';
import { CreateHubModel } from 'src/app/_models/common-model';
import { CoreHttpService } from 'src/app/_services/coreHttpServices/core-http.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-create-hub',
  templateUrl: './create-hub.component.html',
  styleUrls: ['./create-hub.component.css']
})
export class CreateHubComponent implements OnInit {
public addHubDetails: CreateHubModel = new CreateHubModel();
public stateList: any[] = [];
public districtList: any[] = [];
public departmentList = [{id: '1', name: 'Radiology Department (X-ray)'},
{id: '2', name: 'Operation Theatre Complex (OT)'},
{id: '3', name: 'Medical Department'},
{id: '4', name: 'Outpatient department (OPD)'}]
  constructor(private coreHttpService: CoreHttpService,  private SpinnerService: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.getStateList();
  }

  /** Method to get state list */
  getStateList() {
    this.coreHttpService.get('get-state-list').subscribe(response=> {
        this.stateList = response.result;
    },error=>{
        console.log(error)
    })
  }

  /** Method to get selected state */
  getSelectedState(){
      this.coreHttpService.post('get-district-list', {id: Number(this.addHubDetails.state_id)}).subscribe(response=> {
        this.districtList = response.result;
        //this.stateList = response.result;
    },error=>{
        console.log(error)
    })
  }

  /** Method to get selected deplartment*/
  getSelectedDepartment(event) {
      this.addHubDetails.department_name = this.departmentList.find(ele=> ele.id === event).name;
  }
  /** Method to create new hub */
  onSubmit(addHubForm: NgForm) {
    this.SpinnerService.show();
    this.coreHttpService.post('admin/add-hub', this.addHubDetails).subscribe(res =>{
        if(res.response === 200){
            this.SpinnerService.hide();
            addHubForm.reset();
            Swal.fire('Thank you...', `${res.message}`, 'success') 
        }
    }, error=> {
        console.log(error)
        this.SpinnerService.hide();
    })
  }

}
