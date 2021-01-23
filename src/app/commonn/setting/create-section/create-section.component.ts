import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
// import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
export interface Section {
  name: string;
}
@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {
  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes: number[] =  [ENTER, COMMA];
  sections: Section[] = [
    {name: 'A'},
    {name: 'B'},
    {name: 'C'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    

    // Add our fruit
    if ((value || '').trim()) {
      this.sections.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(section: Section): void {
    const index = this.sections.indexOf(section);

    if (index >= 0) {
      this.sections.splice(index, 1);
    }
  };

  //-----------------------select classes----------------//
  classes: string[] = [
    'Pre Nur', 'Nur','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th',
  ];
 

  constructor() { }

  ngOnInit(): void {
   
  
  
    
  }
}
