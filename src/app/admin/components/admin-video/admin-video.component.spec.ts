import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideoComponent } from './admin-video.component';

describe('AdminVideoComponent', () => {
  let component: AdminVideoComponent;
  let fixture: ComponentFixture<AdminVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVideoComponent]
    });
    fixture = TestBed.createComponent(AdminVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
