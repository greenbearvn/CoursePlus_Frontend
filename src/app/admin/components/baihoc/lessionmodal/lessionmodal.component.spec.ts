import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionmodalComponent } from './lessionmodal.component';

describe('LessionmodalComponent', () => {
  let component: LessionmodalComponent;
  let fixture: ComponentFixture<LessionmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessionmodalComponent]
    });
    fixture = TestBed.createComponent(LessionmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
