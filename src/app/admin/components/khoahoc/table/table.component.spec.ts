import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCourseComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableCourseComponent;
  let fixture: ComponentFixture<TableCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCourseComponent]
    });
    fixture = TestBed.createComponent(TableCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
