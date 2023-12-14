import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConventionCreateComponent } from './admin-convention-create.component';

describe('AdminConventionCreateComponent', () => {
  let component: AdminConventionCreateComponent;
  let fixture: ComponentFixture<AdminConventionCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminConventionCreateComponent]
    });
    fixture = TestBed.createComponent(AdminConventionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
