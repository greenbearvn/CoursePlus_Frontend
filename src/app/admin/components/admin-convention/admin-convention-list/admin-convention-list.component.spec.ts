import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConventionListComponent } from './admin-convention-list.component';

describe('AdminConventionListComponent', () => {
  let component: AdminConventionListComponent;
  let fixture: ComponentFixture<AdminConventionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminConventionListComponent]
    });
    fixture = TestBed.createComponent(AdminConventionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
