import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { Hotel } from '../../interfaces/hotels.interface';
import { RoomSearch, BookingPreview } from '../../interfaces/bookings.interfaces';
import { HttpParams } from '@angular/common/http';
import { NoroomsdialogComponent } from '../../components/noroomsdialog/noroomsdialog.component';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width:100%;
    border-radius:5px;
  }
  `]
})
export class AgregarComponent implements OnInit {

  bookingPreviews: BookingPreview[] = []
  idHotel: number = 0;

  params: any;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  maxPrice: number = 300;

   roomSearch!: RoomSearch;
    

  heroe: Heroe = {
    superhero: "",
    alter_ego: "",
    first_appearance: "",
    characters: "",
    publisher: Publisher.DCComics,
    alt_image: ""
  }

  hotel!: Hotel;

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) =>
        this.heroesService.getHeroePorId(id))
      ).subscribe(hotel => this.hotel = hotel)
    console.log(this.hotel)

  }


  guardar() {
    if (this.heroe.superhero.trim().length !== 0) {

      if (this.heroe.id) {
        this.heroesService.actualizarHeroe(this.heroe).subscribe(heroe => this.mostrarSnackbar("Registro actualizado"));
      } else {
        this.heroesService.agregarHeroe(this.heroe).subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnackbar("Registro creado");
        })

      }
    }
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
      this.heroesService.searchAvailableRooms(this.roomSearch).
        subscribe(resp => this.bookingPreviews = resp)
    }
   
  }




  borrarHeroe() {

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: "550px",
      data: this.heroe
    })

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.heroesService.borrarHeroe(this.heroe.id!).subscribe(resp => {
          this.router.navigate(['/heroes'])
        })
      }
    })


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
