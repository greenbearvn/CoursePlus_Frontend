import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestToolComponent } from './admin-test-tool.component';

describe('AdminTestToolComponent', () => {
  let component: AdminTestToolComponent;
  let fixture: ComponentFixture<AdminTestToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTestToolComponent]
    });
    fixture = TestBed.createComponent(AdminTestToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
