import { Pipe, PipeTransform } from '@angular/core';
import { BookingPreview } from '../interfaces/bookings.interfaces';

@Pipe({ 
  name: 'roomPic'
})
export class RoomPicPipe implements PipeTransform {

  transform(bookingPreview: BookingPreview): string {
    if(!bookingPreview.rtmName){
      return 'assets/no-image.png'
    }else{
      return `assets/rooms/${bookingPreview.rtmName}.jpg`;
    }
  
  }

}
