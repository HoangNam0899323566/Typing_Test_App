import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuyenTapComponent } from './luyen-tap.component';

describe('LuyenTapComponent', () => {
  let component: LuyenTapComponent;
  let fixture: ComponentFixture<LuyenTapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuyenTapComponent]
    });
    fixture = TestBed.createComponent(LuyenTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
