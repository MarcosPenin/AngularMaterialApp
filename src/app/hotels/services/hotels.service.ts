import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Hotel } from '../interfaces/hotels.interface';
import { BookingPreview, RoomSearch, BookingRequest } from '../interfaces/bookings.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.baseUrl}/hotels`)
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.baseUrl}/hotels/${id}`)
  }

  searchAvailableRooms(roomSearch: RoomSearch): Observable<BookingPreview[]> {
    return this.http.post<BookingPreview[]>(`${this.baseUrl}/rooms/availableRooms`, roomSearch)
  }

  addBooking(bookingRequest: BookingRequest){
    console.log(`${this.baseUrl}/bookings`)
    console.log(bookingRequest)
    return this.http.post(`${this.baseUrl}/bookings`, bookingRequest).subscribe(
      
)
  }

}
