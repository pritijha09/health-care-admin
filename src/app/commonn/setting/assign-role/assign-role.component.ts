import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
  
}
@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css']
})
export class AssignRoleComponent implements OnInit {
  assignRoleFormGroup: FormGroup;
  task: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Student Management', completed: false, color: 'primary'},
      {name: 'Employee Management', completed: false, color: 'primary'},
      {name: 'Fee Reports', completed: false, color: 'primary'},
      {name: 'Accounting', completed: false, color: 'primary'},
      {name: 'Send SMS', completed: false, color: 'primary'},
      {name: 'Homework', completed: false, color: 'primary'},
      {name: 'Exam Management', completed: false, color: 'primary'},
      {name: 'Certificate', completed: false, color: 'primary'},
      {name: 'Transportation', completed: false, color: 'primary'},
      {name: 'E-Learning', completed: false, color: 'primary'},
      {name: 'Downloads', completed: false, color: 'primary'},
      {name: 'Backup Data', completed: false, color: 'primary'},
      {name: 'Library Management', completed: false, color: 'primary'},
      {name: 'Inventory', completed: false, color: 'primary'},
      {name: 'Hostel', completed: false, color: 'primary'},
      {name: 'Order Stationary', completed: false, color: 'primary'},
      {name: 'Order Dress', completed: false, color: 'primary'},   
    ]
    // subtasks: [
    //   {name: 'Science', completed: false, color: 'primary'},
    //   {name: 'Art', completed: false, color: 'primary'},
    //   {name: 'Commerce', completed: false, color: 'primary'},
    //   {name: 'Agriculture', completed: false, color: 'primary'},
        
    // ]
  };
  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
