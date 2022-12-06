import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { Hotel } from '../../interfaces/hotels.interface';
import { RoomSearch, BookingPreview } from '../../interfaces/bookings.interfaces';


@Component({
  selector: 'app-room-search',
  templateUrl: './room-search.component.html',
  styles: [`
  img{
    width:100%;
    border-radius:5px;
  }
  `]
})
export class RoomSearchComponent implements OnInit {

  bookingPreviews: BookingPreview[] = []
  idHotel: number = 0;

  params: any;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  maxPrice: number = 300;

   roomSearch!: RoomSearch;


  hotel!: Hotel;


  constructor(
    private hotelsService: HotelsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) =>
        this.hotelsService.getHotelById(id))
      ).subscribe(hotel => this.hotel = hotel)
    console.log(this.hotel)

  }


  buscar() {
   
     this.roomSearch = {
      idHotel: this.hotel.idHotel,
      checkIn: this.range.value.start!,
      checkOut: this.range.value.end!,
      maxPrice: this.maxPrice
    }

    const date = new Date();

    if (this.roomSearch.checkIn < date) {
      const dialog = this.dialog.open(ConfirmarComponent, {
        width: "550px"
      })
    } else {
      this.hotelsService.searchAvailableRooms(this.roomSearch).
        subscribe(resp => this.bookingPreviews = resp)
    }
   
  }


  mostrarSnackbar(mensaje: string) {
    this.snackbar.open(mensaje, "ok!", {
      duration: 2500
    })
  }

  onInputChange(event: MatSliderChange) {
    this.maxPrice = event.value!;
    console.log(this.maxPrice);
  }

}
