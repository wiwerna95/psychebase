import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  zoom = 3;
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

 center: google.maps.LatLng | any = {lat: 52.069745484204745, 
  lng: 19.4803112};

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
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  addMarker() {
    this.markers.push({
      position: {  
        lat: 52.08457802147369, 
        lng: 16.63704462452636,
      },
      label: {
        color: 'white',
        fontWeight: 'bold',
        text: 'Wojewódzki Szpital Neuropsychiatryczny im. Oskara Bielawskiego'
      },
    });
    this.markers.push({
      position: {  
        lat: 51.65390093642356, 
        lng: 17.82720395285413,
      },
      label: {
        color: 'white',
        fontWeight: 'bold',
        text: ' Szpital Ostrów wielkopolski'
      },
    });
    this.markers.push({
      position: {  
        lat: 51.82008296072, 
        lng: 18.307009676016236,
      },
      label: {
        color: 'white',
        fontWeight: 'bold',
        text: 'Wojewódzki Zakład Opieki Psychiatrycznej w Sokołówce sp. z o.o.'
      },
    });
    this.markers.push({
      position: {  
        lat: 53.35556705145023,  
        lng: 17.04372962755636,
      },
      label: {
        color: 'white',
        fontWeight: 'bold',
        text: 'Szpital Powiatowy im. Alfreda Sokołowskiego w Złotowie'
      },
    });
    this.markers.push({
      position: {  
        lat: 52.38284345502058,  
        lng:  16.911437366112157,
      },
      label: {
        color: 'white',
        fontWeight: 'bold',
        text: 'Centrum Zdrowia Psychicznego HCP'
      },
    }); 
  
    this.markers.push({
      position: {  
        lat: 52.41152697851177,  
        lng:  16.882628489822775,
      },
      label: {
        color: 'white',
        fontWeight: 'bold',
        text: 'Klinika Psychiatrii w Poznaniu'
      },
    }); 
    this.markers.push({
      position: {  
        lat: 53.12872945241107,  
        lng: 18.033117203877495,
      },
      label: {
        color: 'white',
        fontWeight: 'bold',
        text: 'Szpital Uniwersytecki im. Antoniego Jurasza w Bydgoszczy'
      },
    }); 
}
 

}
