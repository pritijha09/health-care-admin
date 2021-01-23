import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBusComponent } from './assign-bus.component';

describe('AssignBusComponent', () => {
  let component: AssignBusComponent;
  let fixture: ComponentFixture<AssignBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
