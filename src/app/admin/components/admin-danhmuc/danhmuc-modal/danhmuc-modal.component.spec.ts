import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucModalComponent } from './danhmuc-modal.component';

describe('DanhmucModalComponent', () => {
  let component: DanhmucModalComponent;
  let fixture: ComponentFixture<DanhmucModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhmucModalComponent]
    });
    fixture = TestBed.createComponent(DanhmucModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
