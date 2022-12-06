import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../../interfaces/hotels.interface';
import { BookingPreview, BookingRequest, RoomSearch } from '../../interfaces/bookings.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { BookigcompleteComponent } from '../bookigcomplete/bookigcomplete.component';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styles: [`
  mat-card{
    margin-top:20px;
  }
  `]
})
export class RoomCardComponent  {

  @Input() bookingPreview!: BookingPreview;
  @Input() roomSearch!: RoomSearch;

  
  constructor(private dialog:MatDialog, private heroesService: HeroesService) { }

  book(){

   const bookingRequest:BookingRequest={
    idRoom:this.bookingPreview.idRoom,
    idClient:41,
    checkIn:this.roomSearch.checkIn,
    checkOut:this.roomSearch.checkOut

   };
    
    this.heroesService.addBooking(bookingRequest)

    const dialog = this.dialog.open(BookigcompleteComponent, {
      width: "550px"
    })



  }
}
