import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../services/train.service';

@Component({
  selector: 'app-train-management',
  templateUrl: './train-management.component.html',
  styleUrls: ['./train-management.component.scss']
})
export class TrainManagementComponent implements OnInit {
  trains: any[] = [];
  errorMsg = '';

  constructor(private trainService: TrainService) {}

  ngOnInit() {
    this.fetchTrains();
  }

  fetchTrains() {
    this.trainService.getTrains().subscribe({
      next: (data) => this.trains = data,
      error: err => this.errorMsg = err.error?.message || 'Failed to fetch trains.'
    });
  }
}
