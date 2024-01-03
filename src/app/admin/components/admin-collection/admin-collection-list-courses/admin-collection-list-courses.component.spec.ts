import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollectionListCoursesComponent } from './admin-collection-list-courses.component';

describe('AdminCollectionListCoursesComponent', () => {
  let component: AdminCollectionListCoursesComponent;
  let fixture: ComponentFixture<AdminCollectionListCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCollectionListCoursesComponent]
    });
    fixture = TestBed.createComponent(AdminCollectionListCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
