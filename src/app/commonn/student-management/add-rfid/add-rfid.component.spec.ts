import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRfidComponent } from './add-rfid.component';

describe('AddRfidComponent', () => {
  let component: AddRfidComponent;
  let fixture: ComponentFixture<AddRfidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRfidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRfidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
