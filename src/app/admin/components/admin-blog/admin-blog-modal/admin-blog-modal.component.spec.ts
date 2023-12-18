import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogModalComponent } from './admin-blog-modal.component';

describe('AdminBlogModalComponent', () => {
  let component: AdminBlogModalComponent;
  let fixture: ComponentFixture<AdminBlogModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBlogModalComponent]
    });
    fixture = TestBed.createComponent(AdminBlogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
