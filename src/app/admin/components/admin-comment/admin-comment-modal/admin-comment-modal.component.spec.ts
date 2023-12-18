import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentModalComponent } from './admin-comment-modal.component';

describe('AdminCommentModalComponent', () => {
  let component: AdminCommentModalComponent;
  let fixture: ComponentFixture<AdminCommentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCommentModalComponent]
    });
    fixture = TestBed.createComponent(AdminCommentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
