import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../interfaces/hotels.interface';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles:[`
  mat-card{
    margin-top:20px;
  }
  `
]

})
export class ListadoComponent implements OnInit {

  hotels: Hotel[] = []

  constructor(private heroesService: HotelsService) { }

  ngOnInit(): void {

    this.heroesService.getHotels().
      subscribe(resp =>
        this.hotels = resp
        )
        console.log(this.hotels)
  }

}
