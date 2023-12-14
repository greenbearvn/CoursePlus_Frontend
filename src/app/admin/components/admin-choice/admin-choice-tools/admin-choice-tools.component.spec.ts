import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChoiceToolsComponent } from './admin-choice-tools.component';

describe('AdminChoiceToolsComponent', () => {
  let component: AdminChoiceToolsComponent;
  let fixture: ComponentFixture<AdminChoiceToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminChoiceToolsComponent]
    });
    fixture = TestBed.createComponent(AdminChoiceToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
