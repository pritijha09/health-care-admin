import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBusRouteComponent } from './assign-bus-route.component';

describe('AssignBusRouteComponent', () => {
  let component: AssignBusRouteComponent;
  let fixture: ComponentFixture<AssignBusRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignBusRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBusRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
