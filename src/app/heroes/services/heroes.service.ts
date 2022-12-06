import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';
import { Hotel } from '../interfaces/hotels.interface';
import { BookingPreview, RoomSearch, BookingRequest, Booking } from '../interfaces/bookings.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.baseUrl}/hotels`)
  }

  getHeroePorId(id: number): Observable<Hotel> {
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


  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe)
  }

  actualizarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe)
  }

  borrarHeroe(id: String): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`)
  }



}
