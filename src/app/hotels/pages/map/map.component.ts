import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';
import { BookigcompleteComponent } from '../../components/bookingcomplete/bookingcomplete.component';
import { ActivatedRoute } from '@angular/router';
import { Popup } from 'mapbox-gl';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';


  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 8,
      center: [-7.55, 43.00]
    });
  }

  ngAfterViewInit(): void {

    const markerBurela = new mapboxgl.Marker({
    }).setLngLat([-7.3587521, 43.6606329]).setPopup(new Popup().setHTML(
      `<h4><a href="http://localhost:4200/hotels/roomSearch/26">Reservar FN Burela</a></h4>`)).addTo(this.map)

    const markerSada = new mapboxgl.Marker({
    }).setLngLat([-8.2534683, 43.3515799])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/51">Reservar FN Sada</a></h4>`))
      .addTo(this.map)

    const markerOurense = new mapboxgl.Marker({
    }).setLngLat([-7.6114105, 42.1968459])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/3">Reservar FN Ourense</a></h4>`))
      .addTo(this.map)

    const markerCoruña = new mapboxgl.Marker({
    }).setLngLat([-8.3959425, 43.3709703])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/32">Reservar FN A Coruña</a></h4>`))
      .addTo(this.map)

    const markerVigo = new mapboxgl.Marker({
    }).setLngLat([-8.7247205, 42.2376602])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/1">Reservar FN Vigo</a></h4>`))
      .addTo(this.map)

    const markerLugo = new mapboxgl.Marker({
    }).setLngLat([-7.4739921, 43.0462247])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/4">Reservar FN Lugo</a></h4>`))
      .addTo(this.map)

    const markerSanxenxo = new mapboxgl.Marker({
    }).setLngLat([-8.8069800, 42.3999600])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/53">Reservar FN Sanxenxo</a></h4>`))
      .addTo(this.map)

    const markerEstrada = new mapboxgl.Marker({
    }).setLngLat([-8.4907139, 42.6880102])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/52">Reservar FN A Estrada</a></h4>`))
      .addTo(this.map)

    const markerAsPontes = new mapboxgl.Marker({
    }).setLngLat([-7.853109, 43.4502183])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/2">Reservar FN As Pontes</a></h4>`))
      .addTo(this.map)

    const markerOviedo = new mapboxgl.Marker({
    }).setLngLat([-5.8450534, 43.3604218])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/37">Reservar FN Oviedo</a></h4>`))
      .addTo(this.map)

    const markerCebreiro = new mapboxgl.Marker({
    }).setLngLat([-7.0574408, 42.7188437])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/55">Reservar FN Cebreiro</a></h4>`))
      .addTo(this.map)

    const markerLalin = new mapboxgl.Marker({
    }).setLngLat([-8.1109759, 42.6614127])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/54">Reservar FN Lalín</a></h4>`))
      .addTo(this.map)

    const markerLeon = new mapboxgl.Marker({
    }).setLngLat([-5.9714151, 42.6341451])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/44">Reservar FN León</a></h4>`))
      .addTo(this.map)

    const markerBurgos = new mapboxgl.Marker({
    }).setLngLat([-3.696977, 42.343926])
      .setPopup(new Popup().setHTML(
        `<h4><a href="http://localhost:4200/hotels/roomSearch/31">Reservar FN Burgos</a></h4>`))
      .addTo(this.map)



  }

}








