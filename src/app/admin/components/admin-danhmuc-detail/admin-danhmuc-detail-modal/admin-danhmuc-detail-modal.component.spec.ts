import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDanhmucDetailModalComponent } from './admin-danhmuc-detail-modal.component';

describe('AdminDanhmucDetailModalComponent', () => {
  let component: AdminDanhmucDetailModalComponent;
  let fixture: ComponentFixture<AdminDanhmucDetailModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDanhmucDetailModalComponent]
    });
    fixture = TestBed.createComponent(AdminDanhmucDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
