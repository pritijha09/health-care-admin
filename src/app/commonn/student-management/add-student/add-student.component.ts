import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentinfoFormGroup: FormGroup;
  parentinfoFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  // isOptional = false;
  isLinear = true;
  
  classes: string[] = [
    'Nursary','Class 1st', 'Class 2nd', 'Class 3rd', 'Class 4th', 'Class 5th', 'Class 6th', 'Class 7th', 'Class 8th',
  ];
  sections: string[] = [
    'Nursary A','Class 1st A', 'Class 2nd A', 'Class 3rd A', 'Class 4th A', 'Class 5th A', 'Class 6th A', 'Class 7th A', 'Class 8th A',
  ];
  shifts: string[] = [
    'Morning Shift','Day Shift',
  ];
  genders: string[] = [
    'Male','Female',
  ];
  religions: string[] = [
    'Hindu','Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist'
  ];
  castes: string[] = [
    'General', 'Obc', 'Sc/St'
  ];
  nationalities: string[] = [
    'Indian', 'NRI', 
  ];
  
  subcategories: string[] = [
    'ITI School', 'Convent School', 'Hindi School', ' Engineeing College', 'Mental Hospital', 
    'Bus Transport', 'Grocery Shop', 'Software', 'JEE Coaching', ' Vehicle Insurance'
  ];
  countries: string[] = ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", 
  ];
  // studentinformationFormGroup: any;
  
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValidation();
  }

  formValidation() {
    this.studentinfoFormGroup = this._formBuilder.group({
      student_name:['', Validators.required,],
      student_class:['', Validators.required],
      student_section:['', Validators.required],
      roll_no:['', Validators.required],
      registration_no:['', Validators.required],
      school_shift:['', Validators.required],
      gender:['', Validators.required],
      admission_date:['', Validators.required],
      dob:['', Validators.required,],
      religion:['', Validators.required,],
      caste:['', Validators.required,],
      nationality:['', Validators.required,],
      student_rfId:['', Validators.required,],
      aadhar_no:['', Validators.required,],
      
    });
    this.parentinfoFormGroup = this._formBuilder.group({
      father_name:['', Validators.required,],
      father_mobile:['', Validators.required],
      father_email:['', ], 
      father_qualification:['',],
      father_occupation:['',Validators.required],
      mother_name:['',Validators.required],
      mother_occupation:['',Validators.required],
      mother_tounge:['',Validators.required],
      
    });
    this.addressFormGroup = this._formBuilder.group({
      country_name: ['',Validators.required ],
      state_name: ['',Validators.required ],
      district_name: ['',Validators.required ],
      pin_no: ['',Validators.required ],
      city_name: ['',Validators.required ],
      address: ['',Validators.required ],
      
      
    });
    this.fourthFormGroup = this._formBuilder.group({
      pan: ['', Validators.required],
      bank_name: ['', Validators.required],
      account_no: ['', Validators.required],
      ifsc_code: ['', Validators.required],

    });





    
  }

}
