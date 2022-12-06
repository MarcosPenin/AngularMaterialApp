import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { Hotel } from '../../interfaces/hotels.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  mat-card{
    margin-top:20px;
  }
  `]
})
export class HeroeTarjetaComponent {

  @Input() hotel!: Hotel;


}
