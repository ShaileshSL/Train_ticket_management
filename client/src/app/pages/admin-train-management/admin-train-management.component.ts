import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainService } from '../../services/train.service';

@Component({
  selector: 'app-admin-train-management',
  templateUrl: './admin-train-management.component.html',
  styleUrls: ['./admin-train-management.component.scss']
})
export class AdminTrainManagementComponent implements OnInit {
  trainForm: FormGroup;
  submitted = false;
  trains: any[] = [];
  errorMsg = '';
  successMsg = '';
  editingTrainId: string | null = null;

  constructor(private fb: FormBuilder, private trainService: TrainService) {
    this.trainForm = this.fb.group({
      name: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchTrains();
  }

  fetchTrains() {
    this.trainService.getTrains().subscribe({
      next: (data) => this.trains = data,
      error: err => this.errorMsg = err.error?.message || 'Failed to fetch trains.'
    });
  }

  get f() { return this.trainForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.errorMsg = '';
    this.successMsg = '';
    if (this.trainForm.invalid) {
      return;
    }
    if (this.editingTrainId) {
      // Update train
      this.trainService.updateTrain(this.editingTrainId, this.trainForm.value).subscribe({
        next: () => {
          this.successMsg = 'Train updated!';
          this.fetchTrains();
          this.trainForm.reset();
          this.editingTrainId = null;
          this.submitted = false;
        },
        error: err => {
          this.errorMsg = err.error?.message || 'Failed to update train.';
        }
      });
    } else {
      // Add train
      this.trainService.addTrain(this.trainForm.value).subscribe({
        next: () => {
          this.successMsg = 'Train added!';
          this.fetchTrains();
          this.trainForm.reset();
          this.submitted = false;
        },
        error: err => {
          this.errorMsg = err.error?.message || 'Failed to add train.';
        }
      });
    }
  }

  onEdit(train: any) {
    this.editingTrainId = train.id;
    this.trainForm.patchValue({
      name: train.name,
      source: train.source,
      destination: train.destination,
      departure: train.departure,
      arrival: train.arrival
    });
    this.successMsg = '';
    this.errorMsg = '';
    this.submitted = false;
  }

  onDelete(trainId: string) {
    if (!confirm('Are you sure you want to delete this train?')) return;
    this.trainService.deleteTrain(trainId).subscribe({
      next: () => {
        this.successMsg = 'Train deleted!';
        this.fetchTrains();
      },
      error: err => {
        this.errorMsg = err.error?.message || 'Failed to delete train.';
      }
    });
  }

  onCancelEdit() {
    this.editingTrainId = null;
    this.trainForm.reset();
    this.successMsg = '';
    this.errorMsg = '';
    this.submitted = false;
  }
}
