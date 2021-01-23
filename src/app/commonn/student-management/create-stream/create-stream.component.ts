import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-create-stream',
  templateUrl: './create-stream.component.html',
  styleUrls: ['./create-stream.component.css']
})
export class CreateStreamComponent implements OnInit {
  assignsectionFormGroup: FormGroup;
  classes: string[] = [
    'Nursary','Class 1st', 'Class 2nd', 'Class 3rd', 'Class 4th', 'Class 5th', 'Class 6th', 'Class 7th', 'Class 8th',
  ];
 

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValidation();
  }
  formValidation() {
    this.assignsectionFormGroup = this._formBuilder.group({
      class_name:['', Validators.required,],
      section_strength:['', Validators.required],
      
      
    });
  
    
  }
}
