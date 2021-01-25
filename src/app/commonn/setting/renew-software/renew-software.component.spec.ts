import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewSoftwareComponent } from './renew-software.component';

describe('RenewSoftwareComponent', () => {
  let component: RenewSoftwareComponent;
  let fixture: ComponentFixture<RenewSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
