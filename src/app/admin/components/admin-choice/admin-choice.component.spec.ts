import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChoiceComponent } from './admin-choice.component';

describe('AdminChoiceComponent', () => {
  let component: AdminChoiceComponent;
  let fixture: ComponentFixture<AdminChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminChoiceComponent]
    });
    fixture = TestBed.createComponent(AdminChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
