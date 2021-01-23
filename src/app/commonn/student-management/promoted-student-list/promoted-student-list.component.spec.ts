import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedStudentListComponent } from './promoted-student-list.component';

describe('PromotedStudentListComponent', () => {
  let component: PromotedStudentListComponent;
  let fixture: ComponentFixture<PromotedStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotedStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotedStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
