import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionlistComponent } from './lessionlist.component';

describe('LessionlistComponent', () => {
  let component: LessionlistComponent;
  let fixture: ComponentFixture<LessionlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessionlistComponent]
    });
    fixture = TestBed.createComponent(LessionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
