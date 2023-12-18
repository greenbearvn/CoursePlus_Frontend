import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogListComponent } from './admin-blog-list.component';

describe('AdminBlogListComponent', () => {
  let component: AdminBlogListComponent;
  let fixture: ComponentFixture<AdminBlogListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBlogListComponent]
    });
    fixture = TestBed.createComponent(AdminBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
