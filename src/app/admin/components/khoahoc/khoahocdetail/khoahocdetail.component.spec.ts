import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoahocdetailComponent } from './khoahocdetail.component';

describe('KhoahocdetailComponent', () => {
  let component: KhoahocdetailComponent;
  let fixture: ComponentFixture<KhoahocdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhoahocdetailComponent]
    });
    fixture = TestBed.createComponent(KhoahocdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
