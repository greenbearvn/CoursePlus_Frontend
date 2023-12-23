import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestedComponent } from './admin-tested.component';

describe('AdminTestedComponent', () => {
  let component: AdminTestedComponent;
  let fixture: ComponentFixture<AdminTestedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTestedComponent]
    });
    fixture = TestBed.createComponent(AdminTestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
