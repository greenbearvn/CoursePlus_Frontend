import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestedModalComponent } from './admin-tested-modal.component';

describe('AdminTestedModalComponent', () => {
  let component: AdminTestedModalComponent;
  let fixture: ComponentFixture<AdminTestedModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTestedModalComponent]
    });
    fixture = TestBed.createComponent(AdminTestedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
