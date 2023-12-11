import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalnguoidungadminComponent } from './modalnguoidungadmin.component';

describe('ModalnguoidungadminComponent', () => {
  let component: ModalnguoidungadminComponent;
  let fixture: ComponentFixture<ModalnguoidungadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalnguoidungadminComponent]
    });
    fixture = TestBed.createComponent(ModalnguoidungadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
