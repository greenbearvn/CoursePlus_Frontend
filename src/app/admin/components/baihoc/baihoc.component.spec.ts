import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaihocComponent } from './baihoc.component';

describe('BaihocComponent', () => {
  let component: BaihocComponent;
  let fixture: ComponentFixture<BaihocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaihocComponent]
    });
    fixture = TestBed.createComponent(BaihocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
