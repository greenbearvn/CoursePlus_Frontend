import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucListComponent } from './danhmuc-list.component';

describe('DanhmucListComponent', () => {
  let component: DanhmucListComponent;
  let fixture: ComponentFixture<DanhmucListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhmucListComponent]
    });
    fixture = TestBed.createComponent(DanhmucListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
