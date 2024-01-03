import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollectionModalComponent } from './admin-collection-modal.component';

describe('AdminCollectionModalComponent', () => {
  let component: AdminCollectionModalComponent;
  let fixture: ComponentFixture<AdminCollectionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCollectionModalComponent]
    });
    fixture = TestBed.createComponent(AdminCollectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
