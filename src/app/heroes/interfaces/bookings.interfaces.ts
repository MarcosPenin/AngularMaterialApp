export interface RoomSearch {
    idHotel: number;
    idRoomType?:number;
    checkIn: Date;
    checkOut:Date;
    maxPrice?:number;
    minPrice?:number;
}

export interface BookingPreview {
    idRoom:number;
    rmNumber: number;
    rtmName:String;
    nightPrice:number;
    bookingPrice:number;
}


export interface BookingRequest {
    idRoom:number;
    idClient: number;
    checkIn: Date;
    checkOut:Date;
}

export interface Booking {
   idBooking:number;
   bkCheckIn:Date,
   bkCheckOut:Date,
   bkPrice:number,
   bkEntryDate:Date,
   bkLastUpdate:Date,
   bkLeavingDate:Date,
   bkExtrasPrice?:number,
   bkPromotional?:number,
   room:any,
   client:any
}