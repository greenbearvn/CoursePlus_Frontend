import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDanhmucDetailComponent } from './admin-danhmuc-detail.component';

describe('AdminDanhmucDetailComponent', () => {
  let component: AdminDanhmucDetailComponent;
  let fixture: ComponentFixture<AdminDanhmucDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDanhmucDetailComponent]
    });
    fixture = TestBed.createComponent(AdminDanhmucDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
