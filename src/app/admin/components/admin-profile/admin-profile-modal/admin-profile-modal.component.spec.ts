import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileModalComponent } from './admin-profile-modal.component';

describe('AdminProfileModalComponent', () => {
  let component: AdminProfileModalComponent;
  let fixture: ComponentFixture<AdminProfileModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProfileModalComponent]
    });
    fixture = TestBed.createComponent(AdminProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
