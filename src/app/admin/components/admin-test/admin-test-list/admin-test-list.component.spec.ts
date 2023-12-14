import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestListComponent } from './admin-test-list.component';

describe('AdminTestListComponent', () => {
  let component: AdminTestListComponent;
  let fixture: ComponentFixture<AdminTestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTestListComponent]
    });
    fixture = TestBed.createComponent(AdminTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
