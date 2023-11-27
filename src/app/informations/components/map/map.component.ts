import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  zoom = 2;
  markers: any[] = [];
  point: google.maps.LatLngLiteral = {
    lat: 52.39744395242645, 
    lng: 16.903862292061252
  };

  markerInfoContent = '';
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    animation: google.maps.Animation.DROP,
  };

  mapOptions: google.maps.MapOptions = {
    center: {    lat: 52.39744395242645, 
      lng: 16.903862292061252},
    zoom : 14
 }
 marker = {
    position: {  
      lat: 52.39744395242645, 
      lng: 16.903862292061252
    },
 }

 center: google.maps.LatLng | any = {lat: 52.39744395242645, 
  lng: 16.903862292061252};

 options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15 ,
    minZoom: 8,
  };
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap | undefined;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow | undefined;
 
  ngOnInit() {
    this.addMarker();
  }

  addMarker() {
    this.markers.push({
      position: this.marker.position,
      label: {
        color: 'black',
        fontWeight: 'bold',
        text: 'Poznańskie Stowarzyszenie Abstynentów'
      },
      title: 'Adres: Małeckiego 11, 60-706 Poznań' + (this.markers.length + 1),
    });
  
}
 

}
