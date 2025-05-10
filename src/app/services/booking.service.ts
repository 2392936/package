import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Booking {
  bookingID?: number;
  userID: number;
  packageID: number;
  startDate: string;
  endDate: string;
  status: string;
  paymentID?: number;
  insurances?: any[];
  user?: any;
  payment?: any;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'https://localhost:7117/api/BookandPayment';

  constructor(private http: HttpClient) {}

  addBooking(booking: Booking): Observable<any> {
    return this.http.post<any>(this.apiUrl, booking).pipe(
      catchError((error) => {
        console.error('Error adding booking:', error);
        return throwError(() => error);
      })
    );
  }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  updateBooking(id: number, startDate: string, endDate: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { startDate, endDate }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}