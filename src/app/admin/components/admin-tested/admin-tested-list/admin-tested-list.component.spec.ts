import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestedListComponent } from './admin-tested-list.component';

describe('AdminTestedListComponent', () => {
  let component: AdminTestedListComponent;
  let fixture: ComponentFixture<AdminTestedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTestedListComponent]
    });
    fixture = TestBed.createComponent(AdminTestedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
