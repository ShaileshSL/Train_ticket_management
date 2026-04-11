import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainManagementComponent } from './train-management.component';

describe('TrainManagementComponent', () => {
  let component: TrainManagementComponent;
  let fixture: ComponentFixture<TrainManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
