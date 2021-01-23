import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeeScheduleComponent } from './create-fee-schedule.component';

describe('CreateFeeScheduleComponent', () => {
  let component: CreateFeeScheduleComponent;
  let fixture: ComponentFixture<CreateFeeScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFeeScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFeeScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
