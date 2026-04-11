import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-management',
  templateUrl: './booking-management.component.html',
  styleUrls: ['./booking-management.component.scss']
})
export class BookingManagementComponent implements OnInit {
  bookingForm: FormGroup;
  submitted = false;
  bookings: any[] = [];
  errorMsg = '';
  successMsg = '';

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.bookingForm = this.fb.group({
      trainId: ['', Validators.required],
      userId: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit() {
    // For demo, get userId from form or localStorage
    const userId = this.bookingForm.get('userId')?.value || localStorage.getItem('userId') || '';
    if (userId) {
      this.fetchBookings(userId);
    }
  }

  fetchBookings(userId: string) {
    this.bookingService.getBookings(userId).subscribe({
      next: (data: any) => this.bookings = data,
      error: (err: any) => this.errorMsg = err.error?.message || 'Failed to fetch bookings.'
    });
  }

  get f() { return this.bookingForm.controls as { [key: string]: any }; }

  onSubmit() {
    this.submitted = true;
    this.errorMsg = '';
    this.successMsg = '';
    if (this.bookingForm.invalid) {
      return;
    }
    this.bookingService.createBooking(this.bookingForm.value).subscribe({
      next: (res: any) => {
        this.successMsg = 'Booking created!';
        this.fetchBookings(this.bookingForm.value.userId);
        this.bookingForm.reset();
        this.submitted = false;
      },
      error: (err: any) => {
        this.errorMsg = err.error?.message || 'Booking failed. Please try again.';
      }
    });
  }
}
