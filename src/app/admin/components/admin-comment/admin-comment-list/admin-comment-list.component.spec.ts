import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentListComponent } from './admin-comment-list.component';

describe('AdminCommentListComponent', () => {
  let component: AdminCommentListComponent;
  let fixture: ComponentFixture<AdminCommentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCommentListComponent]
    });
    fixture = TestBed.createComponent(AdminCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
