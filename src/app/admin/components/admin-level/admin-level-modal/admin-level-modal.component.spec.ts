import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLevelModalComponent } from './admin-level-modal.component';

describe('AdminLevelModalComponent', () => {
  let component: AdminLevelModalComponent;
  let fixture: ComponentFixture<AdminLevelModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLevelModalComponent]
    });
    fixture = TestBed.createComponent(AdminLevelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
