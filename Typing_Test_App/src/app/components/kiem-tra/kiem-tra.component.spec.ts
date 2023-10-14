import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemTraComponent } from './kiem-tra.component';

describe('KiemTraComponent', () => {
  let component: KiemTraComponent;
  let fixture: ComponentFixture<KiemTraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KiemTraComponent]
    });
    fixture = TestBed.createComponent(KiemTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
