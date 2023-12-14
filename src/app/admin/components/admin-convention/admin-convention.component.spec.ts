import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConventionComponent } from './admin-convention.component';

describe('AdminConventionComponent', () => {
  let component: AdminConventionComponent;
  let fixture: ComponentFixture<AdminConventionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminConventionComponent]
    });
    fixture = TestBed.createComponent(AdminConventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
