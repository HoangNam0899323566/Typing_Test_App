import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhTichComponent } from './thanh-tich.component';

describe('ThanhTichComponent', () => {
  let component: ThanhTichComponent;
  let fixture: ComponentFixture<ThanhTichComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThanhTichComponent]
    });
    fixture = TestBed.createComponent(ThanhTichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
