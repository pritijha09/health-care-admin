import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeinfoFormGroup: FormGroup;
  salaryDetailsFormGroup: FormGroup;
  leaveDetailsFormGroup: FormGroup;
 
  
  

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValidation();
  }

  formValidation() {
    this.employeeinfoFormGroup = this._formBuilder.group({
      employee_name:['', Validators.required,],
      employee_class:['', Validators.required],
      employee_gender:['', Validators.required],
      joining_date:['', Validators.required],
      dob:['', Validators.required,],
      employee_fathername:['', Validators.required,],
      employee_email:['', [Validators.required, Validators.email]],
      employee_mobile:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      employee_code:['', Validators.required,],
      employee_qualification:['', Validators.required,],
      employee_rfId:['', ],
      employee_designation:['', Validators.required,],
      employee_preferedSubject:['', Validators.required,],
      
    });
    this.salaryDetailsFormGroup = this._formBuilder.group({
      employee_pan:['', Validators.required,],
      employee_aadhar:['', Validators.required],
      employeeBank_name:['', Validators.required],
      employeeIfsc_code:['', Validators.required],
      employeeAccount_no:['', Validators.required],
      monthly_salary:['', Validators.required],
      other_wages:['', ],
      pf_no:['', ],
      pf_amount:['', ],
      tds_amount:['',],
      esis_amount:['',],
      tax_amount:['', ],
      hra_amount:['', ],
      da_amount:['', ],
      allowances:['',],
      remark:['', ],
        
    });
    this.leaveDetailsFormGroup = this._formBuilder.group({

      casual_leave:['', ],
      earn_leave:['', ],
      sick_leave:['', ],
      other_leave:['', ],
      
        
    });
    
  }
 //employee information
  get employee_name() {return this.employeeinfoFormGroup.get('employee_name');}
  get employee_mobile() {return this.employeeinfoFormGroup.get('employee_mobile');}
  get employee_gender() {return this.employeeinfoFormGroup.get('employee_gender');}
  get joining_date() {return this.employeeinfoFormGroup.get('joining_date');}
  get dob() {return this.employeeinfoFormGroup.get('dob');}
  get employee_fathername() {return this.employeeinfoFormGroup.get('employee_fathername');}
  get employee_email() {return this.employeeinfoFormGroup.get('employee_email');}
  get employee_code() {return this.employeeinfoFormGroup.get('employee_code');}
  get employee_designation() {return this.employeeinfoFormGroup.get('employee_designation');}
  get employee_qualification() {return this.employeeinfoFormGroup.get('employee_qualification');}
  get employee_preferedSubject() {return this.employeeinfoFormGroup.get('employee_preferedSubject');}

  //salary details
  get employee_pan() {return this.salaryDetailsFormGroup.get('employee_pan');}
  get employee_aadhar() {return this.salaryDetailsFormGroup.get('employee_aadhar');}
  get employeeBank_name() {return this.salaryDetailsFormGroup.get('employeeBank_name');}
  get employeeIfsc_code() {return this.salaryDetailsFormGroup.get('employeeIfsc_code');}
  get employeeAccount_no() {return this.salaryDetailsFormGroup.get('employeeAccount_no');}
  get monthly_salary() {return this.salaryDetailsFormGroup.get('monthly_salary');}
  
  


}
