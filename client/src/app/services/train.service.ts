import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  constructor(private http: HttpClient) { }

  getTrains(): Observable<any> {
    return this.http.get(`${environment.trainApi}`);
  }

  addTrain(train: any): Observable<any> {
    return this.http.post(`${environment.trainApi}`, train);
  }

  updateTrain(trainId: string, train: any): Observable<any> {
    return this.http.put(`${environment.trainApi}/${trainId}`, train);
  }

  deleteTrain(trainId: string): Observable<any> {
    return this.http.delete(`${environment.trainApi}/${trainId}`);
  }
}
