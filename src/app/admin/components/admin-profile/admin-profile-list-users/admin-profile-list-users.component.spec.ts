import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileListUsersComponent } from './admin-profile-list-users.component';

describe('AdminProfileListUsersComponent', () => {
  let component: AdminProfileListUsersComponent;
  let fixture: ComponentFixture<AdminProfileListUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProfileListUsersComponent]
    });
    fixture = TestBed.createComponent(AdminProfileListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
