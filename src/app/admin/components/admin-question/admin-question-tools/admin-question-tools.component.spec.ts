import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestionToolsComponent } from './admin-question-tools.component';

describe('AdminQuestionToolsComponent', () => {
  let component: AdminQuestionToolsComponent;
  let fixture: ComponentFixture<AdminQuestionToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminQuestionToolsComponent]
    });
    fixture = TestBed.createComponent(AdminQuestionToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
