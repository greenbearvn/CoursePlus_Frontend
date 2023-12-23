import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestVideoListComponent } from './admin-test-video-list.component';

describe('AdminTestVideoListComponent', () => {
  let component: AdminTestVideoListComponent;
  let fixture: ComponentFixture<AdminTestVideoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTestVideoListComponent]
    });
    fixture = TestBed.createComponent(AdminTestVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
