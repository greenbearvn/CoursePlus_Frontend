import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoidungAdminComponent } from './nguoidung-admin.component';

describe('NguoidungAdminComponent', () => {
  let component: NguoidungAdminComponent;
  let fixture: ComponentFixture<NguoidungAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NguoidungAdminComponent]
    });
    fixture = TestBed.createComponent(NguoidungAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
