import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollectionListComponent } from './admin-collection-list.component';

describe('AdminCollectionListComponent', () => {
  let component: AdminCollectionListComponent;
  let fixture: ComponentFixture<AdminCollectionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCollectionListComponent]
    });
    fixture = TestBed.createComponent(AdminCollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
