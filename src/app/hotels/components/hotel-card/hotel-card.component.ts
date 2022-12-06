import { Component, Input } from '@angular/core';
import { Hotel } from '../../interfaces/hotels.interface';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styles: [`
  mat-card{
    margin-top:20px;
  }
  `]
})
export class HotelCardComponent {

  @Input() hotel!: Hotel;


}
