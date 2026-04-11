import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http: HttpClient) { }

  getBookings(userId: string): Observable<any> {
    return this.http.get(`${environment.bookingApi}/user/${userId}`);
  }

  createBooking(booking: any): Observable<any> {
    return this.http.post(`${environment.bookingApi}`, booking);
  }
}
