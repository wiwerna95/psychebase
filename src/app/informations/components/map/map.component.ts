import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ToastrService } from 'ngx-toastr';
import MarkerClusterer from "@google/markerclustererplus";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  markers: any[] = [];
  markerCluster: any;
  constructor(private toastr: ToastrService) {}
  
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  point: google.maps.LatLngLiteral = {
    lat: 52.39744395242645, 
    lng: 16.903862292061252
  };

  mapZoom = 7;
  mapCenter: google.maps.LatLng;

  markerInfoContent = 'content';
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    animation: google.maps.Animation.DROP,

  };

  mapOptions: google.maps.MapOptions = {
    center: {    lat: 52.39744395242645, 
      lng: 16.903862292061252},
    zoom : 40
 }
 public marker = {
    position: {  
      lat: 52.39744395242645, 
      lng: 16.903862292061252
    }, 
      label: {
        color: 'blue',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    
}

ngOnInit(): void {
  this.addMarker()
  this.getCurrentLocation()
}


getCurrentLocation() {

  navigator.geolocation.getCurrentPosition(
    (position: GeolocationPosition) => {

      const point: google.maps.LatLngLiteral = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      this.mapCenter = new google.maps.LatLng(point);
      this.map.panTo(point);

      this.markerInfoContent = "I'm here!";

      this.markerOptions = {
        draggable: false,
        animation: google.maps.Animation.DROP,
      };
    },
    (error) => {

      if (error.PERMISSION_DENIED) {
        this.toastr.error("Couldn't get your location", 'Permission denied');
      } else if (error.POSITION_UNAVAILABLE) {
        this.toastr.error(
          "Couldn't get your location",
          'Position unavailable'
        );
      } else if (error.TIMEOUT) {
        this.toastr.error("Couldn't get your location", 'Timed out');
      } else {
        this.toastr.error(error.message, `Error: ${error.code}`);
      }
    },
    { enableHighAccuracy: true }
  );
}

addMarker() {

    this.markers.push({
      position: this.marker.position,
          label: {
        color: 'blue',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    });
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }
}
