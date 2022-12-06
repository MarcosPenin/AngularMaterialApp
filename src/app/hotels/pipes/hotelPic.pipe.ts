import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../interfaces/hotels.interface';

@Pipe({ 
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(hotel: Hotel): string {
    if(!hotel.htlName){
      return 'assets/no-image.png'
    }else{
      return `assets/hotels/${hotel.htlName}.jpg`;
    }
  
  }

}
