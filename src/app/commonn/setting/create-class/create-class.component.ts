import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
  
}
@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  task: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Pre Nur', completed: false, color: 'primary'},
      {name: 'Nur', completed: false, color: 'primary'},
      {name: 'LKG', completed: false, color: 'primary'},
      {name: 'UKG', completed: false, color: 'primary'},
      {name: '1st', completed: false, color: 'primary'},
      {name: '2nd', completed: false, color: 'primary'},
      {name: '3rd', completed: false, color: 'primary'},
      {name: '4th', completed: false, color: 'primary'},
      {name: '5th', completed: false, color: 'primary'},
      {name: '6th', completed: false, color: 'primary'},
      {name: '7th', completed: false, color: 'primary'},
      {name: '8th', completed: false, color: 'primary'},
      {name: '9th', completed: false, color: 'primary'},
      {name: '10th', completed: false, color: 'primary'},
      {name: '11th', completed: false, color: 'primary'},
      {name: '12th', completed: false, color: 'primary'},  
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


  constructor() { }

  ngOnInit(): void {
  }

}
