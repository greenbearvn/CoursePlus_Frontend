import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDanhmucDetailListComponent } from './admin-danhmuc-detail-list.component';

describe('AdminDanhmucDetailListComponent', () => {
  let component: AdminDanhmucDetailListComponent;
  let fixture: ComponentFixture<AdminDanhmucDetailListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDanhmucDetailListComponent]
    });
    fixture = TestBed.createComponent(AdminDanhmucDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
