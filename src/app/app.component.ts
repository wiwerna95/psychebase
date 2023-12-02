import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bazapsyche';
  loggedIn: boolean = false;
  
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.isLoggedInSubject.subscribe( (resp: boolean)=> {
      this.loggedIn = resp;
    })
  }
  
}
