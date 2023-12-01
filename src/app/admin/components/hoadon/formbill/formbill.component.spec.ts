import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbillComponent } from './formbill.component';

describe('FormbillComponent', () => {
  let component: FormbillComponent;
  let fixture: ComponentFixture<FormbillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormbillComponent]
    });
    fixture = TestBed.createComponent(FormbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
