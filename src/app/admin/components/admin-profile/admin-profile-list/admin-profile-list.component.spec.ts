import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileListComponent } from './admin-profile-list.component';

describe('AdminProfileListComponent', () => {
  let component: AdminProfileListComponent;
  let fixture: ComponentFixture<AdminProfileListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProfileListComponent]
    });
    fixture = TestBed.createComponent(AdminProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
