import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearPromotionComponent } from './year-promotion.component';

describe('YearPromotionComponent', () => {
  let component: YearPromotionComponent;
  let fixture: ComponentFixture<YearPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
