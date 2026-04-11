import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainManagementComponent } from './admin-train-management.component';

describe('AdminTrainManagementComponent', () => {
  let component: AdminTrainManagementComponent;
  let fixture: ComponentFixture<AdminTrainManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTrainManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTrainManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
